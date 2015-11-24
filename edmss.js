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
    this.render('About');
});
