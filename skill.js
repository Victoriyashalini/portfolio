document.addEventListener('DOMContentLoaded', function () {
    const skillsGrid = document.getElementById('skillsGrid');
    const skills = document.querySelectorAll('.skill');
    
    function isElementInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function animateSkills() {
        skills.forEach((skill, index) => {
            setTimeout(() => {
                skill.style.opacity = '1';
                skill.style.transform = 'translateX(0)';
            }, index * 200);
        });
    }

    function handleScroll() {
        if (isElementInViewport(skillsGrid)) {
            animateSkills();
            window.removeEventListener('scroll', handleScroll); 
        }
    }

    window.addEventListener('scroll', handleScroll);
});
