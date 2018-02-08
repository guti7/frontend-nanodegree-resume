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
    "location": "Emerald City"
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
var projects = {
  "projects": [{
    "title": "Portfolio Site",
    "dates": "January 2018",
    "description": "Personal Portfolio site",
    "images": []
  }, {
    "title": "Online Resume",
    "dates": "February 2018",
    "description": "Online resume site",
    "images": []
  }]
};

var work = {
  "jobs": [{
    "employer": "Hats inc.",
    "title": "Owner",
    "location": "Here",
    "dates": "February 2018",
    "description": "All kinds of hats."
  }, {
    "employer": "Furious Games",
    "title": "Game Developer",
    "location": "Bellevue",
    "dates": "February 2018",
    "description": "Developer of video games"
  }]
};

var education = {
  "schools": [{
    "name": "BRCC",
    "location": "Flat Rock",
    "degree": "A.S.",
    "majors": ["General Studies"],
    "dates": "2011",
    "url": ""
  }, {
    "name": "NCSU",
    "location": "Raleigh",
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

function displayBioName() {
  let formattedName = HTMLheaderName.replace("%data%", bio.name);
  $("#header").prepend(formattedName);
}

function displayBioRole() {
  let formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
}

function displayContacts() {
  if (bio.contacts && Object.keys(bio.contacts).length > 0) {
    var contacts = bio.contacts;
    // TODO: Replace for a different for loop?
    for (key in contacts) {
      var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
      formattedContact = formattedContact.replace("%data%", contacts[key]);
      $("#topContacts").append(formattedContact);
    }
  }
}

function displayBiopic() {
  if (bio.hasOwnProperty("biopic")) {
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBioPic);
  }
}

function displayWelcomeMessage() {
  if (bio.hasOwnProperty("welcomeMessage")) {
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);
  }
}

function displaySkills() {
  if (bio.skills && bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var skills = bio.skills;
    skills.forEach(function(skill) {
      var formattedSkills = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkills);
    });
  }
}

function displayWork() {
  if (work.jobs && work.jobs.length > 0) {
    $("#workExperience").append(HTMLworkStart);
    var jobs = work.jobs;
    jobs.forEach(function(job) {
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

function displayProjects() {
  if (projects.projects && projects.projects.length > 0) {
    var assignments = projects.projects;
    assignments.forEach(function(assignment) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", assignment.title);
      var formattedDates = HTMLprojectDates.replace("%data%", assignment.dates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", assignment.description);
      var formattedImages = HTMLprojectImage.replace("%data%", assignment.images);
      var formattedProject = formattedTitle + formattedDates + formattedDescription + formattedImages;
      $(".project-entry:last").append(formattedProject);
    });
  }
}

function displaySchools() {
  if (education.schools && education.schools.length > 0) {
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

function displayOnlineCourses() {
  if (education.onlineCourses && education.onlineCourses.length > 0) {
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

function displayEducation() {
  displaySchools();
  displayOnlineCourses();
}

function displayHeader() {
  displayBioRole();
  displayBioName();
  displayContacts();
  displayBiopic();
  displayWelcomeMessage();
  displaySkills();
}

displayHeader();
displayWork();
displayProjects();
displayEducation();
