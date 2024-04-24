document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-side section');
    const gifDisplay = document.getElementById('dynamicGif');

    document.querySelector('.content-side').addEventListener('scroll', function() {
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight / 2 && section.getBoundingClientRect().bottom > window.innerHeight / 2) {
                let gifSrc = '';
                switch(section.id) {
                    case 'introduction':
                        gifSrc = 'intro.gif';
                        break;
                    case 'fileupload':
                        gifSrc = 'fileupload.gif';
                        break;
                    case 'audit-stage':
                        gifSrc = 'auditor.gif';
                        break;
                    case 'critic':
                        gifSrc = 'critic.gif';
                        break;
                    case 'conclusion':
                        gifSrc = 'citation.gif';
                        break;
                    case 'citation':
                        gifSrc = 'citation.gif';
                        break;
                }
                gifDisplay.src = gifSrc;
                gifDisplay.style.opacity = 0;
                setTimeout(() => { gifDisplay.style.opacity = 1; }, 300); // Fade-in effect
            }
        });
    });
});
