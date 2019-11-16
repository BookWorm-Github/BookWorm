console.log("Hello World!");

//BELOW ARE TWO DIFFERENT WAYS TO CHANGE THE THINGS WITHIN A PARAGRAPH TEXT
function change_fontcolor() {
  let elts = document.getElementsByTagName('p');
  for (let i = 0; i < elts.length; i++) {
    elts[i].style['background-color'] = '#000000';
  }
}
change_fontcolor();


(function () {//turns paragraphs into kittens
  console.log(" calling kittens");
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; ++i){
    paragraphs[i].innerHTML = 'kittens!';
  }
})();

// (function () {
//     let paragraphs = document.getElementsByTagName('p');
//     for (let i = 0; i < paragraphs.length; ++i){
//         paragraphs[i].style['background-color'] = '63#COC';
//     }
// })();


chrome.runtime.onMessage.addListener(gotMessage);

// Callback for when a message is received
function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
}