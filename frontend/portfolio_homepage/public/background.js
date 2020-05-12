//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)

tabs = [];//list of all open urls in the window
urls = []; //urls[tabid] returns the url for the tab with ID: tabid
//urlsToBeStoredInLaunch=[]; //the urls of the most recently closed window
// urlTitles = []; //urlTitles[url] stores the title of the webpage with the given url
urlsForWormhole={}; //wormhole hashtable where urlsForWormhole[windowID] stores all urls, including the closed tabs, for tht window id
wormurls = [];//wormhole urls in a list

// Check whether extension has been reloaded
chrome.runtime.onInstalled.addListener(function(details){
	console.log("Welcome to BookWorm :3 Thank you for installing!!! ")
    function retWinId(curWindow){
      getOpenTabs(curWindow.id);

    }
    chrome.windows.getCurrent({}, 
              retWinId); 
});

chrome.runtime.onMessage.addListener(
	function(msg, sender, sendResponse) {
		switch(msg.rq) {
		    case "Tabs":
		    	//console.log("Background received request for tabs");
		        function retWinId(curWindow){
		        	getOpenTabs(curWindow.id);
	                sendResponse({openTabs: tabs});
		        }
		        chrome.windows.getCurrent({}, retWinId);
		        // window.contentPort = port;
			    // port.postMessage({openTabs:tabs});
			    break;

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
				wormurls.splice(0,wormurls.length);
				getOpenTabs(msg.winId);
				// show the values stored
				for (var k in urlsForWormhole) {
				    // use hasOwnProperty to filter out keys from the Object.prototype
				    if (urlsForWormhole.hasOwnProperty(k)) {
				        wormurls.push(urlsForWormhole[k].toString())
				    }
				}
				sendResponse({urlsForWormhole: urlsForWormhole[msg.winId]});
				// var wormurls = [];
				//   function sendBackWormhole(retTabs){
				//     retTabs.forEach(function(tab){
				//       if(!wormurls.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab'))
				//       {
				//           wormurls.push(tab.url);
				//       }
				//     }
				//   )
				//   console.log("Wormhole urls for windowID "+msg.winId+" are "+wormurls.toString());

				//   sendResponse({urlsForWormhole: wormurls});
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
			    chrome.windows.create({url:msg.urlsToLaunch, state:"maximized"}, retWinId);
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
		openWindows.map(w => {

			chrome.tabs.query({windowId: chrome.windows.WINDOW_ID_CURRENT}, tabs => {
				console.log(tabs);
			});
			// chrome.tabs.query({windowId: window.id}, tabs => {//same as above
			// 	console.log(tabs);
			// })
			console.log(w);
			// console.log(w.tabs);//tabs here is undefined? WHY THO
		})
		callback(openWindows);
	})
}

function getOpenTabs(winID){//get current open tabs in window
	chrome.tabs.query({windowId: winID},function(tabs){
		tabs.splice(tabs.length);//clears the tabs array
		if(urlsForWormhole[winID]===null||urlsForWormhole[winID]===undefined){
			urlsForWormhole[winID] = [];
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
				if(!urlsForWormhole[winID].includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab')){
				    urlsForWormhole[winID].push(tab.url);
				}
			});
		}
		//console.log("Length of window tabs is "+ tabs.length);
	});
}

chrome.tabs.onCreated.addListener(function(tab) {
	// console.log("tab created");
	if(tab.url!==undefined) {
		urls[tab.id] = tab.url; //update the url of a tab
	}
	getOpenTabs(tab.windowId);
	sendToContent(tab.windowId);
	// window.contentPort.postMessage({openTabs:tabs});
})

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
	// console.log("tab closed: tab id is "+tabid);
	//    if(removed.isWindowClosing){//if tab was removed due to window closing
	//      //if this url is not already stored
	//      if(urls[tabid]==undefined||urls[tabid]==null){
	//          alert("WARNING: Window URL at tab id "+tabid+" is "+urls[tabid]+". Window URLs stores "+urls.toString()+" and window URLS is "+urls);
	//        }
	//      if(!//urlsToBeStoredInWormhole.includes(urls[tabid])){

	//        //urlsToBeStoredInWormhole.push(urls[tabid]);
	//        // alert("Added URL to be stored in launch: "+urls[tabid]);
	//      }

	//      if(!//urlsToBeStoredInLaunch.includes(urls[tabid])){
	//        //urlsToBeStoredInLaunch.push(urls[tabid]);
	//        // alert("Added URL to be stored in launch: "+urls[tabid]);
	//      }
	//    }
	console.log(removed.windowId+" is the removed window id");
	getOpenTabs(removed.windowId);
	sendToContent(removed.windowId);
});

chrome.windows.onRemoved.addListener(function(windowId) {
	console.log("window closed")
	getOpenTabs(windowId);
	urlsForWormhole[windowId].splice(0,urlsForWormhole[windowId].length);//clears the tabs array
	//debug wormhole
	// console.log("The "+//urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//urlsToBeStoredInWormhole.toString());
	// alert("The "+//urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//urlsToBeStoredInWormhole.toString())


	// //debug launch

	// //copies the //urlsToBeStoredInLaunch
	// //storedInLaunchUrls = //urlsToBeStoredInLaunch.slice(0,//urlsToBeStoredInLaunch.length);


	// if(storedInLaunchUrls.length>0){
	//   console.log("The"+//urlsToBeStoredInLaunch.length+" urls to be stored in launch are "+storedInLaunchUrls.toString());
	//   alert("The"+//urlsToBeStoredInLaunch.length+"urls to be stored in launch are "+storedInLaunchUrls.toString())
	//  //resets the //urlsToBeStoredInLaunch for next window
	//   //urlsToBeStoredInLaunch.splice(0,//urlsToBeStoredInLaunch.length);
	//  }

	// console.log("window removed and urlsForWormhole are "+ urlsForWormhole);
	sendToContent(windowId);

})


// chrome.tabs.onDetached.addListener(function(windowId) {
//   console.log("window opened");
//   getOpenTabs();

//  urlsForWormhole.splice(0,urlsForWormhole.length);//clears the tabs array


//   console.log("window created and urlsForWormhole are "+urlsForWormhole);
//  sendToContent();

// })

chrome.windows.onCreated.addListener(function(window) {
	// urlsForWormhole.splice(0, urlsForWormhole.length);//clears the tabs array
	// urlsForWormhole[window.id] = [];
	console.log("window "+window.id+" was created and urlsForWormhole are " + urlsForWormhole);
	getOpenTabs(window.id);
	sendToContent(window.id);

})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window

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
	chrome.tabs.query({windowId: windowID},function(tabs){
		for(let i = 0; i<tabs.length; i++) {
			if (tabs[i] !== undefined) {

				wormurls.splice(0, wormurls.length);
				// show the values stored
				for (const k in urlsForWormhole) {
					// use hasOwnProperty to filter out keys from the Object.prototype
					if (urlsForWormhole.hasOwnProperty(k)) {
						wormurls.push(urlsForWormhole[k].toString())
					}
				}

				console.log("Background is sending to book window id  " + tabs[i].windowId + " the wormhole urls are " + wormurls);
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
//   // //console.log("Background received message from "+sender+ " with message "+msg);
//   //     switch (msg.type) {
//   //       case 'popupInit':
//   //           sendResponse("Sending message from background: "+tabStorage[msg.tabId]);
//   //           break;
//   //       default:
//   //           sendResponse('unknown request');
//   //           break;
//   //   }

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
