document.addEventListener('DOMContentLoaded', function(){
	console.log("Chrome extension is "+chrome.extension)
	const bg = chrome.extension.getBackgroundPage();
	console.log("Background page is "+bg+", and chrome extension is "+chrome.extension);
	Object.keys(bg.bears).forEach(function(url){
		const div = document.createElement('div');
		div.textContent = `${url}: ${bg.bears[url]}`
		document.body.appendChild(div);
	})

}, false)
