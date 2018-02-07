/*
Your code to build the resume will go here.
*/

let name = "Jose Gutierrez";
let role = "Software Developer";

let formattedName = HTMLheaderName.replace("%data%", name);
let formattedRole = HTMLheaderRole.replace("%data%", role);

// TODO: play with .prepend and indvidual calls once more content is added
$("#header").prepend(formattedName, formattedRole);

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

var education = {
  "schools": [{
    "name": "Blue Ridge Community College",
    "location": "Flat Rock",
    "majors": ["Associate's in Science"],
    "degreeDates": "2011",
    "url": ""
  }, {
    "name": "NCSU",
    "location": "Raleigh",
    "majors": ["Computer Science"],
    "degreeDates": "2014",
    "url": ""
  }],
  "onlineCourses": [ {
    "title": "FEND",
    "school": "Udacity",
    "dates": "February 2018",
    "url": "https://udacity.com"
  } ]
}
