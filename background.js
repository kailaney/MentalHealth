chrome.runtime.onMessage.addListener(function(request) {
  if (request.type === 'request_msg') {
      chrome.tabs.create({
          url: chrome.extension.getURL('dialog.html'),
          active: true
      }, function(tab) {
          // After the tab has been created, open a window to inject the tab
          chrome.windows.create({
              tabId: tab.id,
              type: 'popup',
              focused: true
              // incognito, top, left, ...
          });
      });
  }
});
function setMsg(message) {
  console.log(message);
};


