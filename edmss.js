if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
          return Session.get('counter');
        },
        title: function() {
            return "Home";
        }
    });

    Template.hello.events({
        'click button': function () {
          // increment the counter when button is clicked
          Session.set('counter', Session.get('counter') + 1);
        }
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


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
