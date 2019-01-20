const flippedAvatar = document.querySelectorAll('.flip-avatar')

    // for (let i = 0; i < flippedAvatar.length; i++){
    //     // flippedAvatar[i].classList.toggle('animated')
    // }


   
  
    // console.log(bounding)

    const isInViewport = function (section) {
        const bounding = section.getBoundingClientRect();
        return (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const teamSection = document.getElementById('team')


    for (let i = 0; i < flippedAvatar.length; i++){
        if (isInViewport(teamSection)) {
        flippedAvatar[i].classList.toggle('animated')
    }
}