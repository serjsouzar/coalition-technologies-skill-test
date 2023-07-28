const slideImg1 = document.querySelector(".slideImg1");
const slideImg2 = document.querySelector(".slideImg2");
const slideImg3 = document.querySelector(".slideImg3");
const slideImg4 = document.querySelector(".slideImg4");

const slideButton = document.querySelector(".div-btn");


const mountain1 = document.querySelector(".option1")
const mountain2 = document.querySelector(".option2")
const sectionBackground = document.querySelector(".section3")

function changeBackgroundImageMountain1() {
  sectionBackground.style.backgroundImage = "url(../images/background3.png)"  
  mountain2.style.backgroundColor = "#48546B"
  mountain1.style.backgroundColor = "rgba(104,121,153, 0.5)"
}

function changeBackgroundImageMountain2() {
  sectionBackground.style.backgroundImage = "url(../images/background4.png)"
  mountain1.style.backgroundColor = "#48546B"
  mountain2.style.backgroundColor = "rgba(104,121,153, 0.5)"  
}


function scrollPage() {
  document.querySelector(".section2").scrollIntoView({
    behavior: "smooth",
  });
}

function scrollPage2() {
  document.querySelector(".section3").scrollIntoView({
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
