document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-side section');
    const gifDisplay = document.getElementById('dynamicGif');

    function updateGifForVisibleSection() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            const halfWindowHeight = window.innerHeight / 2;

            if (sectionTop < halfWindowHeight && sectionBottom > halfWindowHeight) {
                const gifMap = {
                    'introduction': 'intro.gif',
                    'fileupload': 'fileupload.gif',
                    'audit-stage': 'auditor.gif',
                    'critic': 'critic.gif',
                    'conclusion': 'citation.gif',
                    'citation': 'citation.gif'
                };
                const newGifSrc = gifMap[section.id] || 'intro.gif'; // Fallback to intro.gif if no match
                if (gifDisplay.src !== newGifSrc) {
                    gifDisplay.src = newGifSrc;
                    gifDisplay.style.opacity = 0;
                    setTimeout(() => { gifDisplay.style.opacity = 1; }, 300); // Fade-in effect
                }
            }
        });
    }

    document.querySelector('.content-side').addEventListener('scroll', updateGifForVisibleSection);
    updateGifForVisibleSection(); // Call initially to set the correct GIF on load
});
