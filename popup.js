document.getElementById('next-phase').addEventListener('click', function(tabs) {
  chrome.tabs.query({active: true, currentWindow: true}, function (current) {
    chrome.tabs.sendMessage(current[0].id, "next-phase");
    window.close();
  });
});

document.getElementById('reset').addEventListener('click',function(tabs){
  chrome.tabs.query({active:true, currentWindow:true}, function(current){
    chrome.tabs.sendMessage(current[0].id, "reset");
    window.close();
  });
});

