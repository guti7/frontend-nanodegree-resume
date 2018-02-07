/*
Your code to build the resume will go here.
*/
var bio = {
  "name": "Jose Gutierrez",
  "role": "Software Developer",
  "welcomeMessage": "Amassing all the knowledge",
  "biopic": "",
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
    "employer": "",
    "title": "",
    "location": "",
    "dates": "",
    "description": ""
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

if (bio.skills && bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", "Skills: " + bio.skills.join(", "));
  $("#skills").append(formattedSkills);
}
