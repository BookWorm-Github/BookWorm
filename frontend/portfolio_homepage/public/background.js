
//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//need to figure out how to get the url of a closed or opened tab in chrome
window.tabs = [];//list of all open urls in the window

window.urls = []; //window.urls[tabid] returns the url for the tab with ID: tabid
// //window.urlsToBeStoredInWormhole=[]; //the history of all closed window.urls
// //window.urlsToBeStoredInLaunch=[]; //the window.urls of the most recently closed window
// window.urlTitles = []; //window.urlTitles[url] stores the title of the webpage with the given url
window.urlsForWormhole=[];

// Check whether extension has been reloaded
chrome.runtime.onInstalled.addListener(function(details){
	console.log("Welcome to BookWorm :3 Thank you for installing!!! ")
  window.urlsForWormhole=[];
    getOpenTabs();
});

chrome.runtime.onMessage.addListener(
	function(msg, sender, sendResponse) {
		switch(msg.rq) {
		    case "Tabs":
			    //console.log("Background received request for tabs");
			    getOpenTabs();
			    sendResponse({openTabs: window.tabs});
			    // window.contentPort = port;
			    // port.postMessage({openTabs:window.tabs});
			    break;

		    case ("urlsForLaunch"):
        var launchurls = [];
          function sendBackLaunch(retTabs){
            retTabs.forEach(function(tab){ 
              if(!launchurls.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab'))
              {
                  launchurls.push(tab.url);
              }
            }
          )
            console.log("Launch urls for windowID "+msg.winId+" are "+launchurls.toString());
          sendResponse({urlsForLaunch: launchurls});
          }
          chrome.tabs.query({windowId: msg.winId},sendBackLaunch)
			    break;

		    case ("urlsForWormhole"):

        var wormurls = [];
          function sendBackWormhole(retTabs){
            retTabs.forEach(function(tab){ 
              if(!wormurls.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab'))
              {
                  wormurls.push(tab.url);
              }
            }
          )
          console.log("Wormhole urls for windowID "+msg.winId+" are "+wormurls.toString());
          
          sendResponse({urlsForWormhole: wormurls});
          }
          chrome.tabs.query({windowId: msg.winId},sendBackWormhole)
			    break;
	        case("getCurrWindowId"):
				console.log("Background received request for current window id and is sending back "+sender.tab.windowId);
				getOpenTabs();
				sendResponse({windowId: sender.tab.windowId});
	        break;
          case("openWindowOfTabs"):
          var winId = -1;
            function retWinId(createdWindow){
              console.log("retWinId has window "+createdWindow.id);
              winId = createdWindow.id;

              sendResponse({windowId: winId});
            }
            chrome.windows.create({url:msg.urlsToLaunch}, 
              retWinId); 
          break;
		    default://console.log("unknown message")
			    return true;
		}
    return true;
	});


function getOpenTabs(){//get current open tabs in window
   chrome.tabs.query({currentWindow:true},function(tabs){
    window.tabs.splice(0,window.tabs.length);//clears the window.tabs array
    if(Array.isArray(tabs) && tabs.length){ //if tabs is not empty
      tabs.forEach(function(tab){
        //console.log("Tab id is "+tab.id);
        // window.urls[tab.windowId][tab.id] = tab.url;
	      //console.log("tab url is " + tab.url);
        if(tab.url!==undefined){
          window.urls[tab.id] = tab.url; //update the url of a tab
        }
        if(!window.tabs.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab')){
          window.tabs.push(tab.url);
        }
        if(!window.urlsForWormhole.includes(tab.url)&&tab.url!==undefined&&!tab.url.includes('chrome://newtab')){

          window.urlsForWormhole.push(tab.url);
        }
      });
    }
      // //console.log("Length of window tabs is "+window.tabs.length);
 }  );
}

chrome.tabs.onCreated.addListener(function(tab) {
 // console.log("tab created");
	if(tab.url!==undefined)
		window.urls[tab.id] = tab.url; //update the url of a tab
	getOpenTabs();
	sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
 // console.log("tab closed: tab id is "+tabid);
 //    if(removed.isWindowClosing){//if tab was removed due to window closing
 //      //if this url is not already stored
 //      if(window.urls[tabid]==undefined||window.urls[tabid]==null){
 //          alert("WARNING: Window URL at tab id "+tabid+" is "+window.urls[tabid]+". Window URLs stores "+window.urls.toString()+" and window URLS is "+window.urls);
 //        }
 //      if(!//window.urlsToBeStoredInWormhole.includes(window.urls[tabid])){
        
 //        //window.urlsToBeStoredInWormhole.push(window.urls[tabid]);
 //        // alert("Added URL to be stored in launch: "+window.urls[tabid]);
 //      }

 //      if(!//window.urlsToBeStoredInLaunch.includes(window.urls[tabid])){
 //        //window.urlsToBeStoredInLaunch.push(window.urls[tabid]);
 //        // alert("Added URL to be stored in launch: "+window.urls[tabid]);
 //      }
 //    }

   getOpenTabs();
   sendToContent();
});



chrome.windows.onRemoved.addListener(function(windowId) {
	console.log("window closed")
	getOpenTabs();
	window.urlsForWormhole.splice(0,window.urlsForWormhole.length);//clears the window.tabs array
 //debug wormhole
 // console.log("The "+//window.urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//window.urlsToBeStoredInWormhole.toString());
 // alert("The "+//window.urlsToBeStoredInWormhole.length+"urls to be stored in wormhole are "+//window.urlsToBeStoredInWormhole.toString())


 // //debug launch

 // //copies the //window.urlsToBeStoredInLaunch
 // //storedInLaunchUrls = //window.urlsToBeStoredInLaunch.slice(0,//window.urlsToBeStoredInLaunch.length);


 // if(storedInLaunchUrls.length>0){
 //   console.log("The"+//window.urlsToBeStoredInLaunch.length+" urls to be stored in launch are "+storedInLaunchUrls.toString());
 //   alert("The"+//window.urlsToBeStoredInLaunch.length+"urls to be stored in launch are "+storedInLaunchUrls.toString())
 //  //resets the //window.urlsToBeStoredInLaunch for next window
 //   //window.urlsToBeStoredInLaunch.splice(0,//window.urlsToBeStoredInLaunch.length);
 //  }

  console.log("window removed and urlsForWormhole are "+window.urlsForWormhole);
  sendToContent();

})


// chrome.tabs.onDetached.addListener(function(windowId) {
//   console.log("window opened");
//   getOpenTabs();

//  window.urlsForWormhole.splice(0,window.urlsForWormhole.length);//clears the window.tabs array


//   console.log("window created and urlsForWormhole are "+window.urlsForWormhole);
//  sendToContent();

// })

chrome.windows.onCreated.addListener(function(window) {
  // window.urlsForWormhole.splice(0,window.urlsForWormhole.length);//clears the window.tabs array
  window.urlsForWormhole = [];
  console.log("window "+window.id+" was created and urlsForWormhole are " + window.urlsForWormhole);
  getOpenTabs();
  sendToContent();

})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window

	if (changeInfo.url) { //if url in tabid has changed, update the url to the changed url
		if(tab.url!==undefined)
		  window.urls[tabId] = changeInfo.url;
		if(changeInfo.url===undefined)
		  alert("Undefined url in background")
	}

    getOpenTabs();
    sendToContent();
})

chrome.tabs.onActivated.addListener(function(TabInfo) {
    //console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
	// chrome.tabs.get(activeInfo.tabId, function(tab){ //get the active tab's url
	//    window.urls[activeInfo.tabId] = tab.url;
	//  });
    getOpenTabs();
    sendToContent();
});

function sendToContent(){
  //console.log("Background is sending to content... ");
  // chrome.tabs.query({active: true, currentWindow: true},
  //     function(tabs){
  //       if(tabs[0]!==undefined){
  //         console.log("Background is sending to book window id  "+tabs[0].windowId);
  //       chrome.tabs.sendMessage(tabs[0].id, 
  //       {urlsForLaunch:window.tabs, urlsForWormhole: window.urlsForWormhole, winId:tabs[0].windowId});
  //     }
  //   });

   var winId = -1;
    function retWinId(createdWindow){
      winId = createdWindow.id;
      console.log("sendToContent current window is "+winId);
      chrome.tabs.query({},function(tabs){
        for(var i = 0; i<tabs.length; i++){
          if(tabs[i]!==undefined&&tabs[i].url.includes('chrome://newtab')){
            console.log("Background is sending to book window id  "+tabs[i].windowId);
            chrome.tabs.sendMessage(tabs[i].id, 
            {urlsForLaunch:window.tabs, urlsForWormhole: window.urlsForWormhole, winId:createdWindow.id});
          }
        }
      })
    }
    chrome.windows.getCurrent({}, 
              retWinId); 
  // chrome.tabs.query({active: true, currentWindow: true},
  //     tabs =>{
  //       if(tabs[0]!=undefined)
  //       chrome.tabs.sendMessage(tabs[0].id,
  //       {urlsForWormhole:window.urlsForWormhole});
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

//     sendResponse({farewell:window.tabs})
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
//   window.tabs = [];
//   for (var i in winData) {
//     if (winData[i].focused === true) {
//         var winTabs = winData[i].tabs;
//         var totTabs = winTabs.length;
//         for (var j=0; j<totTabs;j++) {
//           window.tabs.push(winTabs[j].url);
//         }
//     }
//   }
//   //console.log(tabs);
