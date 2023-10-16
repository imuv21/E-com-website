const links = document.querySelectorAll('.underline');

links.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default link behavior
        links.forEach(otherLink => {
            if (otherLink !== link) {
                otherLink.classList.remove('active'); // Remove the 'active' class from other links
            }
        });
        link.classList.toggle('active'); // Toggle the 'active' class on the clicked link
    });
});