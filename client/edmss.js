//Routes
Router.configure({
    layoutTemplate:'frame'
});
Router.route('/', function () {
    this.render('hello', {
        title: 'Home!'
    });
});
Router.route('about', function () {
    this.render('about', {
        title: 'About'
    });
});
Router.route('contact', function () {
    this.render('contact', {
        title: 'Contact'
    });
});

if (!Meteor.isClient) {
} else {
    Template.Footer.helpers({
        title: "Home",
        isTime: function () {
            var d = new Date();
            var localTime = d.getTime();   //Local time in ms
            var localOffset = new Date().getTimezoneOffset() * 60 * 1000; //in ms
            var UTCtime = localTime - localOffset;
            var ESTtime = UTCtime + (300 * 60000); //UTC + offset
            var day = new Date(ESTtime).getDay();
            var hour = new Date(ESTtime).getHours(); //EST time conversion
            var min = new Date(ESTtime).getMinutes();
            console.log(localOffset);
            // if (hour <= 0) {
            //     day--;
            //     hour = 24 + hour;
            // }
            console.log("Day = " + day);
            console.log("Hour = " + hour);
            console.log("min= " + min);
            //Returns true if day = Saturday and time is 9PM or later
            return day == 6 && hour >= 21;
        }
    });

    Template.Footer.events({
        'click #play-btn': function () {
            $('#icon').toggleClass('fa-play fa-pause');
            var playBtn = document.getElementById("source");
            if ($('#icon').hasClass('fa-play')) {
                playBtn.pause();
            }
            else if ($('#icon').hasClass('fa-pause')) {
                playBtn.play();
            }

        }
    });
    Template.frame.events({
        'click a': function (event) {
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
