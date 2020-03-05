// window.bears = {}
// chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//   window.bears[request.url] = request.count
// })

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'index.html'})
// })

    // chrome.runtime.onConnect.addListener(port => {
    //     console.log('connected ', port);

    //     if (port.name === 'hi') {
    //         port.onMessage.addListener(this.processMessage);
    //     }
    // });

window.tabs = {}
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
  // console.log("Background received message from "+sender+ " with message "+msg);
  //     switch (msg.type) {
  //       case 'popupInit':
  //           sendResponse("Sending message from background: "+tabStorage[msg.tabId]);
  //           break;
  //       default:
  //           sendResponse('unknown request');
  //           break;
  //   }

  if(msg.greeting=="hello"){

    sendResponse({farewell:window.tabs})
  }
})

chrome.windows.getAll({populate:true}, getAllOpenWindows);

function getAllOpenWindows(winData) {
	console.log("Getting all opened tabs: ")
  window.tabs = [];
  for (var i in winData) {
    if (winData[i].focused === true) {
        var winTabs = winData[i].tabs;
        var totTabs = winTabs.length;
        for (var j=0; j<totTabs;j++) {
          window.tabs.push(winTabs[j].url);
        }
    }
  }
  console.log(tabs);
}


function helloWorld() {

  console.log("This is public background");
}

function testFunction(){
  console.log("Chrome is "+chrome)
  console.log("This is a test function");
}

