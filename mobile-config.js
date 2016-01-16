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
    'ipad_2x': 'assets/iphone/icon-152x152.png'
});

App.launchScreens({
    'iphone_2x': 'assets/iphone/launchscreen-640x960.png',
    'iphone5': 'assets/iphone/launchscreen-640x1136.png',
    'iphone6': 'assets/iphone/launchscreen-750x1334.png',
    'iphone6p_portrait': 'assets/iphone/launchscreen-1242x2208.png'
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
//AIzaSyBZOXKYXAfuCmDZUdcDjuS2pcR1iAk7nRU