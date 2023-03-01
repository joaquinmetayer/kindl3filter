chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
      code: 'var filter = "grayscale(100%) brightness(50%)";' +
            'if (document.documentElement.style.filter) {' +
            '  document.documentElement.style.filter = "";' +
            '} else {' +
            '  document.documentElement.style.filter = filter;' +
            '}'
    });
  });
  