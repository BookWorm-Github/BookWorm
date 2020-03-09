
//With some lag in the initial call of getURLs (needs to be clicked twice), it works.
//This line opens up a long-lived connection to your background page.
// var port = chrome.runtime.connect({name:"mycontentscript"});
// var openTabs = null;

// port.onMessage.addListener(function(message,sender){
//       if(message.openTabs != null){
//         console.log("Content got message from background: "+message.openTabs);
//         openTabs = message.openTabs;

//         createListOfURLs(openTabs);
//         console.log("openTabs in content is now "+openTabs)
//       }
//       else{
//         console.log("content got that Message was null")
//       }
// });
  //put the creation of url-list here

const modal = document.createElement('div');
   modal.innerHTML = `<iframe id="app-frame" style="height:100%; width:100%"></iframe>`;
        document.body.appendChild(modal);
        // const div = document.querySelector("div");
        // div.showModal();

  //Connect content to html!
  const iframe = document.getElementById("app-frame");
  iframe.src = chrome.extension.getURL("index.html");
  iframe.frameBorder = 0;
   iframe.setAttribute("style","position:absolute; top:0; left:0; bottom:0; right:0; width:100%; height:100%; border:none; margin:0; padding:0; z-index:999999;");
    



//adds button to list all urls
// var button = document.createElement("button");
// button.innerHTML = "Get Opened URLs";
// document.body.appendChild(button);
// button.addEventListener ("click", function() {
  
//   chrome.runtime.sendMessage({rq: "Tabs"}, function(response) {
//     console.log(response.openTabs);
//     createListOfURLs(response.openTabs);
//   });

// });

//creates div for url-list
// const div = document.createElement('div');
// div.setAttribute("style","height: 50%");
// div.setAttribute("id", "url-list");

// document.body.appendChild(div);



chrome.runtime.sendMessage({rq: "Tabs"}, function(response) {
  // console.log(response.openTabs);
  // createListOfURLs(response.openTabs);
});

// chrome.runtime.onMessage.addListener(
//   (message, sender, sendResponse) => {
//     console.log("content script received msg ("+message+") from background sender "+sender);
//       if(message.openTabs != null){
//         console.log("Content got message from background: "+message.openTabs);
//         openTabs = message.openTabs;

//         createListOfURLs(openTabs);
//         console.log("openTabs in content is now "+openTabs)
//       }
//       else{
//         console.log("content got that Message was null")
//       }

//   });

function createListOfURLs (openTabs){
  if(document.getElementById('url-list')){
   
  

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

      if(Array.isArray(openTabs)){
        openTabs.forEach(function (item) {
          let li = document.createElement('li');
          ul.appendChild(li);

          li.innerHTML += item;
        });
      }
      else{//debug condition

        let li = document.createElement('li');
        ul.append(li);
        li.innerHTML = 'Error: openTabs is not array'
      }
    }
    else{
      console.log("ERROR: URL-list does not exist");
    }
    // console.log("Content got response from background now: "+response.farewell[1])
  }


//connect to app.js component
  // var abutton = document.getElementById("app-btn");
  // abutton.addEventListener("click", function() {
  //   console.log("App button was clicked");
  //   // alert("App button was clicked");
  //   port.postMessage({rq: "Tabs"});

  // }, false);



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

  

