var role = "Web Developer";
var skills = ["JavaScript", "Java", "jQuery", "HTML", "CSS3", "Bootstrap", "AngularJS", "NodeJS"];
var welcomeMsg = "Welcome to my resume";

var bio = {
    "name": "Josh Panka",
    "role": role,
    "contacts": {
        "mobile": "608-412-2698",
        "email": "josh.panka@gmail.com",
        "github": "joshpanka",
        "location": "Milwaukee, WI"
    },
    "welcomeMessage": welcomeMsg,
    "skills": skills,
    "biopic": "images/biopic.jpg",
    "display": function(){
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

        $("#topContacts").append(formattedMobile);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGithub);
        $("#topContacts").append(formattedLocation);

        $("#footerContacts").append(formattedMobile);
        $("#footerContacts").append(formattedEmail);
        $("#footerContacts").append(formattedGithub);
        $("#footerContacts").append(formattedLocation);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").append(formattedImage);
        $("#header").append(formattedWelcomeMsg);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        var skills = bio.skills;
        if(skills.length > 0){
            $("#header").append(HTMLskillsStart);

            for(skill in skills){
                var formattedSkill = HTMLskills.replace("%data%", skills[skill]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var projects = {
    "projects": [{
            "title": "Portfolio",
            "date": "April 2016 - May 2016",
            "description": "Project built utilizing Bootstrap and HTML5 to use as a location for displaying projects that I have built.\
              Built with the idea of mobile first development in mind the page was made to be scalable and fit any browser size elegantly.",
            "images": ["images/portfolio_x1.jpg", "images/portfolio_modal_x1.jpg"]
        }
    ],
    "display": function(){
        $("#projects").append(HTMLprojectStart);
        for(project in projects.projects){
            var currProj = projects.projects[project];

            var formattedProjTitle = HTMLprojectTitle.replace("%data%", currProj.title);
            var formattedProjDate = HTMLprojectDates.replace("%data%", currProj.date);
            var formattedProjDesc = HTMLprojectDescription.replace("%data%", currProj.description);

            $(".project-entry:last").append(formattedProjTitle);
            $(".project-entry:last").append(formattedProjDate);
            $(".project-entry:last").append(formattedProjDesc);

            for(image in currProj.images){
                var formattedProjImg = HTMLprojectImage.replace("%data%", currProj.images[image]);
                $(".project-entry:last").append(formattedProjImg);
            }
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "GE Healthcare",
            "title": "Software Engineer",
            "location": "Waukesha, WI",
            "dates": "July 2015 - Curr",
            "description": "<ul class='work-description'> \
                                <li>Implemented a cookie injection verification tool using Shell, Javascript, HTML, Java and C</li>\
                                <li>Formatted MR System Apache servers and Firefox browsers to be compliant with Department of Defense (DoD) Guidelines</li>\
                                <li>Created 248 test scripts using Python and Javascript to verify system compliance with DoD Guidelines</li>\
                                <li>Received Scrum Master certification</li><li>Serve as assistant campus recruiter. Performing or aiding 9 interviews in 2015</li>\
                            </ul>",
            "url": "http://www.gehealthcare.com"
        },
        {
            "title": "Research Assistant",
            "employer": "Marquette University",
            "location": "Milwaukee, WI",
            "dates": "December 2014 - May 2015",
            "description": "<ul class='work-description'>\
                                <li>Participated in NSF’s Innovation Corps</li>\
                                <li>Utilized the lean startup methodology in an attempt to bring low-cost robotics to K-12 students throughout the United States</li>\
                                <li>Created a robotic vision algorithm using C and OpenCV for Team MU-L8’s trip to RoboCup 2015</li>\
                            </ul>",
            "url": "http://www.eng.mu.edu/abwilliams/heirlab/"
        },
        {
            "employer": "GE Healthcare",
            "title": "Software Engineer Intern",
            "location": "Waukesha, WI",
            "dates": "May 2014 - August 2014",
            "description": "<ul class='work-description'>\
                                <li>Developed a data dashboard using HTML, CSS and JavaScript for relevant GE teams to monitor server status</li>\
                                <li>Created test documentation and automated JUnit test cases</li>\
                            </ul>",
            "url": "http://www.gehealthcare.com"
        },
        {
            "employer": "GE Healthcare",
            "title": "Software Engineer Intern",
            "location": "Waukesha, WI",
            "dates": "May 2013 - August 2013",
            "description": "<ul class='work-description'>\
                                <li>Designed/developed an online mobile app store using HTML, CSS and JavaScript for GE’s field engineers to download job relevant applications</li>\
                                <li>Fulfilled iPhone/iPad orders for GE Healthcare’s 2,000+ field engineers</li>\
                            </ul>",
            "url": "http://www.gehealthcare.com"
        }
    ],
    "display": function(){
        var jobs = work.jobs;
        for(job in jobs){
            var myEmployer = HTMLworkEmployer.replace("%data%", jobs[job].employer);
                myEmployer = myEmployer.replace("#", jobs[job].url);

            var myTitle = HTMLworkTitle.replace("%data%", jobs[job].title);

            var myDates = HTMLworkDates.replace("%data%", jobs[job].dates);
            var myLocation = HTMLworkLocation.replace("%data%", jobs[job].location);
            var myDesc = HTMLworkDescription.replace("%data%", jobs[job].description);

            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(myEmployer + " " + myTitle);
            $(".work-entry:last").append(myDates);
            $(".work-entry:last").append(myLocation);
            $(".work-entry:last").append(myDesc);
        }
    }
};

var education = {
    "schools": [{
        "name": "Marquette University",
        "location": "Miwaukee, WI",
        "degree": "Bachelors of Science",
        "majors": ["Computer Engineering"],
        "dates": "2010-2014",
        "url": "http://www.mu.edu/"
    }],
    "onlineCourses": [{
        "title": "Front-End Web Developer",
        "school": "Udacity",
        "dates": "April 2016 - Curr",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
    "display": function(){
        var schools = education.schools;
        for(school in schools){
            var mySchoolName = HTMLschoolName.replace("%data%", schools[school].name);
                mySchoolName = mySchoolName.replace("#", schools[school].url);
            var mySchoolDegree = HTMLschoolDegree.replace("%data%", schools[school].degree);
            var mySchoolDates = HTMLschoolDates.replace("%data%", schools[school].dates);
            var mySchoolLocation = HTMLschoolLocation.replace("%data%", schools[school].location);


            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(mySchoolName + " " + mySchoolDegree);
            $(".education-entry:last").append(mySchoolDates);
            $(".education-entry:last").append(mySchoolLocation);

            for(major in schools[school].majors){
                var mySchoolMajor = HTMLschoolMajor.replace("%data%", schools[school].majors[major]);
                $(".education-entry:last").append(mySchoolMajor);
            }


        }

        $("#education").append(HTMLonlineDegrees);
        var onlineCourses = education.onlineCourses;
        for(onlineCourse in onlineCourses){
            var myOnlineTitle = HTMLonlineTitle.replace("%data%", onlineCourses[onlineCourse].title);
                myOnlineTitle = myOnlineTitle.replace("#", onlineCourses[onlineCourse].url);
            var myOnlineSchool = HTMLonlineSchool.replace("%data%", onlineCourses[onlineCourse].school);
            var myOnlineDates = HTMLonlineDates.replace("%data%", onlineCourses[onlineCourse].dates);
            var myOnlineURL = HTMLonlineURL.replace(/(%data%|#)/g, onlineCourses[onlineCourse].url);

            $("#education").append(HTMLschoolStart);
            $(".education-entry:last").append(myOnlineTitle + " " + myOnlineSchool);
            $(".education-entry:last").append(myOnlineDates);
            $(".education-entry:last").append(myOnlineURL);
        }
    }
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);

