document.addEventListener('DOMContentLoaded', () => {
    const myObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },

    );

    const elements = document.querySelectorAll('.fadeInElement');
    const elementsL = document.querySelectorAll('.fadeInLeft');
    const elementsB = document.querySelectorAll('.fadeInBottom');

    elements.forEach((element) => myObserver.observe(element));
    elementsL.forEach((element) => myObserver.observe(element));
    elementsB.forEach((element) => myObserver.observe(element));

});
