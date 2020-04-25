//With some lag in the initial call of getURLs (needs to be clicked twice), it works.
//This line opens up a long-lived connection to your background page.
// var port = chrome.runtime.connect({name:"mycontentscript"});
// var openTabs = null;

// port.onMessage.addListener(function(message,sender){
//       if(message.openTabs != null){
//         //console.log("Content got message from background: "+message.openTabs);
//         openTabs = message.openTabs;

//         createListOfURLs(openTabs);
//         //console.log("openTabs in content is now "+openTabs)
//       }
//       else{
//         //console.log("content got that Message was null")
//       }
// });
  //put the creation of url-list here

//adds button
// var button = document.createElement("button");
// button.innerHTML = "Get Opened URLs";
// button.setAttribute('id','clickButton');
// button.setAttribute('style','display:none');
// document.body.appendChild(button);
// button.addEventListener ("click", function() {

//   chrome.runtime.sendMessage({rq: "Tabs"}, function(response) {
//     //console.log(response.openTabs);
//     createListOfURLs(response.openTabs);
//   });

// });

// window.onload = function(){
//     chrome.runtime.sendMessage({rq: "Tabs"}, function(response) {
//     //console.log(response.openTabs);
//     createListOfURLs(response.openTabs);
//   });
// };

//creates div for url-list
const div = document.createElement('div');
div.setAttribute("style","height: 50%");
div.setAttribute("id", "url-list");

document.body.appendChild(div);

// chrome.runtime.sendMessage({rq: "Tabs"}, function(response) {
//   //console.log(response.openTabs);
//   createListOfURLs(response.openTabs);
// });

// chrome.runtime.onMessage.addListener(
//   (message, sender, sendResponse) => {
//     //console.log("content script received msg ("+message+") from background sender "+sender);
//       if(message.openTabs != null){
//         //console.log("Content got message from background: "+message.openTabs);
//         openTabs = message.openTabs;

//         createListOfURLs(openTabs);
//         //console.log("openTabs in content is now "+openTabs)
//       }
//       else{
//         //console.log("content got that Message was null")
//       }

//   });

function createListOfURLs (openTabs){
	let ul;
	if (document.getElementById('url-list')) {


		//clears list
		(function deleteChild() {
			const myNode = document.getElementById('url-list');
			myNode.innerHTML = ''
		})();

		// //console.log("Content got response from background now: "+response.farewell[0])
		//lists urls
		ul = document.createElement('ul');
		ul.setAttribute("id", "list");

		document.getElementById('url-list').appendChild(ul);

		if (Array.isArray(openTabs)) {
			openTabs.forEach(function (item) {
				let li = document.createElement('li');
				ul.appendChild(li);

				li.innerHTML += item;
			});
		} else {//debug condition

			let li = document.createElement('li');
			ul.append(li);
			li.innerHTML = 'Error: openTabs is not array'
		}
	} else {
		//console.log("ERROR: URL-list does not exist");
	}
    // //console.log("Content got response from background now: "+response.farewell[1])
  }


