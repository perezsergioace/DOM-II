// Your code goes here

// mouseover
// mouse over the bus image and make it pop out
const busImg = document.querySelector("body > div > header > img");

busImg.addEventListener("mouseenter", () => {
    busImg.style.transform = "scale(1.1)";
    busImg.style.transition = "all 0.2s";
})

busImg.addEventListener("mouseleave", () => {
    busImg.style.transform = "scale(1)";
    busImg.style.transition = "all 0.2s";
})

// keydown
//Press the Shift and Z key to get an alert
window.addEventListener("keydown", (e) => {
    if (e.code == 'KeyZ' && (e.shiftKey)){
        alert('You just pressed the Shift & Z Key!')
    }
});





// wheel
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    el.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const el = document.querySelector('body > div > section:nth-child(2) > div.img-content > img');
  el.onwheel = zoom;




// drag / drop

const boatImg = document.querySelector("body > div > section.content-section.inverse-content > div.img-content > img");

boatImg.onmousedown = function(event) {
    boatImg.style.position = 'absolute';
    boatImg.style.zIndex = 1000;
    document.body.append(boatImg);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        boatImg.style.left = pageX - boatImg.offsetWidth / 2 + 'px';
        boatImg.style.top = pageY - boatImg.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
      }

      document.addEventListener('mousemove', onMouseMove);

      boatImg.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        boatImg.onmouseup = null;
    }
}

boatImg.ondragstart = function() {
    return false;
  };





// load

window.addEventListener("load", () => {
    alert("Loaded!");
});






// focus





// resize
const body = document.querySelector("body");

window.addEventListener('resize', () => {
    body.style.backgroundColor = "#d9efdb";
});



// scroll
window.addEventListener("scroll", () => {
    body.style.backgroundColor = "#efdeed";
});





// select
// const seaBoatImg = document.querySelector("body > div > section.content-pick > div:nth-child(1) > h4");
// console.log(seaBoatImg);

// seaBoatImg.addEventListener("select", () => {
//     console.log("Hi");
// });





// dblclick
const doubleClick = document.querySelector("body > header > div > h1");
console.log(doubleClick);

doubleClick.addEventListener("dblclick", () => {
    doubleClick.textContent = "This Logo got changed!";
});




const stopLink = document.querySelector(".nav");

stopLink.addEventListener("click", (e) => {
    console.log("stopped the link");
    e.preventDefault();
});
