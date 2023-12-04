// Get all links with the hash (#) in the href attribute
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Listen for click events
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the target element by its ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 90; 

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});
