let highlighted_text = '';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        highlighted_text
    });
});