  var port = chrome.runtime.connect();





window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);




  var greeting = "hola, ";
  var button = document.getElementById("experimentButton");
  button.person_name = "Roberto";
  button.addEventListener("click", function() {
  	console.log("Experiment button was clicked");
    alert(greeting + button.person_name + ".");
  }, false);