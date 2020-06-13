$(document).ready(function(){
    let getHTMLString = function(dataObj){
        let beg = 
            "<div class=\"card-body py-0\">" +
                "<h5 class=\"card-title edu-title\" style=\"text-align: center\">" + dataObj.title+ "</h5>" +
                "<div class=\"d-flex mw-100\">" +
                    "<h6 class=\"card-subtitle mx-auto\">" + dataObj.durationString + "</h6>" +
               "</div>" +
                "<div class=\"card-text mt-1\">";
        let desc = dataObj.desc + "</div>";
        let tech = "<div class=\"mt-2\"><span><strong>Technologies:</strong> &nbsp" + dataObj.tech + "</span></div>";
        let end = "</div>";
        return beg + desc + tech + end;
    }

    let phantimeData = 
    {
        title: "Phantime",
        durationString: "April 2020 - June 2020",
        desc: `This is a productivity Chrome extension that was developed for my <a href=\"https://classes.pint.com/cse112/\">Advanced Software Engineering class</a>.
                The team website, where you'll find more information about the extension, can be found <a href=\"https://cse112teamphantom.github.io/\">here</a>.`,
        tech: "Firebase Authentication, Firestore, JavaScript, CodeClimate, CircleCI"
    };

    let ziplogData =
    {
        title: "ZipLog",
        durationString: "July 2019 - Sep 2019",
        desc: "This is an Express web application which enables users to log their fitness journey. Users can either " +
                "input their workouts, completed or uncompleted, and other updates of their progress. They can also see a log " +
                "of all these posts to track their progression.",
        tech: "Node.js, Express.js, Express Handlebars, jQuery, Firebase Authentication, Firestore, JavaScript"
    };

    let pbData =
    {
        title: "Personal Best",
        durationString: "Jan 2019 - Mar 2019",
        desc: "This is a Android fitness application that was created for my <a href=\"https://sites.google.com/eng.ucsd.edu/cse-110-winter-2019/\">Software Engineering class.</a> " +
                "In a group of six, we applied Agile development practices such as maintaining a Big Board, " +
                "developing user stories and tasks, and peer programming to increase productivity and more effectively " +
                "develop a larger scale project. I created a service which tracked steps when the user was not " +
                "connected to a Google Account. I also developed the classes that were used to interact with our " +
                "Firebase database and implemented push notifications for daily goals.",
        tech: "Android Studio, Firebase Realtime Database, Java"
    };

    let tbaData =
    {
        title: "Reminders",
        durationString: "Aug 2019 - Sep 2019",
        desc: "This is a web application which provides a yearly notification service. The user creates reminders " +
                "by setting a date for the event and how many days before the user wants to be reminded. Through a " +
                "daily check, the application figures out which reminders need to be sent and emails notifications to " +
                "respective users.",
        tech: "Node.js, Express.js, React.js, Passport.js, Firestore, NodeMailer"
    };

    let screenWidth = screen.width;

    let data = [phantimeData, tbaData, ziplogData, pbData];
    $(".project").parent().addClass("d-flex");
    $(".project").each(function(i){
        $(this).append(getHTMLString(data[i]));
        $(this).addClass("mw-100");
        $(this).addClass("my-4");
        $(this).children().first().addClass("mx-auto");

        if (screenWidth < 768 && i < (data.length - 1)){
            $(this).addClass("pb-4");
            $(this).addClass("border-bottom");
        }
    });

    /*if (screenWidth < 768) {
        let data = [ziplogData, pbData, tbaData];
        $(".project").parent().addClass("d-block");
        $(".project").each(function(i){
            $(this).append(getHTMLString(data[i]));
            $(this).addClass("mw-100");
            $(this).addClass("my-4");
            $(this).children().first().addClass("mx-auto");

            if (i < 2){
                $(this).addClass("pb-4");
                $(this).addClass("border-bottom");
            }
        });


    } else {
        $("#ziplog").click(function(){
            if (!$("#ziplog").hasClass("active")){
                $(".active").toggleClass("active");
                $("#ziplog").toggleClass("active");
                $("#project-card").html(getHTMLString(ziplogData));
                if ($("#project-container").hasClass("hidden")){
                    $("#project-container").toggleClass("hidden");
                }
            } else {
                $("#ziplog").toggleClass("active");
                $("#project-container").toggleClass("hidden");
            }
        });

        $("#personalbest").click(function(){
            if (!$("#personalbest").hasClass("active")){
                $(".active").toggleClass("active");
                $("#personalbest").toggleClass("active");
                $("#project-card").html(getHTMLString(pbData));
                if ($("#project-container").hasClass("hidden")){
                    $("#project-container").toggleClass("hidden");
                }
            } else {
                $("#personalbest").toggleClass("active");
                $("#project-container").toggleClass("hidden");
            }
        });

        $("#tbd").click(function(){
            if (!$("#tbd").hasClass("active")){
                $(".active").toggleClass("active");
                $("#tbd").toggleClass("active");
                $("#project-card").html(getHTMLString(tbaData));
                if ($("#project-container").hasClass("hidden")){
                    $("#project-container").toggleClass("hidden");
                }
            } else {
                $("#tbd").toggleClass("active");
                $("#project-container").toggleClass("hidden");
            }
        });
    }*/


});