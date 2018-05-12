function saveOptions(e) {
  chrome.storage.local.set({
    url: document.querySelector("#url").value
  });
}
document.querySelector("form").addEventListener("submit", saveOptions);