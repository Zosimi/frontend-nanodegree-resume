
//BIO

var bio = {
	"name" : "Sandra Lindahl",
	"role" : "Games Analyst",
	"contacts" : {
		"mobile" : "+44 7721 395051",
		"email" : "sandralindahl@gmail.com",
		"github" : "Zosimi",
		"twitter" : "MyTwitter",
		"location" : "Gothenburg"
	},
	"welcomeMessage" : "Welcome to my resume",
	"skills" : [
		"Interaction Design",
		"HTML",
		"CSS",
		"Javascript",
		"Git",
		"Games analyses"
	],
	"biopic" : "images/me.jpg",
	display : function (){

		//Adding Name and Title
		var formattedName = HTMLheaderName.replace ("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace ("%data%", bio.role);
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);


		//Adding top contact details
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedTwitter);
		$("#topContacts").append(formattedLocation);

		//Adding footer contacts
		var formattedMobile = formattedMobile.replace("gray-text", "white-text");
		var formattedEmail = formattedEmail.replace("gray-text", "white-text");
		var formattedGithub = formattedGithub.replace("gray-text", "white-text");
		var formattedTwitter = formattedTwitter.replace("gray-text", "white-text");
		var formattedLocation = formattedLocation.replace("gray-text", "white-text");
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedTwitter);
		$("#footerContacts").append(formattedLocation);

		//Adding profile picture
		var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedPicture);

		//Adding welcome message
		var formattedMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedMessage);

		//Adding skills
		if(bio.skills.length > 0){
			$("#header").append(HTMLskillsStart);

			for (var i = 0; i < bio.skills.length; i++){
				$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
			}
		}
	}
}


bio.display();


//--------------------------------------------------

//WORK

var work = {
		"jobs" : [
		{
			"employer" : "Origin Ltd",
			"title" : "IP Analyst",
			"location" : "London",
			"dates" : "November 2012 - Present",
			"description" : "Responsibilities include analysing and identifying ideas and expressions in innovative, technology driven products, including game interfaces, mobile interfaces and other creative products within IP."
		},
		{
			"employer" : "Guestlist",
			"title" : "Front End Developer Intern",
			"location" : "London",
			"dates" : "October 2012 - November 2012",
			"description" : "Responsibilities included the development of a new company website. Work mainly consisted of HTML, CSS and Javascript."
		}
	],
	display : function(){

		var urls = ["http://www.origin.co.uk", "http://guestlist.net/"]
		for(job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			//Adding employer and work title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			formattedEmployer = formattedEmployer.replace("#", urls[job]);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
			$(".work-entry:last").append(formattedEmployer + formattedTitle);

			//Adding dates and location
			var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedDate);
			$(".work-entry:last").append(formattedLocation);

			//Adding description
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

work.display();


//--------------------------------------------------

//PROJECTS

var projects = {
	"projects" : [
		{
			"title" : "Project 1",
			"dates" : "March 2015",
			"description" : "From mockup to HTML and CSS",
			"images" : ["images/p1-small.png", "images/p1-small.png"]
		},
		{
			"title" : "Project 2",
			"dates" : "April 2015",
			"description" : "Interactive Resume",
			"images" : ["images/p2-1.jpg", "images/p2-2.jpg"]
		}
	],
	display : function(){
		for(project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			//Adding project title
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
			$(".project-entry:last").append(formattedTitle);

			//Adding date
			var formattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
			$(".project-entry:last").append(formattedDate);

			//Adding project description
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

			//Adding project images
			for(image in projects.projects[project].images){
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();


//--------------------------------------------------

//EDUCATION

var education = {
"schools": [
		{
			"name" : "Gothenburg University",
			"location" : "Gothenburg",
			"degree" : "Bsc in Computer Science",
			"majors" : ["Computer Science", " Interaction design"],
			"dates" : 2012,
			"url" : "http://www.gu.se/english"
		},
		{
			"name" : "Chalmers University",
			"location" : "Gothenburg",
			"degree" : "Foundation Year",
			"majors" : ["Maths", " Chemistry", " Physics"],
			"dates" : 2012,
			"url" : "http://www.chalmers.se/en/education/studying-at-Chalmers/Pages/the-academic-year.aspx"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Greek for Beginners",
			"school" : "Umeå University",
			"date" : 2010,
			"url" : "http://www.umu.se/english/"
		},
		{
			"title" : "3D Graphics",
			"school" : "Gotland University",
			"date" : 2010,
			"url" : "http://www.uu.se/en/"
		}
	],
	display : function(){

		//Adding schools
		for(school in education.schools){
			$("#education").append(HTMLschoolStart);

			//Adding school and type of degree
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
			formattedSchoolName = formattedSchoolName.replace("#", education.schools[school].url);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);


			$(".education-entry:last").append(formattedSchoolName + formattedDegree);

			//Adding date
			var formattedDate = HTMLschoolDates.replace("%data%", education.schools[school].dates);
			$(".education-entry:last").append(formattedDate);

			//Adding location
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			$(".education-entry:last").append(formattedLocation);

			//Adding major
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
			$(".education-entry:last").append(formattedMajor);
		}

		//Adding online courses title
		$("#education").append(HTMLonlineClasses);

		//Adding online courses
		for(course in education.onlineCourses){
			$("#education").append(HTMLschoolStart);

			//Adding class title and school for online course
			var formattedClassName = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
			formattedClassName = formattedClassName.replace("#", education.onlineCourses[course].url);
			var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
			$(".education-entry:last").append(formattedClassName + formattedSchool);

			//Adding date
			var formattedDate = HTMLonlineDates.replace("%data%", education.onlineCourses[course].date);
			$(".education-entry:last").append(formattedDate);

			//Adding URL
			var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
			formattedUrl = formattedUrl.replace("#", education.onlineCourses[course].url);
			$(".education-entry:last").append(formattedUrl);
		}
	}
}

education.display();


//--------------------------------------------------

//MAP

function displayMap(){
	$("#mapDiv").append(googleMap);
}

displayMap();


//--------------------------------------------------

//BUTTON

//$("#main").prepend(internationalizeButton);






