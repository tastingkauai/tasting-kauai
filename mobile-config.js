// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
    id: "com.tastingkauai.app",
    name: "Tasting Kauai",
    description: "Eat well on the Garden Island",
    author: 'Zendy Web Studio',
    email: 'webmaster@zendy.net',
    website: 'https://www.tastingkauai.com/',
    version: '1.0'
});

App.icons({
    'iphone': 'assets/iphone/icon-60x60.png',
    'iphone_2x': 'assets/iphone/icon-120x120.png',
    'iphone_3x': 'assets/iphone/icon-180x180.png',
    'ipad': 'assets/iphone/icon-76x76.png',
    'ipad_2x': 'assets/iphone/icon-152x152.png',
    'android_ldpi': 'assets/android/appicon-36x36.png',
    'android_mdpi': 'assets/android/appicon-48x48.png',
    'android_hdpi': 'assets/android/appicon-72x72.png',
    'android_xhdpi': 'assets/android/appicon-96x96.png'

});

App.launchScreens({
    'iphone_2x': 'assets/iphone/launchscreen-640x960.png',
    'iphone5': 'assets/iphone/launchscreen-640x1136.png',
    'iphone6': 'assets/iphone/launchscreen-750x1334.png',
    'iphone6p_portrait': 'assets/iphone/launchscreen-1242x2208.png',
    'android_ldpi_portrait': 'assets/android/launchscreen-200x320.png',
    'android_ldpi_landscape': 'assets/android/launchscreen-320x200.png',
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

App.accessRule('http://*');
App.accessRule('https://*');

App.configurePlugin('plugin.google.maps', {
    'API_KEY_FOR_IOS': 'AIzaSyBjPmwXl33-n3akqAy5nPvoCeTEY5A1Mm8',
    'API_KEY_FOR_ANDROID': 'AIzaSyBZOXKYXAfuCmDZUdcDjuS2pcR1iAk7nRU'
});

