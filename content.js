deepai.setApiKey('ae158c0c-821b-4319-934e-b8556ee36e39');

function summarize(text) {
    return deepai.callStandardApi("summarization", {
        text: text
    }).then(function (result) {
        return result.output;
    }).catch(function (error) {
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

function GETSHITDONE() {//turns paragraphs into summary
  console.log("calling summarize");
  let paragraphs = document.getElementsByTagName('p');
  let summaries = JSON.parse(JSON.stringify(paragraphs));
  for (let i = 0; i < paragraphs.length; ++i){
    summarize(summaries[i].innerHTML).then(function (result){
        console.log(result);
        paragraphs[i].innerHTML = result;
    })
  }
};

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
                GETSHITDONE()
                set_phase(result.phase + 1);
            }
            if (result.phase === 1) {
                uncensor_paragraph();
                set_phase(0);
            }
        })
    }
    else if (request === "reset"){
        uncensor_paragraph();
        set_phase(0);
    }
    console.log('because of asynchronous method, this comes up first');
}

let coll = document.querySelectorAll('h1,h2,h3,h4,h5,h6');
console.log(coll);
for (let i = 0; i < coll.length; i++) {
    coll[i].classList.add("active");
    coll[i].addEventListener("click", function() {
        let paragraphs = this.nextElementSibling;
        console.log(paragraphs);
        while(paragraphs.tagName === "P"){
            if (paragraphs.style.display !== "none") {
                paragraphs.style.display = "none";
            } else {
                paragraphs.style.display = "block";
            }
            paragraphs = this.nextElementSibling;
            console.log(paragraphs);
        }
    })


}

chrome.runtime.onMessage.addListener(gotMessage);

set_phase(0);

