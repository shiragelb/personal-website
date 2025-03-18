

document.addEventListener("DOMContentLoaded", function () {

    // a functionality of fading and show in the beginin of the page
    document.body.classList.add("is-preload"); // Add is-preload class

    const heading = document.querySelector("h1.text-body-emphasis-1");

    if (heading) {
        if(localStorage.getItem('headingShown') !== 'true'){
            setTimeout(function () {
                heading.classList.add("show");
                localStorage.setItem('headingShown', 'true');
            }, 500);
        } else {
            heading.classList.add("show");
        }
    }

    window.addEventListener("load", function(){
        document.body.classList.remove("is-preload"); //remove is preload class
    });

  
    const homeLink = document.getElementById("home-link");
    const introSection = document.getElementById("into-to-website");

    if (homeLink && introSection) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault();  
            introSection.scrollIntoView({ behavior: "smooth" });
        });
    }

    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        const introBottom = introSection.getBoundingClientRect().bottom;

        if (introBottom <= 0) {
            header.classList.add("sticky"); // Make header sticky
        } else {
            header.classList.remove("sticky"); // Remove sticky effect
        }
    });

    //linking "continue" bottun
    
    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about-section");
 
    const scrollButton = document.getElementById("scroll-button");

    if (scrollButton&& aboutSection) {
        scrollButton.addEventListener("click", function (event) {
                event.preventDefault();
                aboutSection.scrollIntoView({ behavior: "smooth" , block: "start" });
        });
    }



    //linking all the buttoms to their sections
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

