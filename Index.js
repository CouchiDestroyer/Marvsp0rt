    // Select all navigation links
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default anchor click behavior
            const targetId = this.getAttribute('href'); // Get the target section ID
            const targetSection = document.querySelector(targetId); // Select the target section

            // Smoothly scroll to the section with animation
            targetSection.scrollIntoView({
                behavior: 'smooth', // Smooth scroll effect
                block: 'start' // Align to the top of the section
            });

            // Add animation class
            targetSection.classList.add('animate');

            // Remove animation class after animation ends
            targetSection.addEventListener('animationend', () => {
                targetSection.classList.remove('animate');
            });
        });
    });

