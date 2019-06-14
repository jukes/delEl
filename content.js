var clickedEl = null;

document.addEventListener("mousedown", function (event) {
  //right click
  if (event.button == 2) {
    clickedEl = event.target;
  }
}, true);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request == "deleteClickedEl") {    
    if(clickedEl){
      clickedEl.parentNode.removeChild(clickedEl);
    }
  }
});
