// const flippedAvatar = document.querySelectorAll('.front')
// const teamSection = document.getElementById('team')

// const isInViewport = function (section) {
//         // const bounding = section.getBoundingClientRect();
//         // return (bounding.top >= 0 && bounding.left >= 0 && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) && bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
//         // );
//         var top = section.offsetTop;
//   var left = section.offsetLeft;
//   var width = section.offsetWidth;
//   var height = section.offsetHeight;

//   while(section.offsetParent) {
//     section = section.offsetParent;
//     top += section.offsetTop;
//     left += section.offsetLeft;
//   }

//   return (
//     top >= window.pageYOffset &&
//     left >= window.pageXOffset &&
//     (top + height) <= (window.pageYOffset + window.innerHeight) &&
//     (left + width) <= (window.pageXOffset + window.innerWidth)
//   );
//     };

//     for (let i = 0; i < flippedAvatar.length; i++){
//         if (isInViewport(teamSection)) {
//         flippedAvatar[i].classList.add('animated')
//     } else if (!isInViewport(teamSection)){
//         flippedAvatar[i].classList.remove('animated')
//     }
// }

