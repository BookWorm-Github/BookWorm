//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//TODO: LEARN TO USE PORT RATHER THAN USING OUR ONE TIME MESSAGING SYSTEM FOR OPTIMIZATION
//TODO: OPTIMIZATION, SHOULD STORE EVERYTHING USING CHROME.STORAGE AND PUT BACKGROUND SCRIPT TO PERSISTENT == FALSE... LOOK BELOW
//https://levelup.gitconnected.com/how-to-use-background-script-to-fetch-data-in-chrome-extension-ef9d7f69625d
const sessionInfo = function() {
	let browserWindowsOfTabs = {}; //stores all the opened/existing windows in a key value pair key = windowId and value = tabIds for current windowId
	let launchOrder = {}; //An array that stores the specific order of a window's Launch. launchOrder[windowId] returns an array that contains the tabId of the tabs inside the specified windowId.
	function init(){//initialize the browserWindowsOfTabs with the currently opened windows of tabs.
		console.log("initializing dem tabs");
		chrome.windows.getAll(windows => {
			windows.map(windowInfo => {
				browserWindowsOfTabs[windowInfo.id] = {
					windowInfo: windowInfo,
					wormHole: []
				};
				launchOrder[windowInfo.id] = [];
				chrome.tabs.query({windowId: windowInfo.id}, tabs => {//the tabs being stored here are going to be used in the Launcher.
					tabs.map(tabInfo => {
						browserWindowsOfTabs[windowInfo.id][tabInfo.id] = tabInfo;
						launchOrder[windowInfo.id][tabInfo.index] = tabInfo.id;
						updateToWormHole(tabInfo);
					})
				})
			})
		})
	}

	function updateLaunchOrder(windowId) {
		chrome.tabs.query({windowId: windowId}, tabs => {//the tabs being stored here are going to be used in the Launcher.
			tabs.map(tabInfo => {
				browserWindowsOfTabs[windowId][tabInfo.id] = tabInfo;
				launchOrder[windowId][tabInfo.index] = tabInfo.id;
			})
		})
	}

	function getWindowInfo(windowId) {//returns an object of tab ids including windowInfo and the wormhole under the windowId.
		return browserWindowsOfTabs[windowId]
	}

	function getTab(windowId, tabId){//returns a Tab object under the specified tabId.
		return browserWindowsOfTabs[windowId][tabId]
	}

	function isEmpty(obj) {
		for (let key in obj){
			if(obj.hasOwnProperty(key)){
				return false;
			}
		}
		return true;
	}

	function addWindow(windowId, windowInfo){//adds new window into the object browserWindowsOfTabs. Occurs when user opens a new window,
		console.log("windowInfo is ");
		console.log(windowInfo);
		const newWindowInfo = {
			windowInfo: windowInfo,
			wormHole: []
		};
		if(!browserWindowsOfTabs.hasOwnProperty(windowId)){
			browserWindowsOfTabs[windowId] = {};

		}
		if(!launchOrder.hasOwnProperty(windowId)){
			launchOrder[windowId] = [];
		}
		Object.assign(browserWindowsOfTabs[windowId], newWindowInfo);//to use Object.assign, both the parameters (target and source respectively) need to be objects and not undefined/null...
	}

	function deleteWindow(windowId){//deletes the window object being stored,  returns true if deleted and false if couldn't be deleted. Note that if the window id doesn't exist in object then deleting will return true
		let isDelete = delete browserWindowsOfTabs[windowId];
		let isLaunchOrderDeleted = delete launchOrder[windowId];
		if(isDelete && isLaunchOrderDeleted){
			console.log("deleting window id: " + windowId + " was successful");
		}
		else{
			console.error("something went wrong with deleting WINDOW id " + windowId)
			console.error("launchOrder: ");
			console.error(launchOrder);
			console.error("browserWindowsOfTabs: ");
			console.error(browserWindowsOfTabs);
		}
		return isDelete && isLaunchOrderDeleted;
	}

	function addTab(windowId, tabInfo){//adds a new tab into the object browserWindowsOfTabs. Should occur when user opens a new tab
		if(!browserWindowsOfTabs[windowId].hasOwnProperty([tabInfo.id])){//if tabInfo.id is undefined as a key in browserWindowsOfTabs, create empty object for the tab
			console.log("initializing tabInfo.id in windOfTabs");
			browserWindowsOfTabs[windowId][tabInfo.id] = {};

		}
		// if(!launchOrder.hasOwnProperty(windowId)){ //window is created first so we should already have created an instance of the launch.
		// 	launchOrder[windowId] = [];
		// }
		console.log("windowId: " + windowId);
		console.log("tabInfo: ");
		console.log(tabInfo);
		Object.assign(browserWindowsOfTabs[windowId][tabInfo.id], tabInfo); //does the same thing as the commented code below


		launchOrder[windowId][tabInfo.index] = tabInfo.id;
		updateToWormHole(tabInfo);
	}

	function deleteTab(windowId, tabId){//deletes the tab object being stored,  returns true if deleted and false if couldn't be deleted. Note that if the tab id doesn't exist in object then deleting will return true

		const removedTabIndex = launchOrder[windowId].indexOf(tabId);
		let isDelete = delete browserWindowsOfTabs[windowId][tabId];
		let isDeleteLO = launchOrder[windowId].splice(removedTabIndex,1)
		if(isDelete && isDeleteLO){
			console.log("deleting tab id: " + tabId + " was successful");
		}
		else{
			console.error("something went wrong with deleting TAB id " + tabId);
		}
		return isDelete;
		return isDeleteLO;
	}

	function updateTab(tabInfo){
		if(tabInfo.windowId === undefined){
			console.error("window id doesn't exist, something went wrong");
		}
		sessionInfo.browserWindowsOfTabs[tabInfo.windowId][tabInfo.id] = tabInfo;
		updateToWormHole(tabInfo);
	}


	function updateToWormHole(tabInfo){//gets called whenever a new url gets inputted or a newtab is found, if its chrome://newtab/ then or anything that starts with chrome:// should not be saved in wormHole.
		let isAddedToWormHole = false;

		if(tabInfo.status === "complete"){//we only store urls that are completed in the tab...
			if(tabInfo.url.includes("chrome://newtab/")){//if the url contains ANY of these cases of elements inside their url, then we ditch it.
				console.log("new tab not adding to chrome");
			}
			else if(existInWormHole(tabInfo.windowId, tabInfo)){//if the link already exists in the wormhole, then we ditch it.
				console.log(tabInfo.url + " already exists in wormhole");
			}
			else{
				console.log("adding to wormhole");
				browserWindowsOfTabs[tabInfo.windowId].wormHole.push(tabInfo);
				isAddedToWormHole = true;
			}
		}
		return isAddedToWormHole;
	}

	function existInWormHole(windowId, tabInfo){//returns true if the windowId with the specified url is within the wormhole. returns false if no duplicates found in the specified wormhole
		if(!browserWindowsOfTabs[windowId].hasOwnProperty("wormHole")){//in case the wormHole is undefined/wasn't created, then create an empty array.
			browserWindowsOfTabs[windowId].wormHole = [];
		}

		let isDup = false;
		for (let i = 0; i < browserWindowsOfTabs[windowId].wormHole.length; i++) {
			if(tabInfo.url === browserWindowsOfTabs[windowId].wormHole[i].url){
				moveUrlToTopWormHole(windowId, tabInfo, i);
				isDup = true;
			}
		}
		return isDup;
	}

	function moveUrlToTopWormHole(windowId, tabInfo, indexOfUrl){ //shifts the specified url up to the top of the wormHole
		browserWindowsOfTabs[windowId].wormHole.splice(indexOfUrl, 1);//deletes the url at the index indexOfUrl
		browserWindowsOfTabs[windowId].wormHole.push(tabInfo);//adds the tabInfo into the bottom of the array (top of the wormhole)
	}

	return{
		initBrowserSession: init,
		isObjectEmpty: isEmpty,//without the () returns a pointer to the properties/methods. Makes it easy to call functions & access vars from other places
		queryWindowInfo: getWindowInfo,
		queryTab: getTab,
		storeWindow: addWindow,
		storeTab: addTab,
		removeTab: deleteTab,
		removeWindow: deleteWindow,
		setTab: updateTab,
		updateLaunchOrder: updateLaunchOrder,
		browserWindowsOfTabs: browserWindowsOfTabs,
		launchOrder: launchOrder
	};
}();


// Check whether extension has been installed, updated etc.
chrome.runtime.onInstalled.addListener(function(details){
	console.log("Welcome to BookWorm :3 Thank you for installing!!! ");
	sessionInfo.initBrowserSession();
});

chrome.runtime.onMessage.addListener(//every time the background script receives a message, this method gets called
	function(msg, sender, sendResponse) {
		switch(msg.rq) {
			// case ("linkToSenderWindow"):
			// 	sessionInfo.browserWindowsOfTabs[sender.tab.windowId].linkedBook = msg.linkedBookId;//TODO: create the message for this case and specify the message to have linkedBookId
			// 	break;
		    case ("LaunchInfo"):
				sendResponse({ID: "LaunchInfo", LaunchInfo: sessionInfo.launchOrder});
				break;

			case ("WormholeInfo"): //should be called when the content script is linking to currently active window.
		    	console.log("sending message of wormhole from windowId: " + msg.linkedWindowId);
		    	if(!sessionInfo.browserWindowsOfTabs[msg.linkedWindowId]){//if the linked windowId given to us doesn't exist in the browsing session, then ignore it.
					console.log(msg.linkedWindowId + " is not currently an active/open window");
					sendResponse({ID: "WormholeInfo", WormholeInfo: {}});
			    }
		    	else{
				    sendResponse({ID: "WormholeInfo", WormholeInfo: sessionInfo.browserWindowsOfTabs[msg.linkedWindowId].wormHole});
			    }
				break;

			case("getCurrWindowId")://getting the window Id that the content script was called in.

                console.log("Background received request for current window id and is sending back "+sender.tab.windowId);
                sendResponse({ID: "getCurrWindowId", windowId: sender.tab.windowId});
		        break;

	        case("openWindowOfTabs")://getting the current active window
				let winId = -1;
			    function retWinId(createdWindow){
			        if(createdWindow !== undefined){
			            console.log("retWinId has window "+createdWindow.id);
			            winId = createdWindow.id;
			            sendResponse({ID: "openWindowOfTabs", windowId: winId});
			        }
			    }
			    chrome.windows.create({url:msg.urlsToLaunch, state:"maximized"}, retWinId);//opens a maximized windows of tabs
			    break;

		    default:
		    	console.error("unknown message");
		    	console.error(msg);
			    break;
		}
		return true;
	});

chrome.tabs.onCreated.addListener(function(tab) {
	sessionInfo.storeTab(tab.windowId, tab);
	sendToContent(tab.windowId);
});

chrome.tabs.onAttached.addListener(function(tabId,attachInfo) {
	chrome.tabs.get(tabId, tab => sessionInfo.storeTab(attachInfo.newWindowId,tab));
	sendToContent(attachInfo.newWindowId);
});


chrome.tabs.onRemoved.addListener(function(tabId, removed) {
	console.log(tabId+" is the removed tab id");
	sendToContent(removed.windowId);
	sessionInfo.removeTab(removed.windowId, tabId);
});

chrome.tabs.onDetached.addListener(function(tabId, detachInfo) {
	console.log(tabId+" from "+ detachInfo.oldWindowID+ " is the removed tab id");
	sendToContent(detachInfo.oldWindowId);
	sessionInfo.removeTab(detachInfo.oldWindowId, tabId);
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window
	//NOTE: listener is fired twice: when the page has started loading, and when the page has finished. So we need to check the tab status.
	console.log(changeInfo);
	sessionInfo.setTab(tab);
    sendToContent(tab.windowId);
});

chrome.tabs.onActivated.addListener(function(activeInfo) {

});

chrome.tabs.onMoved.addListener((tabId, moveInfo) => {
	console.log(tabId);
	console.log("moved in windowId: " + moveInfo.windowId + " from index: " + moveInfo.fromIndex + " to index: " + moveInfo.toIndex);
	sessionInfo.updateLaunchOrder(moveInfo.windowId);
});

chrome.windows.onRemoved.addListener(function(windowId) {
	console.log("window closed");
	sendToContent(windowId);
	sessionInfo.removeWindow(windowId);
});

chrome.windows.onCreated.addListener(function(window) {
	console.log(window);

	sendToContent(window.id);
	sessionInfo.storeWindow( window.id, window);
});

//TODO: fix sendToContent
function sendToContent(windowID){//param: window id of the updated content
	console.log('sending to content from background script about window '+windowID)
	let windowInfo = sessionInfo.queryWindowInfo(windowID);
}

function openHomePage(){
   chrome.tabs.create({url: 'index.html'});
}
