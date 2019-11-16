console.log("background script ran");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {// 'tab' is an object with information about the current open tab
    let msg = {
        txt: "hello"
    };
    chrome.tabs.sendMessage(tab.id, msg);
}

