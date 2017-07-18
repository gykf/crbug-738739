'use strict'

chrome.browserAction.onClicked.addListener(() => {
  chrome.tabs.create({
    url: `chrome-extension://${chrome.runtime.id}/index.html`
  })
})
