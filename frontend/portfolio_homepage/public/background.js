chrome.runtime.onInstalled.addListener(() => {
  console.log('onInstalled...');
  // create alarm after extension is installed / upgraded
  scheduleRequest();
  scheduleWatchdog();
  startRequest();
});

// fetch and save data when chrome restarted, alarm will continue running when chrome is restarted
chrome.runtime.onStartup.addListener(() => {
  console.log('onStartup....');
  startRequest();
});

// alarm listener
chrome.alarms.onAlarm.addListener(alarm => {
  // if watchdog is triggered, check whether refresh alarm is there
  if (alarm && alarm.name === 'watchdog') {
    chrome.alarms.get('refresh', alarm => {
      if (alarm) {
        console.log('Refresh alarm exists. Yay.');
      } else {
        // if it is not there, start a new request and reschedule refresh alarm
        console.log("Refresh alarm doesn't exist, starting a new one");
        startRequest();
        scheduleRequest();
      }
    });
  } else {
    // if refresh alarm triggered, start a new request
    startRequest();
  }
});

// schedule a new fetch every 30 minutes
function scheduleRequest() {
  console.log('schedule refresh alarm to 30 minutes...');
  chrome.alarms.create('refresh', { periodInMinutes: 30 });
}

// schedule a watchdog check every 5 minutes
function scheduleWatchdog() {
  console.log('schedule watchdog alarm to 5 minutes...');
  chrome.alarms.create('watchdog', { periodInMinutes: 5 });
}

// fetch data and save to local storage
async function startRequest() {
  console.log('start HTTP Request...');
  const data = await fetchRepositories();
  saveToLocalStorage(data);
}

function helloWorld() {
  console.log("Hello, world!");
}