const deepai = require('deepai');
deepai.setApiKey('ae158c0c-821b-4319-934e-b8556ee36e39');

function summarize(text){
  return deepai.callStandardApi("summarization", {
      text: text
  }).then(function (result){
      return result;
  }).catch(function (error){
      console.log(error);
      return error;
  }); 
}

function set_phase(int) {
  chrome.storage.local.set({'phase': int}, function () {
    console.log('phase is set to ' + int);
  });
}

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
  chrome.storage.local.get(['phase'], function(result){
    console.log(result.phase);
    if (result.phase === 0){
      censor_paragraph();
      set_phase(result.phase + 1);
    }
    else{
      uncensor_paragraph();
      set_phase(0);
    }
  })
}

set_phase(0);