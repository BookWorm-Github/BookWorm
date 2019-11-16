console.log("Hello World!");

//BELOW ARE TWO DIFFERENT WAYS TO CHANGE THE THINGS WITHIN A PARAGRAPH TEXT
function censor_paragraph() {
  let elts = document.getElementsByTagName('p');
  for (let i = 0; i < elts.length; i++) {
    elts[i].style.backgroundColor = 'black';

  }
}

// (function () {//example of another way to change font size
//     let paragraphs = document.getElementsByTagName('p');
//     for (let i = 0; i < paragraphs.length; ++i){
//         paragraphs[i].style['background-color'] = '63#COC';
//     }
// })();

(function () {//turns paragraphs into kittens
  console.log(" calling kittens");
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; ++i){
    paragraphs[i].innerHTML = 'kittens!';
  }
})();

function uncensor_paragraph(){
  let elts = document.getElementsByTagName('p');
  for (let i = 0; i < elts.length; i++) {
    elts[i].style.backgroundColor = 'white';
  }
}

chrome.runtime.onMessage.addListener(gotMessage);

// Callback for when a message is received from background script
function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === 'button pressed'){
    censor_paragraph();
  }
}

