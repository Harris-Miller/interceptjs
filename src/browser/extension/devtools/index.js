function createPanel(url) {
  chrome.devtools.panels.create(
    'Intercept', null, url, function () { }
  );
}

// if (chrome.runtime.getBackgroundPage) {
//   // Check if the background page's object is accessible (not in incognito)
//   chrome.runtime.getBackgroundPage(background => {
//     createPanel(background ? 'window.html' : 'devpanel.html');
//   });
// } else {
//   createPanel('devpanel.html');
// }

createPanel('devpanel.html');
