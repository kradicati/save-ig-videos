chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        (async() => {
            let url = await getVideoUrl()
            sendResponse({source: url.toString()})
        })();

        return true
    }
);

async function getVideoUrl() {
    let url = location.href

    url = url.substring(0, url.lastIndexOf("/")) + "/?__a=1"

    let response = await fetch(url)
    let json = await response.json()

    return json["items"]["0"]["video_versions"]["0"]["url"]
}