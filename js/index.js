// Your code goes here

//doubleclick
const doubleClick = document.querySelector('.intro img');
doubleClick.addEventListener('dblclick', function() {
doubleClick.src = 'img/destination.jpg';
})

//resize
const resize = document.querySelector('.content-destination img');
window.addEventListener('resize', function(){
    resize.src = 'img/fun-bus.jpg';
})

//mouseover
const subs4 = document.querySelectorAll('h4');
subs4.forEach((object)=> {
    object.addEventListener('mouseover', (object) => { 
        object.style.textDecoration = "underline";
    });
});

//mouseout
subs4.forEach((object)=> {
   object.addEventListener('mouseout', (object) => {
       object.style.textDecoration = "none";
   });
});


//keydown
const keyDown = document.querySelector('.intro img');
keyDown.addEventListener('keydown', function(){
   alert('hello');
})

//scroll    
const scroll = document.querySelector('.content-destination img');
wheel.addEventListener('scroll', function(){
    scroll.style.backgroundColor = 'orange';
})
const dragAndDrop = document.querySelector('');
const load = document.querySelector('');
const focus = document.querySelector('');
const wheel = document.querySelector('');
const select = document.querySelector('');

