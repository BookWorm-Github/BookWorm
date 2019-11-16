document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {

        chrome.tabs.getSelected(null, function(tab) {
            alert("You are now on phase x. If you wish you continute, please click on the bookworm logo again!");
        });
    }, false);
}, false);