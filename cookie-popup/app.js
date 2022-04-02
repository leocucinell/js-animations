//SECTION: This is a basic gsap.to function
// gsap.to('.cookie', {y: 20, duration: 1})

//SECTION: This code brings the popup from the top of the screen. Then hides away when the user clicks okay
// const popupCard = document.getElementById("cookie-card").offsetHeight

// const topOfScreen = window.innerHeight / 2 + 160

// gsap.fromTo('.cookie-container', {y: -topOfScreen}, {y: -topOfScreen + 300, duration: 2.5, ease: "elastic.out(1, 0.3)"});

// //Add the event listener to the cookie button
// document.getElementById("cookie-popup-btn").addEventListener("click", function(){
//     //animate the elemnt leaving the screen
//     gsap.fromTo('.cookie-container', {}, {y: -topOfScreen});
//     //remove the element from the dom
//     setTimeout(function(){
//         const popup = document.getElementById("cookie-card");
//         popup.parentNode.removeChild(popup);
//     }, 2000);
// });

//SECTION: This is a gsap timeline used for stringing together animations
const tl = gsap.timeline({defaults: {duration: 0.75, ease: 'power1.out'}});

tl.fromTo('.cookie-container', {scale: 0}, {scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.5}); //this scales the size of the card from 0 -> 1. also using an ease effect 
tl.fromTo('.cookie', {opacity: 0, x: -40, rotation: '-45deg'}, {opacity: 1, x: 0, rotation: '0deg'}, '<50%'); //50% into the above runs, this changes the opacity from 0 -> 1
tl.fromTo('.text', {x: 30, opacity: 0}, {x: 0, opacity: 1}, '<') //Due to the '<' at the end, this animation step runs at the same time as the previous tl animation

//Cookie/Crumb loop animation
tl.fromTo('.cookie', {y: 0, rotation: '0deg'}, {y: -15, rotation: "-20deg", yoyo: true, repeat: -1}) //yoyo = kind of ease path (kindof), repeat = # times to repeat (-1 = INF)
tl.fromTo('#Crumbs', {y: 0}, {y: -10, yoyo: true, repeat: -1}, '<')

//event listener for button
document.getElementById("cookie-popup-btn").addEventListener("click", function(){
    gsap.to('.cookie-container', {opacity: 0, y: -100, duration: 0.5, ease: "power1.out"});
})