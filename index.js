

document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-button");

    if (scrollButton) {
        scrollButton.addEventListener("click", function () {
            const nextSection = document.getElementById("about-section");
            if(nextSection){
                nextSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    const homeLink = document.getElementById("home-link");
    const introSection = document.getElementById("into-to-website");

    if (homeLink && introSection) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();  
            introSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about-section");

    if (aboutLink && aboutSection) {
        aboutLink.addEventListener("click", function (event) {
            event.preventDefault();
            aboutSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const projectsLink = document.getElementById("projects-link");
    const projectsSection = document.getElementById("projects-section");

    if (projectsLink && projectsSection) {
        projectsLink.addEventListener("click", function (event) {
            event.preventDefault();
            projectsSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const contactLink = document.getElementById("contact-link");
    const contactSection = document.getElementById("contact-section");

    if (contactLink && contactSection) {
        contactLink.addEventListener("click", function (event) {
            event.preventDefault();
            contactSection.scrollIntoView({ behavior: "smooth" });
        });
    }

});