// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: "com.tastingkauai.app",
    name: "Tasting Kauai",
    description: "Eat well on the Garden Island",
    author: 'Zendy Web Studio',
    email: 'webmaster@zendy.net',
    website: 'https://www.tastingkauai.com/',
    version: '1.1.37'
});

App.icons({
    'iphone_2x': 'assets/iphone/icon-120x120.png',
    'iphone_3x': 'assets/iphone/icon-180x180.png',
    'ipad': 'assets/iphone/icon-76x76.png',
    'ipad_2x': 'assets/iphone/icon-152x152.png',
    'ipad_pro': 'assets/iphone/icon-167x167.png.png',
    'ios_settings': 'assets/iphone/icon-29x29.png',
    'ios_settings_2x': 'assets/iphone/icon-58x58.png',
    'ios_settings_3x': 'assets/iphone/icon-87x87.png',
    'ios_spotlight': 'assets/iphone/icon-40x40.png',
    'ios_spotlight_2x': 'assets/iphone/icon-80x80.png',
    'android_mdpi': 'assets/android/appicon-48x48.png',
    'android_hdpi': 'assets/android/appicon-72x72.png',
    'android_xhdpi': 'assets/android/appicon-96x96.png',
    'android_xxhdpi': 'assets/android/appicon-144x144.png',
    'android_xxxhdpi': 'assets/android/appicon-192x192.png'

});

App.launchScreens({
    'iphone_2x': 'assets/iphone/launchscreen-640x960.png',
    'iphone5': 'assets/iphone/launchscreen-640x1136.png',
    'iphone6': 'assets/iphone/launchscreen-750x1334.png',
    'iphone6p_portrait': 'assets/iphone/launchscreen-1242x2208.png',
    'ipad_portrait': 'assets/iphone/launchscreen-768x1024.png',
    'ipad_portrait_2x': 'assets/iphone/launchscreen-1536x2048.png',
    'ipad_landscape': 'assets/iphone/launchscreen-1024x768.png',
    'ipad_landscape_2x': 'assets/iphone/launchscreen-2048x1536.png',
    'android_mdpi_portrait': 'assets/android/launchscreen-320x480.png',
    'android_mdpi_landscape': 'assets/android/launchscreen-480x320.png',
    'android_hdpi_portrait': 'assets/android/launchscreen-480x800.png',
    'android_hdpi_landscape': 'assets/android/launchscreen-800x480.png',
    'android_xhdpi_portrait': 'assets/android/launchscreen-720x1280.png',
    'android_xhdpi_landscape': 'assets/android/launchscreen-1280x720.png'
});

App.setPreference('StatusBarOverlaysWebView', 'true');
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('StatusBarBackgroundColor', '#710003');
App.setPreference("KeyboardDisplayRequiresUserAction",false);

App.accessRule('http://*');
App.accessRule('https://*');

// App.configurePlugin('plugin.google.maps', {
//     'API_KEY_FOR_IOS': 'AIzaSyBjPmwXl33-n3akqAy5nPvoCeTEY5A1Mm8',
//     'API_KEY_FOR_ANDROID': 'AIzaSyBZOXKYXAfuCmDZUdcDjuS2pcR1iAk7nRU'
// });

App.configurePlugin('cordova-plugin-googlemaps', {
    'API_KEY_FOR_IOS': 'AIzaSyBjPmwXl33-n3akqAy5nPvoCeTEY5A1Mm8',
    'API_KEY_FOR_ANDROID': 'AIzaSyBZOXKYXAfuCmDZUdcDjuS2pcR1iAk7nRU'
});
