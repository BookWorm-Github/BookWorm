console.log("background script ran");

// chrome.browserAction.onClicked.addListener(buttonClicked);

var config = {
    apiKey: 'AIzaSyBkGGKw3_CKSVlsK8XUWRqmjTqcggTmtU0',
    databaseURL: '<YOUR_DATABASE_URL>',
    storageBucket: '<YOUR_STORAGE_BUCKET_NAME>'
  };

function initApp() {
    // Listen for auth state changes.
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('User state change detected from the Background script of the Chrome Extension:', user);
    });
  }
  
  window.onload = function() {
    initApp();
  };
  

function buttonClicked(tabs) {// 'tab' is an object with information about the current open tab. Increment the phase or resets it back to 0.
    console.log("hello");
    chrome.tabs.sendMessage(tabs.id, 'hello');//send message from background script to content script
}

chrome.extension.onMessage.addListener(function (message, sender, sendResponse) { 
    if (message.title === 'showResponse'){
     $.ajax({ 
        type: POST, 
        url: "https://api.deepai.org/summerizer"
    }).done(function (success) {
    sendResponse(success);
    }).fail(function () {
    sendMessage(error);
    });
    }
});
