// //connect this to background dynamically
// chrome.runtime.onConnect.addListener((port) => {
//   port.onMessage.addListener((msg) => {
//   	console.log("Connected and listening to port message")
//     if (msg.function == 'html') {
//       port.postMessage({ html: document.documentElement.outerHTML, description: document.querySelector("meta[name=\'description\']").getAttribute('content'), title: document.title });
//     }
//   });
// });


chrome.runtime.onMessage.addListener(function(request){
  alert("Request received in content: "+request);
})
// chrome.runtime.sendMessage('Hello World from content to background');



// chrome.runtime.onMessage.addListener(receiver);
// function receiver(request, sender, sendResponse) {
//   console.log("Received msg from "+sender);
//   console.log("Request: "+request);
  
// }
// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     // if (request.greeting == "hello")
//     //   sendResponse({farewell: "goodbye"});
//   });


//   var port = chrome.runtime.connect();
// For simple requests:
// chrome.runtime.onMessageExternal.addListener(
//   function(request, sender, sendResponse) {
//     if (sender.id == blocklistedExtension)
//       return;  // don't allow this extension access
//     else if (request.getTargetData)
//       sendResponse({targetData: targetData});
//     else if (request.activateLasers) {
//       var success = activateLasers();
//       sendResponse({activateLasers: success});
//     }
//   });

// window.addEventListener("message", function(event) {
//   // We only accept messages from ourselves
//   if (event.source != window)
//     return;

//   if (event.data.type && (event.data.type == "FROM_PAGE")) {
//     console.log("Content script received: " + event.data.text);
//     port.postMessage(event.data.text);
//   }
// }, false);

// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log(sender.tab ?
//                 "from a content script:" + sender.tab.url :
//                 "from the extension");
//     if (request.greeting == "hello")
//       sendResponse({farewell: "goodbye"});
//   });



  var greeting = "hola, ";
  var button = document.getElementById("experimentButton");
  button.person_name = "Roberto";
  button.addEventListener("click", function() {
  	console.log("Experiment button was clicked");
    alert(greeting + button.person_name + ".");
  }, false);



