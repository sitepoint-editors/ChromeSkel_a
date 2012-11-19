##Skeleton Chrome Extension w/ fancy-settings

###What is this?
This Chrome extension is an extension bootstrap, a template so to speak. All you need to do is edit some values in the manifest.json file, modify which options you want your extension to have through fancy-settings/source/manifest.js and add your extension code. There's a blog post explaining it [here](http://www.bitfalls.com/2012/11/chromeskel-chrome-extension.html).

The skeleton extension is usable as is (albeit utterly useless) and can be installed and tried out even in this very basic form. Just download the latest version of Chrome or Chromium and set it to developer mode under Settings, then Load Unpacked Extension and select the folder that contains this file.

This skeleton extension will be updated regularly to the newest manifest version and rules published by Google.

###What does this package contain?

- The usual LICENSE.md and README.md files
- Sample icons in all suggested sizes: 19px and 38px due to [this](http://developer.chrome.com/extensions/browserAction.html#icon) followed by 16px for the favicon, 48px for the settings screen and 128px for the Chrome Web Store. Replace these icons with your own icons of the same size.
- Manifest.json file with some preconfigured sample values, mostly taken from [here](http://developer.chrome.com/extensions/manifest.html). Refer to linked page to add more needed values.
- autoincluded minified latest jQuery. Remove in manifest.json if not needed.
- [fancy-settings](https://github.com/zealotrunner/fancy-settings) with the default manifest. Remove the options_page key from the main manifest.json if your extension won't have any options
- background.html [background page](http://developer.chrome.com/extensions/background_pages.html) which includes the initial background script under scripts/background.js
- scripts/background.js which initializes the page action icon and does nothing else
- scripts/main.js [content script](http://developer.chrome.com/extensions/content_scripts.html) which is run at document_idle (edit in manuscript if needed) and displays a greeting message in the console.
- fragments/popup.html is an html popup file that opens when the page action is clicked (the extension icon in the address bar). You can edit it, or remove it completely. Please note that chrome.pageAction.onClicked will not fire if there is a popup defined - to make pageAction react to clicks, remove the popup, or add actions to the popup itself.

###Can I use this commercially?
Yeah, look at LICENSE

###Any tutorials and/or examples available?
Yeah, [here](http://www.bitfalls.com/search/label/Chrome%20Development)

###How can I contribute?
Keep it up to date. Add some more options that don't complicate things for the user. Write examples and let me know where you used this Skeleton extension, I'll link to them here. Anything helps.