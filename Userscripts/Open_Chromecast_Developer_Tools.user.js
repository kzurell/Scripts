// ==UserScript==
// @name            Open Chromecast Developer Tools
// @description     Open the Chromecast Developer Tools quickly and automatically.
// @icon            http://www.kirk.zurell.name/favicon.ico
//
// @author          Kirk Zurell <kirk@kirk.zurell.name>
// @namespace       http://kirk.zurell.name/userscripts
// downloadURL      https://raw.githubusercontent.com/kzurell/Scripts/master/Userscripts/Open_Chromecast_Developer_Tools.user.js
//
// @license         Use at your own risk.
// @copyright       Copyright (C) 2014, by Kirk Zurell
//
// @include         *
// include         http://10.0.1.2:9222
//
// @version         0.2
// @updateURL       https://raw.githubusercontent.com/kzurell/Scripts/master/Userscripts/Open_Chromecast_Developer_Tools.user.js
//
// @run-at          document-start
// resource        resourceName http://www.example.com/example.png
// unwrap
// ==/UserScript==
 
/**
 * Use at your own risk.
 *
 * Cribbed from http://stackoverflow.com/questions/12375008/how-can-my-userscript-get-a-link-based-on-the-links-text

 */
 
/**
 * SCRIPT DESCRIPTION.
 *
 * @see http://wiki.greasespot.net/API_reference
 * @see http://wiki.greasespot.net/Metadata_Block
 */
(function() {	
  console.log("Starting Open Chromecast Developer Tools");

//--- Note that contains() is CASE SENSITIVE.
var specLinks   = document.evaluate (
    "//a[contains(text(), 'Chromecast Receiver')]",
    document,
    null,
    XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,
    null
);

console.dir(specLinks);

if (specLinks.snapshotLength) {
    console.log("Opening");
    var specLink    = specLinks.snapshotItem (0);
    var clickEvent  = document.createEvent ('MouseEvents');
    clickEvent.initEvent ('click', true, true);
    specLink.dispatchEvent (clickEvent);
}

    
})();
