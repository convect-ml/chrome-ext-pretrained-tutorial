// Do not publish this extension with the API key here. This is only for testing
const apiKey = "Your API key on pretrained.convect.ml";

let highlightedTextElement = document.getElementById("highlightedText");
let paraphraseBtn = document.getElementById("paraphraseBtn");
let paraphrasedText = document.getElementById("paraphrasedText");

chrome.storage.sync.get("highlighted_text", ({
    highlighted_text
}) => {
    if (highlighted_text === "") {
        highlightedTextElement.innerText = "No text is highlighted.";
        paraphraseBtn.disabled = true;
    } else {
        highlightedTextElement.innerText = highlighted_text;
        paraphraseBtn.disabled = false;
    }
});

paraphraseBtn.addEventListener("click", async () => {
    const url = "https://api.convect.ml/pretrained-v0/pegasus-paraphrase/generation"
    const data = {
        text: highlightedTextElement.innerText
    }
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(data)
    });
    const responseJson = await response.json();
    const paraphrases = responseJson["paraphrases"]
    paraphrasedText.innerHTML = "<p>Paraphrases:</p>" + JSON.stringify(paraphrases);
});