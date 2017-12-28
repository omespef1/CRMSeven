cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-calendar.Calendar",
    "file": "plugins/cordova-plugin-calendar/www/Calendar.js",
    "pluginId": "cordova-plugin-calendar",
    "clobbers": [
      "Calendar"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-fingerprint-aio.Fingerprint",
    "file": "plugins/cordova-plugin-fingerprint-aio/www/Fingerprint.js",
    "pluginId": "cordova-plugin-fingerprint-aio",
    "clobbers": [
      "Fingerprint"
    ]
  },
  {
    "id": "cordova-plugin-ionic-webview.ios-wkwebview-exec",
    "file": "plugins/cordova-plugin-ionic-webview/src/www/ios/ios-wkwebview-exec.js",
    "pluginId": "cordova-plugin-ionic-webview",
    "clobbers": [
      "cordova.exec"
    ]
  },
  {
    "id": "cordova-plugin-keychain-touch-id.TouchID",
    "file": "plugins/cordova-plugin-keychain-touch-id/www/touchid.js",
    "pluginId": "cordova-plugin-keychain-touch-id",
    "clobbers": [
      "window.plugins.touchid"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "ionic-plugin-keyboard.keyboard",
    "file": "plugins/ionic-plugin-keyboard/www/ios/keyboard.js",
    "pluginId": "ionic-plugin-keyboard",
    "clobbers": [
      "cordova.plugins.Keyboard"
    ],
    "runs": true
  },
  {
    "id": "mx.ferreyra.callnumber.CallNumber",
    "file": "plugins/mx.ferreyra.callnumber/www/CallNumber.js",
    "pluginId": "mx.ferreyra.callnumber",
    "clobbers": [
      "call"
    ]
  },
  {
    "id": "cordova-plugin-email-composer.EmailComposer",
    "file": "plugins/cordova-plugin-email-composer/www/email_composer.js",
    "pluginId": "cordova-plugin-email-composer",
    "clobbers": [
      "cordova.plugins.email",
      "plugin.email"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-add-swift-support": "1.7.0",
  "cordova-plugin-calendar": "4.6.0",
  "cordova-plugin-device": "1.1.7",
  "cordova-plugin-fingerprint-aio": "1.3.3",
  "cordova-plugin-ionic-webview": "1.1.16",
  "cordova-plugin-keychain-touch-id": "3.2.1",
  "cordova-plugin-splashscreen": "4.1.0",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-sqlite-storage": "2.1.2",
  "ionic-plugin-keyboard": "2.2.1",
  "cordova-plugin-compat": "1.2.0",
  "mx.ferreyra.callnumber": "0.0.2",
  "cordova-plugin-email-composer": "0.8.11"
};
// BOTTOM OF METADATA
});