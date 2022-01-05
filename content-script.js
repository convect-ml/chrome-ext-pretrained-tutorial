document.addEventListener('selectionchange', () => {
    chrome.storage.sync.set({
        highlighted_text: document.getSelection().toString()
    });
});