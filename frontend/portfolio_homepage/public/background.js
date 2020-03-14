//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//need to figure out how to get the url of a closed or opened tab in chrome
window.tabs = [];

var urls = []; //urls[tabid] returns the url for the current tab
var urlsToBeStoredInLaunch=[];


chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
      if (msg.rq == "Tabs"){
        //console.log("Background received request for tabs");
        getOpenTabs();
        sendResponse({openTabs:window.tabs});
      // window.contentPort = port;
      // port.postMessage({openTabs:window.tabs});
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
      if(!urlsToBeStoredInLaunch.includes(urls[tabid])){
        urlsToBeStoredInLaunch.push(urls[tabid]);
      }
    }
   getOpenTabs();
   sendToContent();
})

chrome.windows.onRemoved.addListener(function(windowid) {
 console.log("window closed")
 getOpenTabs();
 console.log("URLs to be stored in launch are "+urlsToBeStoredInLaunch.toString());
 alert("URLs to be stored in launch are "+urlsToBeStoredInLaunch.toString())
 sendToContent();
})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window

      if (changeInfo.url) {
        urls[tabId] = changeInfo.url;
      }

    getOpenTabs();
    sendToContent();
})

chrome.tabs.onActivated.addListener(function(TabInfo) {
    //console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
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