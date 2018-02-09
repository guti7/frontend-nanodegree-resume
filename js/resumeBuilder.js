/*
Your code to build the resume will go here.
*/
var bio = {
  "name": "Jose Gutierrez",
  "role": "Software Developer",
  "welcomeMessage": "Amassing all the knowledge.",
  "biopic": "images/fry.jpg",
  "contacts": {
    "mobile": "###-###-####",
    "email": "email@email.com",
    "github": "guti7",
    "location": "Seattle, WA"
  },
  "skills": [
    "Git",
    "GitHub",
    "HTML",
    "CSS",
    "JavaScript"
  ]
};
// TODO: url strings for project images
var work = {
  "jobs": [{
    "employer": "Hats inc.",
    "title": "Owner",
    "location": "Bellevue, WA",
    "dates": "February 2018",
    "description": "All kinds of hats."
  }, {
    "employer": "Furious Games",
    "title": "Game Developer",
    "location": "San Francisco, CA",
    "dates": "February 2018",
    "description": "Developer of video games"
  }]
};
var projects = {
  "projects": [{
    "title": "Portfolio Site",
    "dates": "January 2018",
    "description": "Personal Portfolio site",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }, {
    "title": "Online Resume",
    "dates": "February 2018",
    "description": "Online resume site",
    "images": ["images/197x148.gif", "images/197x148.gif", "images/197x148.gif"]
  }]
};
var education = {
  "schools": [{
    "name": "BRCC",
    "location": "Flat Rock, NC",
    "degree": "A.S.",
    "majors": ["General Studies"],
    "dates": "2011",
    "url": ""
  }, {
    "name": "NCSU",
    "location": "Raleigh, NC",
    "degree": "B.S.",
    "majors": ["Computer Science"],
    "dates": "2014",
    "url": ""
  }],
  "onlineCourses": [{
    "title": "FEND",
    "school": "Udacity",
    "dates": "January, 2018",
    "url": "udacity.com"
  }, {
    "title": "Become an iOS Developer",
    "school": "Udacity",
    "dates": "March 2018",
    "url": "udacity.com"
  }]
};

bio.displayName = function () {
  let formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
}

bio.displayRole = function () {
  let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
}

bio.displayContacts = function (tagID) {
  if (bio.contacts) {
    var contacts = bio.contacts;
    for (key in contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
      formattedContact = formattedContact.replace("%data%", contacts[key]);
      $(tagID).append(formattedContact);
    }
  }
}

bio.displayPic = function () {
  if (bio.hasOwnProperty("biopic")) {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
  }
}

bio.displayWelcomeMessage = function () {
  if (bio.hasOwnProperty("welcomeMessage")) {
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
  }
}

bio.displaySkills = function () {
  if (bio.skills && bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skills = bio.skills;
    skills.forEach(function(skill) {
      var formattedSkills = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkills);
    });
  }
}

work.display = function () {
  if (work.jobs) {
    var jobs = work.jobs;
    jobs.forEach(function(job) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
      var formattedDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
      var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;
      $(".work-entry:last").append(formattedJob);
    });
  }
}

projects.displayImages = function (assignment) {
  var images = assignment.images;
  images.forEach(function(imageSRC) {
    var formattedImage = HTMLprojectImage.replace("%data%", imageSRC);
    $(".project-entry:last").append(formattedImage);
  });
}

projects.display = function () {
  if (projects.projects) {
    var assignments = projects.projects;
    assignments.forEach(function(assignment) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", assignment.title);
      var formattedDates = HTMLprojectDates.replace("%data%", assignment.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", assignment.description);
      var formattedProject = formattedTitle + formattedDates + formattedDescription;
      $(".project-entry:last").append(formattedProject);
      projects.displayImages(assignment);
    });
  }
}

education.displaySchools = function () {
  if (education.schools) {
    var schools = education.schools;
    schools.forEach(function(school) {
      $("#education").append(HTMLschoolStart);
      var formattedName = HTMLschoolName.replace("%data%", school.name);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
      var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
      var formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
      $(".education-entry:last").append(formattedSchool);
    });
  }
}

education.displayOnlineCourses = function () {
  if (education.onlineCourses) {
    $("#education").append(HTMLonlineClasses);
    var courses = education.onlineCourses;
    courses.forEach(function(course) {
      $("#education").append(HTMLschoolStart);
      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      var formattedURL = HTMLonlineURL.replace("%data%", course.url);
      var formattedOnlineCourse = formattedTitle + formattedSchool + formattedDates + formattedURL;
      $(".education-entry:last").append(formattedOnlineCourse);
    });
  }
}

education.display = function () {
  education.displaySchools();
  education.displayOnlineCourses();
}

function addInternationalizeButton() {
  $("#main").append(internationalizeButton);
}
function displayGoogleMap() {
  $("#mapDiv").append(googleMap);
}

function displayFooterContacts() {
  bio.displayContacts("#footerContacts");
}

bio.display = function () {
  bio.displayRole();
  bio.displayName();
  bio.displayContacts("#topContacts");
  bio.displayPic();
  bio.displayWelcomeMessage();
  bio.displaySkills();
}

bio.display();
work.display();
projects.display();
education.display();
addInternationalizeButton();
displayGoogleMap();
displayFooterContacts();
