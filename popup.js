document.getElementById('clickme').addEventListener('click', function(tabs) {
  chrome.tabs.query({active: true, currentWindow: true}, function (current) {
    chrome.tabs.sendMessage(current[0].id, "next-phase");
  });
});