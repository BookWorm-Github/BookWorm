//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//TODO: LEARN TO USE PORT RATHER THAN USING OUR ONE TIME MESSAGING SYSTEM FOR OPTIMIZATION

// import {storeBook} from "../src/firebase/firestore/db_functions";
// urlsToBeStoredInLaunch=[]; //the urls of the most recently closed window
// urlTitles = []; //urlTitles[url] stores the title of the webpage with the given url
let tabs = [];//list of all open urls in the window
let urls = []; //urls[tabid] returns the url for the tab with ID: tabid

let wormUrls = [];//wormhole urls in a list
let urlsForWormhole={}; //wormhole hashtable where urlsForWormhole[windowID] stores all urls, including the closed tabs, for tht window id

const sessionInfo = function() {
	let browserWindowsOfTabs = {}; //stores all the opened/existing windows in a key value pair key = windowId and value = tabIds for current windowId
	function init(){//initialize the browserWindowsOfTabs with the currently opened windows of tabs.
		console.log("initializing dem tabs");
		chrome.windows.getAll(windows => {
			windows.map(windowInfo => {
				browserWindowsOfTabs[windowInfo.id] = {
					windowInfo: windowInfo
				}
				chrome.tabs.query({windowId: windowInfo.id}, tabs => {
					tabs.map(tabInfo => {
						browserWindowsOfTabs[windowInfo.id][tabInfo.id] = tabInfo
					})
				})
			})
		})
	}

	function getWindowOfTabs(windowId) {//returns an object of tab ids including windowInfo under the windowId.
		return browserWindowsOfTabs[windowId]
	}

	function getTab(windowId, tabId){//returns a Tab object under the specified tabId.
		return browserWindowsOfTabs[windowId][tabId]
	}

	function isEmpty() {
		for (let key in browserWindowsOfTabs){
			if(browserWindowsOfTabs.hasOwnProperty(key)){
				return false;
			}
		}
		return true;
	}

	function addWindow(windowId, windowInfo){//adds new window into the object browserWindowsOfTabs. Occurs when user opens a new window,
		//TODO: Should only be called on linked windows after MVP is set up.
		console.log("windowInfo is ");
		console.log(windowInfo);
		const newWindowInfo = {
			windowInfo: windowInfo
		}
		if(!browserWindowsOfTabs.hasOwnProperty(windowId)){
			browserWindowsOfTabs[windowId] = {};
		}

		Object.assign(browserWindowsOfTabs[windowId], newWindowInfo);//to use Object.assign, both the parameters (target and source respectively) need to be objects and not undefined/null...
	}

	function addTab(windowId, tabInfo){//adds a new tab into the object browserWindowsOfTabs. Should occur when user opens a new tab
		if(!browserWindowsOfTabs[windowId].hasOwnProperty([tabInfo.id])){//if windowId is undefined as a key in browserWindowsOfTabs
			console.log("initializing tabInfo.id in windOfTabs")
			browserWindowsOfTabs[windowId][tabInfo.id] = {};
		}
		console.log("windowId: " + windowId);
		console.log("tabInfo: ");
		console.log(tabInfo);
		Object.assign(browserWindowsOfTabs[windowId][tabInfo.id], tabInfo); //does the same thing as the commented code below

		// if(!browserWindowsOfTabs.hasOwnProperty(windowId)){//naive way of checking for whether the object has the id property and then using obj literal or assignments as necessary...
		// 	browserWindowsOfTabs[windowId]= {
		// 		[tabInfo.id]: {
		// 			tabInfo: tabInfo
		// 		}
		// 	}
		// }
		// else{
		// 	if(!browserWindowsOfTabs[windowId].hasOwnProperty(tabInfo.id)){
		// 		browserWindowsOfTabs[windowId][tabInfo.id] = {
		// 			tabInfo: tabInfo
		// 		}
		// 	}
		// 	else{
		// 		browserWindowsOfTabs[windowId][tabInfo.id][tabInfo] = tabInfo
		// 	}
		// }
	}

	function deleteTab(windowId, tabId){//deletes the tab object being stored,  returns true if deleted and false if couldn't be deleted. Note that if the tab id doesn't exist in object then deleting will return true
		let isDelete = delete browserWindowsOfTabs[windowId][tabId]
		if(isDelete){
			console.log("deleting tab id: " + tabId + " was successful");
		}
		else{
			console.error("something went wrong with deleting TAB id " + tabId);
		}
		return isDelete;
	}

	function deleteWindow(windowId){//deletes the window object being stored,  returns true if deleted and false if couldn't be deleted. Note that if the window id doesn't exist in object then deleting will return true
		let isDelete = delete browserWindowsOfTabs[windowId]
		if(isDelete){
			console.log("deleting window id: " + windowId + " was successful");
		}
		else{
			console.error("something went wrong with deleting WINDOW id " + windowId)
		}
		return isDelete;
	}


	function updateTab(tabInfo){
		if(tabInfo.windowId === undefined){
			console.error("window id doesn't exist, something went wrong");
		}
		sessionInfo.browserWindowsOfTabs[tabInfo.windowId][tabInfo.id] = tabInfo
	}

	return{
		initBrowserSession: init,
		isObjectEmpty: isEmpty,//without the () returns a pointer to the properties/methods. Makes it easy to call functions & access vars from other places
		queryWindowOfTabs: getWindowOfTabs,
		queryTab: getTab,
		storeWindow: addWindow,
		storeTab: addTab,
		removeTab: deleteTab,
		removeWindow: deleteWindow,
		setTab: updateTab,
		browserWindowsOfTabs: browserWindowsOfTabs
	}
}();

// Check whether extension has been installed, updated etc.
chrome.runtime.onInstalled.addListener(function(details){
	console.log("Welcome to BookWorm :3 Thank you for installing!!! ")
	sessionInfo.initBrowserSession();
    function retWinId(curWindow){
    	curWindow.id
		getOpenTabs(curWindow.id);
    }
    chrome.windows.getCurrent({}, retWinId);
});

chrome.runtime.onMessage.addListener(//every time the background script receives a message, this method gets called
	function(msg, sender, sendResponse) {
		switch(msg.rq) {
		    case "Tabs":
		    	//console.log("Background received request for tabs");
		        function retOpenTabs(curWindow){
		        	getOpenTabs(curWindow.id);
	                sendResponse({openTabs: tabs});
		        }
		        chrome.windows.getCurrent({}, retOpenTabs);
		        // window.contentPort = port;
			    // port.postMessage({openTabs:tabs});
			    break;
			case ("linkToSenderWindow"):
				sessionInfo.browserWindowsOfTabs[sender.tab.windowId].linkedBook = msg.linkedBookId;//TODO: create the message for this case and specify the message to have linkdebookid

		    case ("urlsForLaunch"):
			    const launchurls = [];
			    function sendBackLaunch(retTabs){
		            retTabs.forEach(function(tab){
		              if(!launchurls.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab'))
		              {
		                  launchurls.push(tab.url);
		              }
		            })
		            // console.log("Launch urls for windowID "+msg.winId+" are "+launchurls.toString());
		          sendResponse({urlsForLaunch: launchurls});
			    }
			    chrome.tabs.query({windowId: msg.winId},sendBackLaunch)
			    break;

		    case ("urlsForWormhole"):
				wormUrls.splice(0,wormUrls.length);
				getOpenTabs(msg.winId);
				// show the values stored
				for (const k in urlsForWormhole) {
				    // use hasOwnProperty to filter out keys from the Object.prototype
				    if (urlsForWormhole.hasOwnProperty(k)) {
				        wormUrls.push(urlsForWormhole[k].toString())
				    }
				}
				sendResponse({urlsForWormhole: urlsForWormhole[msg.winId]});
				// var wormUrls = [];
				//   function sendBackWormhole(retTabs){
				//     retTabs.forEach(function(tab){
				//       if(!wormUrls.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab'))
				//       {
				//           wormUrls.push(tab.url);
				//       }
				//     }
				//   )
				//   console.log("Wormhole urls for windowID "+msg.winId+" are "+wormUrls.toString());

				//   sendResponse({urlsForWormhole: wormUrls});
				//   }
				//   chrome.tabs.query({windowId: msg.winId},sendBackWormhole)
				break;

			case("getCurrWindowId")://getting the window Id that the content script was called in.
	            // function retWinId(curWindow){
	            // getOpenTabs(windowId: curWindow.id);
	            // sendResponse({openTabs: tabs});
	            // }
	            // chrome.windows.getCurrent({},
	            //           retWinId);
                console.log("Background received request for current window id and is sending back "+sender.tab.windowId);
                getOpenTabs(sender.tab.windowId);
                sendResponse({windowId: sender.tab.windowId});
		        break;

	        case("openWindowOfTabs")://getting the current active window
				let winId = -1;
			    function retWinId(createdWindow){
			        if(createdWindow !== undefined){
			            console.log("retWinId has window "+createdWindow.id);
			            winId = createdWindow.id;
			            sendResponse({windowId: winId});
			        }
			    }
			    chrome.windows.create({url:msg.urlsToLaunch, state:"maximized"}, retWinId);//opens a maximized windows of tabs
			    break;

			case("getOpenWindows"):
				getOpenWindows((W) => {
					sendResponse({ID: "getOpenWindows", allWindows: W});
				});
				break;

		    default:
		    	//console.log("unknown message")
			    return true;
		}
		return true;
	});



function getOpenWindows(callback){
	chrome.windows.getAll(openWindows => {
		// openWindows.map(w => {
		//
			// chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, tabs => {
			// 	console.log(tabs);
			// });
			// chrome.tabs.query({windowId: window.id}, tabs => {//same as above
			// 	console.log(tabs);
			// })
			// console.log(w);
			// console.log(w.tabs);//tabs here is undefined? WHY THO, mystery error is here...
		// })
		callback(openWindows);
	})
}

function getOpenTabs(winId){//get current open tabs in window
	let windOfTabs = sessionInfo.queryWindowOfTabs(winId);

	chrome.tabs.query({windowId: winId},function(tabs){
		tabs.splice(tabs.length);//clears the tabs array
		if(urlsForWormhole[winId]===null||urlsForWormhole[winId]===undefined){
			urlsForWormhole[winId] = [];
		}
		if(Array.isArray(tabs) && tabs.length){ //if tabs is not empty
			tabs.forEach(function(tab){
				//console.log("Tab id is "+tab.id);
				// urls[tab.windowId][tab.id] = tab.url;
				  //console.log("tab url is " + tab.url);
				if(tab.url!==undefined){
					urls[tab.id] = tab.url; //update the url of a tab
				}
				if(!tabs.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab')){
					tabs.push(tab.url);
				}
				if(!urlsForWormhole[winId].includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab')){
				    urlsForWormhole[winId].push(tab.url);
				}
			});
		}
		//console.log("Length of window tabs is "+ tabs.length);
	});
}

chrome.tabs.onCreated.addListener(function(tab) {
	let tabURL;//gives us the correct tab URL whether using url if defined or pendingUrl if not
	if(tab.url!==undefined) {
		tabURL = tab.url;
		urls[tab.id] = tab.url; //update the url of a tab
	}
	else{
		console.log("url for tab is undefined... using tab.pendingUrl");
		tabURL = tab.pendingUrl
	}

	sessionInfo.storeTab(tab.windowId, tab);


	getOpenTabs(tab.windowId);
	sendToContent(tab.windowId);
	// window.contentPort.postMessage({openTabs:tabs});
})

chrome.tabs.onRemoved.addListener(function(tabId, removed) {
	// console.log("tab closed: tab id is "+tabId);
	//    if(removed.isWindowClosing){//if tab was removed due to window closing
	//      //if this url is not already stored
	//      if(urls[tabId]==undefined||urls[tabId]==null){
	//          alert("WARNING: Window URL at tab id "+tabId+" is "+urls[tabId]+". Window URLs stores "+urls.toString()+" and window URLS is "+urls);
	//        }
	//      if(!//urlsToBeStoredInWormhole.includes(urls[tabId])){

	//        //urlsToBeStoredInWormhole.push(urls[tabId]);
	//        // alert("Added URL to be stored in launch: "+urls[tabId]);
	//      }

	//      if(!//urlsToBeStoredInLaunch.includes(urls[tabId])){
	//        //urlsToBeStoredInLaunch.push(urls[tabId]);
	//        // alert("Added URL to be stored in launch: "+urls[tabId]);
	//      }
	//    }
	console.log(removed.windowId+" is the removed window id");
	getOpenTabs(removed.windowId);
	sendToContent(removed.windowId);
	sessionInfo.removeTab(removed.windowId, tabId);
});

chrome.windows.onRemoved.addListener(function(windowId) {
	console.log("window closed")
	getOpenTabs(windowId);
	urlsForWormhole[windowId].splice(0,urlsForWormhole[windowId].length);//clears the tabs array
	//debug wormhole
	// console.log("The "+//urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//urlsToBeStoredInWormhole.toString());
	// alert("The "+//urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//urlsToBeStoredInWormhole.toString())


	//debug launch

	//copies the //urlsToBeStoredInLaunch
	//storedInLaunchUrls = //urlsToBeStoredInLaunch.slice(0,//urlsToBeStoredInLaunch.length);


	// if(storedInLaunchUrls.length>0){
	//   console.log("The"+//urlsToBeStoredInLaunch.length+" urls to be stored in launch are "+storedInLaunchUrls.toString());
	//   alert("The"+//urlsToBeStoredInLaunch.length+"urls to be stored in launch are "+storedInLaunchUrls.toString())
	//  //resets the //urlsToBeStoredInLaunch for next window
	//   //urlsToBeStoredInLaunch.splice(0,//urlsToBeStoredInLaunch.length);
	//  }

	// console.log("window removed and urlsForWormhole are "+ urlsForWormhole);
	sendToContent(windowId);
	sessionInfo.removeWindow(windowId);
})


// chrome.tabs.onDetached.addListener(function(windowId) {
//   console.log("window opened");
//   getOpenTabs();

//  urlsForWormhole.splice(0,urlsForWormhole.length);//clears the tabs array


//   console.log("window created and urlsForWormhole are "+urlsForWormhole);
//  sendToContent();

// })

chrome.windows.onCreated.addListener(function(window) {
	console.log(window)
	// urlsForWormhole.splice(0, urlsForWormhole.length);//clears the tabs array
	// urlsForWormhole[window.id] = [];
	console.log("window "+window.id+" was created and urlsForWormhole are " + urlsForWormhole);
	getOpenTabs(window.id);
	sendToContent(window.id);
	sessionInfo.storeWindow( window.id, window);
})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window
	//TODO: listener is fired twice: when the page has started loading, and when the page has finished. So we need to check the tab status.

	console.log("changes to tabId: " + tabId );
	console.log(changeInfo);
	sessionInfo.setTab(tab);

	if (changeInfo.url) { //if url in tabid has changed, update the url to the changed url
		if(tab.url!==undefined)
		  urls[tabId] = changeInfo.url;
		if(changeInfo.url===undefined)
		  alert("Undefined url in background")
	}

    getOpenTabs(tab.windowId);
    sendToContent(tab.windowId);
})

chrome.tabs.onActivated.addListener(function(activeInfo) {
    //console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
	// chrome.tabs.get(activeInfo.tabId, function(tab){ //get the active tab's url
	//    urls[activeInfo.tabId] = tab.url;
	//  });
    // getOpenTabs(activeInfo.windowId);
    // sendToContent(activeInfo.windowId);
});
// chrome.windows.onFocusChanged.addListener(function(activeInfo) {
//    urlsForWormhole = [];
// })

function sendToContent(windowID){//param: window id of the updated content
	//console.log("Background is sending to content... ");
	// chrome.tabs.query({active: true, currentWindow: true},
	//     function(tabs){
	//       if(tabs[0]!==undefined){
	//         console.log("Background is sending to book window id  "+tabs[0].windowId);
	//       chrome.tabs.sendMessage(tabs[0].id,
	//       {urlsForLaunch:tabs, urlsForWormhole: urlsForWormhole, winId:tabs[0].windowId});
	//     }
	//   });
	console.log('sending to content from background script about window '+windowID)

	let windowOfTabs = sessionInfo.queryWindowOfTabs(windowID);

	chrome.tabs.query({windowId: windowID},function(tabs){
		for(let i = 0; i<tabs.length; i++) {
			if (tabs[i] !== undefined) {

				wormUrls.splice(0, wormUrls.length);
				// show the values stored
				for (const k in urlsForWormhole) {
					// use hasOwnProperty to filter out keys from the Object.prototype
					if (urlsForWormhole.hasOwnProperty(k)) {
						wormUrls.push(urlsForWormhole[k].toString())
					}
				}

				console.log("Background is sending to book window id  " + tabs[i].windowId + " the wormhole urls are " + wormUrls);
				chrome.tabs.sendMessage(tabs[i].id,
					{urlsForLaunch: tabs, urlsForWormhole: urlsForWormhole[windowID], winId: windowID});
			}
		}
	})

	// var winId = -1;
	//  function retWinId(createdWindow){
	//    winId = createdWindow.id;
	//    console.log("sendToContent current window is "+winId);
	//    chrome.tabs.query({},function(tabs){
	//      for(var i = 0; i<tabs.length; i++){
	//        if(tabs[i]!==undefined){
	//          console.log("Background is sending to book window id  "+tabs[i].windowId);
	//          chrome.tabs.sendMessage(tabs[i].id,
	//          {urlsForLaunch:tabs, urlsForWormhole: urlsForWormhole, winId:createdWindow.id});
	//        }
	//      }
	//    })
	//  }
	//  chrome.windows.getCurrent({},
	//            retWinId);
	// chrome.tabs.query({active: true, currentWindow: true},
	//     tabs =>{
	//       if(tabs[0]!=undefined)
	//       chrome.tabs.sendMessage(tabs[0].id,
	//       {urlsForWormhole: urlsForWormhole});
	//   });
}

function openHomePage(){
   chrome.tabs.create({url: 'index.html'});
}




// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'index.html'})
// })

    // chrome.runtime.onConnect.addListener(port => {
    //     //console.log('connected ', port);

    //     if (port.name === 'hi') {
    //         port.onMessage.addListener(this.processMessage);
    //     }
    // });

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  //console.log("Background received message from "+sender+ " with message "+msg);
  //     switch (msg.type) {
  //       case 'popupInit':
  //           sendResponse("Sending message from background: "+tabStorage[msg.tabId]);
  //           break;
  //       default:
  //           sendResponse('unknown request');
  //           break;
  //   }

//   if(msg.greeting=="hello"){

//     sendResponse({farewell:tabs})
//   }
// })

// //send to localhost
// chrome.tabs.query({url:"*://localhost:*/*"}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     //console.log("From background to content tab query "+response);
//   });
// });

// chrome.windows.getAll({populate:true}, getAllOpenWindows);

// function getAllOpenWindows(winData) {
//  //console.log("Getting all opened tabs: ")
//   tabs = [];
//   for (var i in winData) {
//     if (winData[i].focused === true) {
//         var winTabs = winData[i].tabs;
//         var totTabs = winTabs.length;
//         for (var j=0; j<totTabs;j++) {
//           tabs.push(winTabs[j].url);
//         }
//     }
//   }
//   //console.log(tabs);
