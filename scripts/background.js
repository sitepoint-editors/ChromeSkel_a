var settings = new Store("settings", {
    "sample_setting": "This is how you use Store.js to remember values"
});

chrome.extension.onMessage.addListener(
  function(request, sender, sendResponse) {
  	chrome.pageAction.show(sender.tab.id);
    sendResponse(settings.toObject());
  });