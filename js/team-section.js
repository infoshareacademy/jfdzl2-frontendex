const avatar = document.querySelectorAll('.image-container')
const teamSection = document.getElementById('team')

const isInViewport = (section) => {
    const bounding = section.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

 const animateAvatars = () => {
    window.addEventListener('scroll', () => {
        if (isInViewport(teamSection)) {
            for (let i = 0; i < avatar.length; i++) {
                avatar[i].classList.add('animated', 'rubberBand')
            }
        }
    }, false);
}

animateAvatars();
