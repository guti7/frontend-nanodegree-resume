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
    "name": "Blue Ridge Community College",
    "location": "Flat Rock",
    "majors": ["Associate's in Science"],
    "dates": "2011",
    "url": ""
  }, {
    "name": "NCSU",
    "location": "Raleigh",
    "majors": ["Computer Science"],
    "dates": "2014",
    "url": ""
  }],
  "onlineCourses": [{
    "title": "FEND",
    "school": "Udacity",
    "dates": "2018",
    "url": "https://udacity.com"
  }]
};

let formattedName = HTMLheaderName.replace("%data%", bio.name);
let formattedRole = HTMLheaderRole.replace("%data%", bio.role);

$("#header").prepend(formattedName, formattedRole);

if (bio.contacts && Object.keys(bio.contacts).length > 0) {
  var contacts = bio.contacts;
  for (key in contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%contact%", key);
    formattedContact = formattedContact.replace("%data%", contacts[key]);
    $("#topContacts").append(formattedContact);
  }
}

if (bio.hasOwnProperty("biopic")) {
  var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
  $("#header").append(formattedBioPic);
}

if (bio.hasOwnProperty("welcomeMessage")) {
  var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  $("#header").append(formattedWelcomeMessage);
}

if (bio.skills && bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);

  var skills = bio.skills;
  skills.forEach(function(skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#skills").append(formattedSkills);
  });
}

if (work.jobs && work.jobs.length > 0) {
  $("#workExperience").append(HTMLworkStart);

  var jobs = work.jobs;
  jobs.forEach(function(job){
    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedJob = formattedEmployer + formattedTitle + formattedLocation + formattedDates + formattedDescription;

    $(".work-entry:last").append(formattedJob);
  });
}
