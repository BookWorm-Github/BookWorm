// alert('Grrr.')


// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
// {
//   alert("content received msg: "+request);


// })

const re = new RegExp('bear', 'gi')
const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({greeting: "hello"}, 
  response =>{
    console.log("Content got response from background now: "+response.farewell)
  });