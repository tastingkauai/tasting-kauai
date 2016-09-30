Package.describe({
    name: 'zendy:bureaucrat',
    summary: 'The bureacrat processes your forms and returns tidy objects.',
    version: '1.0.2',
    git: 'https://github.com/zendylabs/bureaucrat-meteor-package'
});

Package.onUse(function(api) {
    api.versionsFrom('1.2');
    api.addFiles(['bureaucrat.js'], 'client');
    api.export('Bureaucrat');
});