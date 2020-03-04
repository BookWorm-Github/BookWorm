
chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled public bckgrns...');
  chrome.storage.sync.set({color: '#e77471'}, function() {
      console.log("The color is light coral.");
    });
  // create alarm after extension is installed / upgraded
  // scheduleRequest();
  // scheduleWatchdog();
  // startRequest();
});
chrome.runtime.onConnect.addListener(port => {
    console.log('connected ', port);
    console.log('port name is '+port.name);
    if (port.name === 'hi') {
        port.onMessage.addListener(this.processMessage);
    }
});


// (function() {
//     const tabStorage = {};
//     const networkFilters = {
//         urls: [
//             "*://developer.mozilla.org/*"
//         ]
//     };

//     chrome.webRequest.onBeforeRequest.addListener((details) => {
//         const { tabId, requestId } = details;
//         if (!tabStorage.hasOwnProperty(tabId)) {
//             return;
//         }

//         tabStorage[tabId].requests[requestId] = {
//             requestId: requestId,
//             url: details.url,
//             startTime: details.timeStamp,
//             status: 'pending'
//         };
//         console.log(tabStorage[tabId].requests[requestId]);
//     }, networkFilters);

//     chrome.webRequest.onCompleted.addListener((details) => {
//         const { tabId, requestId } = details;
//         if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
//             return;
//         }

//         const request = tabStorage[tabId].requests[requestId];

//         Object.assign(request, {
//             endTime: details.timeStamp,
//             requestDuration: details.timeStamp - request.startTime,
//             status: 'complete'
//         });
//         console.log(tabStorage[tabId].requests[details.requestId]);
//     }, networkFilters);

//     chrome.webRequest.onErrorOccurred.addListener((details)=> {
//         const { tabId, requestId } = details;
//         if (!tabStorage.hasOwnProperty(tabId) || !tabStorage[tabId].requests.hasOwnProperty(requestId)) {
//             return;
//         }

//         const request = tabStorage[tabId].requests[requestId];
//         Object.assign(request, {
//             endTime: details.timeStamp,           
//             status: 'error',
//         });
//         console.log(tabStorage[tabId].requests[requestId]);
//     }, networkFilters);

//     chrome.tabs.onActivated.addListener((tab) => {
//         const tabId = tab ? tab.tabId : chrome.tabs.TAB_ID_NONE;
//         if (!tabStorage.hasOwnProperty(tabId)) {
//             tabStorage[tabId] = {
//                 id: tabId,
//                 requests: {},
//                 registerTime: new Date().getTime()
//             };
//         }
//     });
//     chrome.tabs.onRemoved.addListener((tab) => {
//         const tabId = tab.tabId;
//         if (!tabStorage.hasOwnProperty(tabId)) {
//             return;
//         }
//         tabStorage[tabId] = null;
//     });
// }());




chrome.windows.getAll({populate:true}, getAllOpenWindows);

function getAllOpenWindows(winData) {
	console.log("Getting all opened tabs: ")
  var tabs = [];
  for (var i in winData) {
    if (winData[i].focused === true) {
        var winTabs = winData[i].tabs;
        var totTabs = winTabs.length;
        for (var j=0; j<totTabs;j++) {
          tabs.push(winTabs[j].url);
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

// // fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
// chrome.runtime.onStartup.addListener(() => {
//   console.log('onStartup....');
//   helloWorld();
//   startRequest();
// });

// // alarm listener
// chrome.alarms.onAlarm.addListener(alarm => {
//   // if watchdog is triggered, check whether refresh alarm is there
//   if (alarm && alarm.name === 'watchdog') {
//     chrome.alarms.get('refresh', alarm => {
//       if (alarm) {
//         console.log('Refresh alarm exists. Yay.');
//       } else {
//         // if it is not there, start a new request and reschedule refresh alarm
//         console.log("Refresh alarm doesn't exist, starting a new one");
//         startRequest();
//         scheduleRequest();
//       }
//     });
//   } else {
//     // if refresh alarm triggered, start a new request
//     startRequest();
//   }
// });

// // schedule a new fetch every 30 minutes
// function scheduleRequest() {
//   console.log('schedule refresh alarm to 30 minutes...');
//   chrome.alarms.create('refresh', { periodInMinutes: 30 });
// }

// // schedule a watchdog check every 5 minutes
// function scheduleWatchdog() {
//   console.log('schedule watchdog alarm to 5 minutes...');
//   chrome.alarms.create('watchdog', { periodInMinutes: 5 });
// }

// // fetch data and save to local storage
// async function startRequest() {
//   console.log('start HTTP Request...');
  
// }
