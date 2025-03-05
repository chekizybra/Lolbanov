let rotationInterval;
const IMAGE_URL = "https://i.imgur.com/3m00GmH.png";//<-----url картинки

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "replaceImages") {
    const images = document.getElementsByTagName('img');
    for (let img of images) {
      img.src = IMAGE_URL;
    }
    sendResponse({status: "Images replaced"});
  } else if (request.action === "rotateImages") {
    if (rotationInterval) {
      clearInterval(rotationInterval);
    }

    const images = document.getElementsByTagName('img');
    let angle = 0;

    rotationInterval = setInterval(() => {
      for (let img of images) {
        img.style.transform = `rotate(${angle}deg)`;
        img.style.transition = 'transform 0.5s';
      }
      angle += 10; // Увеличиваем угол поворота
    }, 100);

    sendResponse({status: "Images are rotating"});
  } else if (request.action === "stopRotation") {
    clearInterval(rotationInterval);
    sendResponse({status: "Rotation stopped"});
  }
  return true;
});