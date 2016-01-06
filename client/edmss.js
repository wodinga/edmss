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

if (Meteor.isClient) {
    Template.Footer.helpers({
        title : "Home"
    });

    Template.Footer.events({
        'click #play-btn' : function() {
            $('#icon').toggleClass('fa-play fa-pause'); 
            var playBtn = document.getElementById("source");
            if($('#icon').hasClass('fa-play'))
            {
                playBtn.pause();
            }
            else if($('#icon').hasClass('fa-pause'))
            {
                playBtn.play();
            }
                
        }
    });
    Template.frame.events({
        'click a' : function(event) {
            console.log(event.target)
            var url = document.URL;
            console.log(url);
            $(".nav").find(".active").removeClass("active");
            $(event.target).parent().addClass("active");
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}
