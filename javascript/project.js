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

    let ziplogData =
    {
        title: "ZipLog",
        durationString: "July 2019 - Present",
        desc: "...",
        tech: "Node.js Express.js, Express Handlebars, jQuery, Firebase Authentication, Firestore, Javascript"
    };

    let pbData =
    {
        title: "Personal Best",
        durationString: "Jan 2019 - Mar 2019",
        desc: "This is a Android fitness application that was created for my <a href=\"https://cse.ucsd.edu/undergraduate/courses/course-descriptions/cse-110-software-engineering\">Software Engineering class.</a> " +
                "In a group of six, we applied Agile development practices such as maintaining a Big Board, " +
                "developing user stories and tasks, and peer programming to increase productivity and more effectively " +
                "develop a larger scale project. I created a service which tracked steps when the user was not " +
                "connected to a Google Account. I also developed the classes that were used to interact with our " +
                "Firebase database and implemented push notifications for daily goals.",
        tech: "Android Studio, Firebase Realtime Database, Java"
    };

    let tbaData =
    {
        title: "TBA",
        durationString: "",
        desc: "...",
        tech: ""
    };

    let screenWidth = screen.width;

    if (screenWidth < 768) {
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
    }
});