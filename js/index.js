// Select the body element and create a footer
const body = document.querySelector("body");

const footer = document.createElement("footer");
body.appendChild(footer); // Append footer to the body

// Create a new Date object and get the current year
const today = new Date();
const thisYear = today.getFullYear(); // Automatically gets the current year

// Create a paragraph element and set its content
const copyright = document.createElement("p");
copyright.innerHTML = `Carlos Vasquez &copy; ${thisYear}`; // Include the © symbol

// Append the paragraph to the footer
footer.appendChild(copyright);

// Create an array of your technical skills
const skills = ["JavaScript", "HTML", "CSS", "GitHub", "Machine Learning", "Python"];

// Select the skills section and the unordered list inside it
const skillsSection = document.querySelector("#Skills");
const skillsList = skillsSection.querySelector("ul");

// Loop through the array and add each skill as a list item
skills.forEach((skill) => {
  const skillItem = document.createElement("li"); // Create a list item
  skillItem.textContent = skill; // Set the text content to the skill name
  skillsList.appendChild(skillItem); // Append the list item to the skills list
});
