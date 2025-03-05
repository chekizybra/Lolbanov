document.getElementById('replaceBtn').onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "replaceImages"}, (response) => {
      console.log(response.status);
    });
  });
};

document.getElementById('rotateBtn').onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "rotateImages"}, (response) => {
      console.log(response.status);
    });
  });
};

document.getElementById('stopRotateBtn').onclick = () => {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, {action: "stopRotation"}, (response) => {
      console.log(response.status);
    });
  });
};