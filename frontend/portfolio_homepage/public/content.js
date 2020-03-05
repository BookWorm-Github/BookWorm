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

    // console.log("Content got response from background now: "+response.farewell[1])
  });

 var greeting = "hola, ";
  var button = document.getElementById("experimentButton");
  button.person_name = "Roberto";
  button.addEventListener("click", function() {
    console.log("Experiment button was clicked");
    alert(greeting + button.person_name + ".");
  }, false);



  var abutton = document.getElementById("app-btn");
  abutton.addEventListener("click", function() {
    console.log("App button was clicked");
    alert("App button was clicked");
  }, false);

