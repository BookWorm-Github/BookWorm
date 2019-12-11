document.getElementById('active').addEventListener('click', function(tabs) {
  chrome.tabs.query({active: true, currentWindow: true}, function (current) {
    chrome.tabs.sendMessage(current[0].id, "active");
    window.close();
  });
});

document.getElementById('original').addEventListener('click',function(tabs){
  chrome.tabs.query({active:true, currentWindow:true}, function(current){
    chrome.tabs.sendMessage(current[0].id, "original");
    window.close();
  });
});

