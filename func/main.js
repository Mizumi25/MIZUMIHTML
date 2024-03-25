const [red, green, blue] = [255, 255, 255];
const logo = document.querySelector("nav h1")
const section4 = document.querySelector('#section4');
const section3 = document.querySelector('#section3');
const section2 = document.querySelector('#section2');
const section1 = document.querySelector("#section1");
const section5 = document.querySelector('#section5');
const section6 = document.querySelector('#section6');
const hrList = document.querySelectorAll("#section2 hr");
const back = document.querySelector('.background-hero');


//ScrollColor
const scrollRange = 200; 
window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (window.scrollY || window.pageYOffset) / totalHeight;

    let r, g, b;

    if (scrollProgress < 0.5) {
        // Adjusted calculation to extend duration of black further
        const scrollProgressBlack = scrollProgress * 5; // Increase the multiplier to extend the duration further
        r = 255 - Math.round(255 * scrollProgressBlack);
        g = 255 - Math.round(255 * scrollProgressBlack);
        b = 255 - Math.round(255 * scrollProgressBlack);
    } else {
        // Calculation for transitioning to white remains unchanged
        const scrollProgressWhite = (scrollProgress - 0.5) * 2; 
        r = Math.round(255 * scrollProgressWhite);
        g = Math.round(255 * scrollProgressWhite);
        b = Math.round(255 * scrollProgressWhite);
    }
    logo.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    section2.style.background = `rgb(${r}, ${g}, ${b})`;
    section2.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    section3.style.background = `rgb(${r}, ${g}, ${b})`;
    section3.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    section4.style.background = `rgb(${r}, ${g}, ${b})`;
    section4.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    section5.style.background = `rgb(${r}, ${g}, ${b})`;
    section5.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    section6.style.background = `rgb(${r}, ${g}, ${b})`;
    section6.style.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    
    
    hrList.forEach(hrElement => {
    hrElement.style.background = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    });

    const section6Top = section6.offsetTop;
    if (window.scrollY > section6Top - window.innerHeight / 2) {
        section2.style.background = "white";
        section2.style.color = "black";
        section3.style.background = "white";
        section3.style.color = "black";
        section4.style.background = "white";
        section4.style.color = "black";
        section5.style.background = "white";
        section5.style.color = "black";
        section6.style.background = "white";
        section6.style.color = "black";
    }
});







//ScrollOpacity
var scroll_threshold = 1;
var scroll_threshold2 = 14;
window.addEventListener('scroll', () => {
    const y = 1 + (window.scrollY || window.pageYOffset) / scroll_threshold;
    const z = 1 + (window.scrollY || window.pageYOffset) / scroll_threshold2;

    if (y > scroll_threshold) {
        section1.style.opacity = "0";
        section2.style.opacity = "1";
        section2.style.pointerEvents = "auto";
        section3.style.opacity = "1";
        section3.style.pointerEvents = "auto";
    } else {
        logo.style.color = "white"
        section1.style.opacity = "1";
        section2.style.opacity = "0";
        section2.style.pointerEvents = "none";
        section3.style.opacity = "0";
        section3.style.pointerEvents = "none";
    }
    
    if (z > scroll_threshold2){
      section2.style.mixBlendMode = "normal"
    }
    else {
      section2.style.mixBlendMode = "screen"
    }
});





//TitleAnimation
const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};
const texts = [
    "MIZUMI",
    "KAITO",
    "Concept Artist",
    "Web Designer",
    "Author",
    "Illustrator",
    "Rigger",
    "Digital Sculptor",
    "HD-2D GameCreator",
];
const morphTime = 3;
const cooldownTime = 0.25;
let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;
elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];
function doMorph() {
    morph -= cooldown;
    cooldown = 0;
    let fraction = morph / morphTime;
    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }
    setMorph(fraction);
}
function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}
function doCooldown() {
    morph = 0;
    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";
    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}
function animate() {
    requestAnimationFrame(animate);
    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;
    cooldown -= dt;
    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }
        doMorph();
    } else {
        doCooldown();
    }
}
animate();






//ScrollToTop
function topFunction() {
  function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
      var scrollStep = Math.PI / (7 / 15);
      var cosParameter = currentScroll / 500;
      if (cosParameter < 0.5) {
        var scrollStep = Math.PI / (7 / 15) * Math.sin(cosParameter * 2);
      }
      window.scrollTo(0, currentScroll - scrollStep);
      window.requestAnimationFrame(scrollToTop);
    }
  }
  window.requestAnimationFrame(scrollToTop);
}





//musicPlayer
var stroke = document.querySelector("nav .loader .stroke");
var mySong = document.querySelector("#mySong");
      var icon = document.querySelector("#icon");
      mySong.play();
      icon.onclick = function(){
        if(mySong.paused){
          mySong.play();
          stroke.style.animation = "sound 1.2s linear infinite";
        }else {
          mySong.pause();
          stroke.style.animation = "none";
        }
      }



//back-to-top
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollEndPos = bodyHeight - windowHeight;
  const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

  backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add("show");
  } else {
    backTopBtn.classList.remove("show");
  }
  if (totalScrollPercent > 91) {
    backTopBtn.classList.add("anchorback");
  }
  else {
    backTopBtn.classList.remove("anchorback")
  }
});



//MouseWheelSpeed
section2.addEventListener("wheel", (event) => {
   let deltaY = event.deltaY;
   content.scrollTop += deltaY / 50;
});

section3.addEventListener("wheel", (event) => {
   let deltaY = event.deltaY;
   content.scrollTop += deltaY / 50;
});
section4.addEventListener("wheel", (event) => {
   let deltaY = event.deltaY;
   content.scrollTop += deltaY / 50;
});

section5.addEventListener("wheel", (event) => {
   let deltaY = event.deltaY;
   content.scrollTop += deltaY / 50;
});

section6.addEventListener("wheel", (event) => {
   let deltaY = event.deltaY;
   content.scrollTop += deltaY / 50;
});



//Loader
const loaderCont = document.querySelector(".loader-container");
const page = document.querySelector("main");

window.addEventListener("load", () => {
  loaderCont.classList.add("hidden");
  page.classList.add("visible");
})




//ToBeContinued
function myMoveFunction() {
    console.log('haahah');
    back.style.backdropFilter = "blur(12000px)";
}