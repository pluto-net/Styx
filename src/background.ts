chrome.runtime.onInstalled.addListener(function() {
  console.log("chrome extension is installed");
  chrome.runtime.onMessageExternal.addListener(function(
    request,
    _sender,
    sendResponse
  ) {
    if (request && request.message === "CHECK_EXTENSION_EXIST") {
      sendResponse({ success: true });
    }
    return true;
  });
});
