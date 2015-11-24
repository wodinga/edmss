if (Meteor.isClient) {
    Template.hello.helpers({
        title : "Home"
    });

    Template.hello.events({
    });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
