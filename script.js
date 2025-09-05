document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentViews = document.querySelectorAll('.content-view');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const targetId = link.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            
            navLinks.forEach(nav => nav.classList.remove('active'));
            contentViews.forEach(view => view.classList.remove('active'));

            link.classList.add('active');
            targetContent.classList.add('active');
        });
    });
});
