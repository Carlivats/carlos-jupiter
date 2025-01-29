// Select the body element and create a footer
const body = document.querySelector("body");

const footer = document.createElement("footer");
body.appendChild(footer); // Append footer to the body

// Create a new Date object and get the current year
const today = new Date();
const thisYear = today.getFullYear();

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
  const skillItem = document.createElement("li");
  skillItem.textContent = skill;
  skillsList.appendChild(skillItem);
});

document.addEventListener('DOMContentLoaded', () => {

  // Form Submit Handler
  const messageForm = document.forms.leave_message;
  messageForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page refresh

    // Retrieve form data
    const usersName = event.target.usersName.value;
    const usersEmail = event.target.usersEmail.value;
    const usersMessage = event.target.usersMessage.value;

    // Log form values
    console.log("Name:", usersName, "Email:", usersEmail, "Message:", usersMessage);
    
    // Add message to the list
    const messageSection = document.getElementById("Messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    // Add user details and message
    newMessage.innerHTML = `
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>: ${usersMessage}</span>
  `;

    // Add remove button
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
      const entry = this.parentNode;
      messageList.removeChild(entry);

      // Optional: Hide messages section if empty
      if (!messageList.hasChildNodes()) {
        messageSection.style.display = "none";
      }
    });

    // Append remove button to message
    newMessage.appendChild(removeButton);

    // Append new message to the list
    messageList.appendChild(newMessage);

    // Optional: Show messages section if hidden
    messageSection.style.display = "block";

    // Reset the form
    messageForm.reset();
  });
});

