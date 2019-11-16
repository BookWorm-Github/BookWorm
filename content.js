console.log("Hello World!");

let stages = 0;

//BELOW ARE TWO DIFFERENT WAYS TO CHANGE THE THINGS WITHIN A PARAGRAPH TEXT
function censor_paragraph() {
  let elts = document.getElementsByTagName('p');
  for (let i = 0; i < elts.length; i++) {
    elts[i].style.backgroundColor = 'black';

  }
}

// (function () {//turns paragraphs into kittens
//   console.log("calling kittens");
//   let paragraphs = document.getElementsByTagName('p');
//   for (let i = 0; i < paragraphs.length; ++i){
//     paragraphs[i].innerHTML = 'kittens!';
//   }
// })();

function uncensor_paragraph(){
  let elts = document.getElementsByTagName('p');
  for (let i = 0; i < elts.length; i++) {
    elts[i].style.backgroundColor = 'white';
  }
}

chrome.runtime.onMessage.addListener(gotMessage);

// Callback for when a message is received from background script
function gotMessage(request, sender, sendResponse) {
  console.log(stages === 0);
  console.log(stages);
  if (stages === 0){
    censor_paragraph();
  }
  if (stages === 1){
    uncensor_paragraph();
    stages --;
  }
}

