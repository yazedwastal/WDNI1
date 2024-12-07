let list = document.getElementById("list");
let navBar = document.getElementById("navBar");
let header = document.getElementById("header");
let arrow = document.getElementById("arrow");
let services = document.getElementById("services");

// open The navBar

list.addEventListener("click", () => {
  if (navBar.style.display == "flex") {
    navBar.style.display = "none";
    header.style.height = "50px";
    header.style.boxShadow = "0 0 0 0";
  } else {
    navBar.style.display = "flex";
    header.style.height = "100px";
    header.style.boxShadow = "4px -2px 16px -5px black";
  }
  navBar.style.transitionDuration = "0.3s";
  header.style.transitionDuration = "0.3s";
});

onscroll = () => {
  if (scrollY > 6) {
    header.style.boxShadow = "4px -2px 16px -5px black";
  } else {
    header.style.boxShadow = "0 0 0 0";
  }
  // 
  if (scrollY > 180) {
    arrow.style.right = "25px";
    arrow.style.opacity = "1";
  }else{
    arrow.style.right = "-70px";
    arrow.style.opacity = "0.2";
  }
  // 
  let heroActive = document.getElementById("heroActive");
  let aboutActive = document.getElementById("aboutActive");
  let serviceActive = document.getElementById("serviceActive");
  let contactActive = document.getElementById("contactActive");
  // hero active button
  if(scrollY >= 0 ){
    heroActive.style.backgroundColor = "#7ed956";
    heroActive.style.color = "white";
    aboutActive.style.color = "black";
    aboutActive.style.backgroundColor = "white";
  }else{
    heroActive.style.backgroundColor = "white";
    heroActive.style.color = "black";
  }
  // about active button
  if(scrollY > 515){
    heroActive.style.backgroundColor = "white";
    heroActive.style.color = "black";
    aboutActive.style.backgroundColor = "#7ed956";
    aboutActive.style.color = "white";
  }else{
    aboutActive.style.color = "black";
    aboutActive.style.backgroundColor = "white";
  }
  // services active button
  if(scrollY > 1120){
    heroActive.style.backgroundColor = "white";
    heroActive.style.color = "black";
    aboutActive.style.backgroundColor = "white";
    aboutActive.style.color = "black";
    serviceActive.style.color = "white";
    serviceActive.style.backgroundColor = "#7ed956";
  }else{
    serviceActive.style.color = "black";
    serviceActive.style.backgroundColor = "white";
  }
  // services active button
  if(scrollY > 1790){
    heroActive.style.backgroundColor = "white";
    heroActive.style.color = "black";
    aboutActive.style.backgroundColor = "white";
    aboutActive.style.color = "black";
    serviceActive.style.color = "black";
    serviceActive.style.backgroundColor = "white";
    contactActive.style.color = "white";
    contactActive.style.backgroundColor = "#7ed956";
  }else{
    contactActive.style.color = "black";
    contactActive.style.backgroundColor = "white";
  }

  // if(scrollY > 1040){
  //   services.style.opacity = '1';
  //   services.style.transition = '0.3s';
  // }
};

// onclisk arrow go to up
arrow.onclick = ()=>{
  scroll({
   top: "0",
   behavior: "smooth"
 })
};

// swiper 
let swiper = new Swiper('.slider-wrapper' ,{
  loop: true,
  spaceBetween: 8,
  grabCursor: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
});
// swiper2
let swiper2 = new Swiper('.slider-wrapper2' ,{
  loop: true,
  spaceBetween: 8,
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    0: {
        slidesPerView: 1
    },
    600: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 2
    },
    1024: {
        slidesPerView: 3
    },
}
});
// onclick img change another img
let mainImg = document.getElementById('mainImg');
let parTextAraa = document.getElementById('parTextAraa');
let userTexts = document.getElementsByClassName('user-text');
let userPics = document.getElementsByClassName('userPic');
function getImg(client){
  mainImg.src = client;
    for(userPic of userPics){
      userPic.classList.remove('active-pic')
    }
    for(userText of userTexts){
        userText.classList.remove('active-text')
    }
    let i = Array.from(userPics).indexOf(event.target);
    userPics[i].classList.add('active-pic');
    userTexts[i].classList.add('active-text');
};

