function hello() {
  console.log("hi");
  chrome.tabs.executeScript({
    file: 'alert.js'
  });
}

document.getElementById('clickme').addEventListener('click', hello);