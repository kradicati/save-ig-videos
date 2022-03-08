// Listens for the save hotkey
chrome.commands.onCommand.addListener(function (command) {
    if (command === "save") {
        sendSaveCommand()
    }
});

// Using the messaging API, the background worker sends a message to the content script that
// of the currently active tab
function sendSaveCommand() {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {}, async function (response) {
            console.log("Received response with URL " + response.source)

            // Downloads the file from the URL that is returned by the content script
            await chrome.downloads.download({
                url: response.source
            })
        });
    });
}

