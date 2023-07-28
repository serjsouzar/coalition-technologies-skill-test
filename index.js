const slideImg1 = document.querySelector(".slideImg1");
const slideImg2 = document.querySelector(".slideImg2");
const slideImg3 = document.querySelector(".slideImg3");
const slideImg4 = document.querySelector(".slideImg4");

const slideButton = document.querySelector(".div-btn");

function scrollPage() {
  document.querySelector(".section2").scrollIntoView({
    behavior: "smooth",
  });
}

function slideImagesFunc2() {
  slideImg1.src=`./images/slide2.png`
  slideImg2.src=`./images/slide1.png`
  slideImg3.src=`./images/slide4.png`
  slideImg4.src=`./images/slide3.png`
}

function slideImagesFunc1() {
  slideImg1.src=`./images/slide1.png`
  slideImg2.src=`./images/slide2.png`
  slideImg3.src=`./images/slide3.png`
  slideImg4.src=`./images/slide4.png`
}
