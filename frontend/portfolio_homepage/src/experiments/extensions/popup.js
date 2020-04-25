document.addEventListener('DOMContentLoaded', function(){


  document.getElementById('changeColor').addEventListener('click', onclick, false)
  
  function onclick () {

    chrome.tabs.query({currentWindow: true, active: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, 'hi sending to content', setCount)
    })
  }

}, false)
