chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Received messages on content-script")

        let source = document.getElementsByTagName("video")[0]
            .getElementsByTagName("source")[0]
            .src
            .toString()

        sendResponse({source: source})
    }
);