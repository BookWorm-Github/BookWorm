//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//need to figure out how to get the url of a closed or opened tab in chrome
window.tabs = [];

var urls = []; //urls[tabid] returns the url for the current tab
var urlsToBeStoredInWormhole=[]; //the history of all closed urls
var urlsToBeStoredInLaunch=[]; //the urls of the most recently closed window

// Check whether extension has been reloaded
chrome.runtime.onInstalled.addListener(function(details){
    getOpenTabs();
});

chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
      if (msg.rq == "Tabs"){
        //console.log("Background received request for tabs");
        getOpenTabs();
        sendResponse({openTabs:window.tabs});
      // window.contentPort = port;
      // port.postMessage({openTabs:window.tabs});
        }
        else if (msg.rq=="urlsForLaunch"){
          sendResponse({urlsForLaunch: urlsToBeStoredInLaunch})
        }
        else if (msg.rg=="urlsForWormhole"){
          sendResponse({urlsForWormhole: urlsToBeStoredInWormhole})
        }
        else {//console.log("unknown message")
      }
  });


function getOpenTabs(){//get current open tabs urls
   chrome.tabs.query({currentWindow:true},function(tabs){
    window.tabs.splice(0,window.tabs.length);//clears the window.tabs array
    if(Array.isArray(tabs) && tabs.length){ //if tabs is not empty
      tabs.forEach(function(tab){
        //console.log("Tab id is "+tab.id);
        // windowUrls[tab.windowId][tab.id] = tab.url;
        urls[tab.id] = tab.url; //update the url of a tab
        window.tabs.push(tab.url);
      });
    }
      // //console.log("Length of window tabs is "+window.tabs.length);
 });
}

chrome.tabs.onCreated.addListener(function(tab) {
 //console.log("tab created");
 getOpenTabs();
 sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
 console.log("tab closed: tab id is "+tabid);
    if(removed.isWindowClosing){//if tab was removed due to window closing
      //if this url is not already stored
      if(!urlsToBeStoredInWormhole.includes(urls[tabid])){
        urlsToBeStoredInWormhole.push(urls[tabid]);
        // alert("Added URL to be stored in launch: "+urls[tabid]);
      }

      if(!urlsToBeStoredInLaunch.includes(urls[tabid])){
        urlsToBeStoredInLaunch.push(urls[tabid]);
        // alert("Added URL to be stored in launch: "+urls[tabid]);
      }


    }
   getOpenTabs();
   sendToContent();
})

chrome.windows.onRemoved.addListener(function(windowid) {
 console.log("window closed")
 getOpenTabs();

 //debug wormhole
 console.log("URLs to be stored in wormhole are "+urlsToBeStoredInWormhole.toString());
 alert("URLs to be stored in wormhole are "+urlsToBeStoredInWormhole.toString())


 //debug launch

 //copies the urlsToBeStoredInLaunch
 storedInLaunchURls = urlsToBeStoredInLaunch.slice(0,urlsToBeStoredInLaunch.length);

 console.log("URLs to be stored in launch are "+storedInLaunchURls.toString());
 alert("URLs to be stored in launch are "+storedInLaunchURls.toString())
//resets the urlsToBeStoredInLaunch for next window
 urlsToBeStoredInLaunch.splice(0,urlsToBeStoredInLaunch.length);


 sendToContent();

})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window

      if (changeInfo.url) { //if url in tabid has changed, update the url to the changed url
        urls[tabId] = changeInfo.url;
        if(changeInfo.url==undefined)
          alert("Undefined url in background")
      }

    getOpenTabs();
    sendToContent();
})

chrome.tabs.onActivated.addListener(function(TabInfo) {
    //console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
     // chrome.tabs.get(activeInfo.tabId, function(tab){ //get the active tab's url
     //    urls[activeInfo.tabId] = tab.url;
     //  });
    getOpenTabs();
    sendToContent();
});

function sendToContent(){
  //console.log("Background is sending to content... ");
  chrome.tabs.query({active: true, currentWindow: true},
      tabs =>{
        if(tabs[0]!=undefined)
        chrome.tabs.sendMessage(tabs[0].id, 
        {openTabs:window.tabs});
    });
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
// }