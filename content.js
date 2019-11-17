deepai.setApiKey('ae158c0c-821b-4319-934e-b8556ee36e39');

function summarize(text){
  return deepai.callStandardApi("summarization", {
      text: text
  }).then(function (result){
      return result.output;
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

    let subheaders = document.getElementsByTagName('strong');
    for (let i = 0; i < subheaders.length; i++) {
        subheaders[i].style.backgroundColor = 'white';
    }
}

(function () {//turns paragraphs into kittens
  console.log("calling summarize");
  let paragraphs = document.getElementsByTagName('p');
  for (let i = 0; i < paragraphs.length; ++i){
    
    paragraphs[i].innerHTML = 'kittens!';
  }
})();

function uncensor_paragraph() {
    let elts = document.getElementsByTagName('p');
    for (let i = 0; i < elts.length; i++) {
        elts[i].style.backgroundColor = 'white';
    }
}

// Callback for when a message is received from background script
function gotMessage(request, sender, sendResponse) {
    if (request === "next-phase") {
        chrome.storage.local.get(['phase'], function (result) {
            if (result.phase === 0) {
                censor_paragraph();
                set_phase(result.phase + 1);
            }
            if (result.phase === 1) {
                uncensor_paragraph();
                set_phase(0);
            }
        })
    }
    console.log('because of asynchronous method, this comes up first');
}

var coll = document.getElementsByTagName('h1');
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display !== "none") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

chrome.runtime.onMessage.addListener(gotMessage);

set_phase(0);

