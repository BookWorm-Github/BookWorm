// alert('Grrr.')


// chrome.runtime.onMessage.addListener(function(request,sender,sendResponse)
// {
//   alert("content received msg: "+request);


// })

// const re = new RegExp('bear', 'gi')
// const matches = document.documentElement.innerHTML.match(re) || []

chrome.runtime.sendMessage({greeting: "hello"}, 
  response =>{

    console.log("Content got response from background now: "+response.farewell)
    // console.log("Content got response from background now: "+response.farewell[0])
    var openTabs = response.farewell;
     ul = document.createElement('ul');

      document.getElementById('url-list').appendChild(ul);

      openTabs.forEach(function (item) {
          let li = document.createElement('li');
          ul.appendChild(li);

          li.innerHTML += item;
      });
    // console.log("Content got response from background now: "+response.farewell[1])
  });

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
  }, false);

  // //connect to url.js component
  // var ubutton = document.getElementById("url-btn");
  // ubutton.addEventListener("click", function() {
  //   console.log("URL button was clicked");
  //   alert("URL button was clicked");
  // }, false);

  

