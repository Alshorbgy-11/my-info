let currentProject = 1;

function viewMore(projectNumber) {
    currentProject = projectNumber;
    displayProjectDetails(projectNumber);
}

function displayProjectDetails(projectNumber) {
    let projectTitle, projectDescription;

    switch (projectNumber) {
        case 1:
            projectTitle = "Project 1: Portfolio Website";
            projectDescription = "This project showcases a portfolio website built using HTML, CSS, and JavaScript.";
            break;
        case 2:
            projectTitle = "Project 2: JavaScript Game";
            projectDescription = "This project is a simple game created with JavaScript to improve interactivity and user engagement.";
            break;
        case 3:
            projectTitle = "Project 3: Responsive Design";
            projectDescription = "This project demonstrates a fully responsive website using CSS Grid and Flexbox.";
            break;
    }

    document.getElementById('popupTitle').innerText = projectTitle;
    document.getElementById('popupDescription').innerText = projectDescription;
    document.getElementById('popup').style.display = 'block';
}

function closeModal() {
    document.getElementById('popup').style.display = 'none';
}

function nextProject() {
    currentProject = (currentProject % 3) + 1;
    displayProjectDetails(currentProject);
}

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formStatus').innerText = "Message Sent Successfully!";
});