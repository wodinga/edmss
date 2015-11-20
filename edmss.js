//Routes
Router.configure({
    layoutTemplate:'frame'
});
Router.route('/', function () {
    this.render('hello');
});
Router.route('/about', function () {
    this.render('About');
});
