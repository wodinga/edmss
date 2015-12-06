//Routes
Router.configure({
    layoutTemplate:'frame'
});
Router.route('/', function () {
    this.render('hello', {
        title: 'Home!'
    });
});
Router.route('/about', function () {
    this.render('About', {
        title: 'About'
    });
});
Router.route('/contact', function () {
    this.render('Contact', {
        title: 'Contact'
    });
});
