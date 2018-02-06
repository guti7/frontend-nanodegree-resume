/*
Your code to build the resume will go here.
 */

 let name = "Jose Gutierrez";
 let role = "Software Developer";

 let formattedName = HTMLheaderName.replace("%data%", name);
 let formattedRole = HTMLheaderRole.replace("%data%", role);

// TODO: play with .prepend and indvidual calls once more content is added
 $("#header").prepend(formattedName, formattedRole);
