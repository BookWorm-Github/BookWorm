
//With some lag in the initial call of getURLs (needs to be clicked twice), it works.
//This line opens up a long-lived connection to your background page.
var port = chrome.runtime.connect({name:"mycontentscript"});
var openTabs = null;

port.onMessage.addListener(function(message,sender){
      if(message.openTabs != null){
        console.log("Content got message from background: "+message.openTabs);
        openTabs = message.openTabs;

        createListOfURLs(openTabs);
        console.log("openTabs in content is now "+openTabs)
      }
      else{
        console.log("content got that Message was null")
      }
});


function createListOfURLs (openTabs){

  //clears list
   (function deleteChild() { 
         const myNode = document.getElementById('url-list');
        myNode.innerHTML = ''
    })();

    // console.log("Content got response from background now: "+response.farewell[0])
    //lists urls
     ul = document.createElement('ul');
     ul.setAttribute("id", "list");

      document.getElementById('url-list').appendChild(ul);

      openTabs.forEach(function (item) {
          let li = document.createElement('li');
          ul.appendChild(li);

          li.innerHTML += item;
      });
    // console.log("Content got response from background now: "+response.farewell[1])
  }

//connect to index.html
 var greeting = "hola, ";
  var button = document.getElementById("experimentButton");
  button.person_name = "Roberto";
  button.addEventListener("click", function() {
    console.log("Experiment button was clicked");
    alert(greeting + button.person_name + ".");
  }, false);


//connect to app.js component
  var abutton = document.getElementById("app-btn");
  abutton.addEventListener("click", function() {
    console.log("App button was clicked");
    alert("App button was clicked");
    port.postMessage({rq: "Tabs"});

  }, false);



// chrome.runtime.onConnect.addListener(port => {
//     console.log('connected ', port);

//     if (port.name === 'background') {
//         port.onMessage.addListener(function(message,sender){
//         if(message.openTabs != null){
//           console.log("Content got message from background again ");
//           createListOfURLs(message.openTabs);
//         }
//       });
//     }
// });

// chrome.runtime.sendMessage({greeting: "hello"}, 
//   createListOfURLs);


// chrome.runtime.onMessage.addListener(
//   function(request, sender, sendResponse) {
//     console.log("content script received from background" +request);
//   });

  // //connect to url.js component
  // var ubutton = document.getElementById("url-btn");
  // ubutton.addEventListener("click", function() {
  //   console.log("URL button was clicked");
  //   alert("URL button was clicked");
  // }, false);

  

