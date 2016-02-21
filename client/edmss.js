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
        title : "Home",
        isTime : function(){
            var day = new Date().getUTCDay();
            var hour= new Date().getUTCHours() - 5; //EST time conversion
            if(hour <= 0)
            {
                day--;
                hour = 24 + hour;
            }
            console.log("Day = " + day);
            console.log("Hour = " + hour);
            //Returns true if day = Saturday and time is 9PM or later
            return day == 6 && hour >= 21;
        }
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
            var url = document.URL;
            $(".nav").find(".active").removeClass("active");
            $(event.target).parent().addClass("active");
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    });
}
