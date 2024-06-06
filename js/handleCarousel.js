const carouselWrapper = document.getElementById("carouselWrapper");
const secondCarouselWrapper = document.getElementById("carouselWrapper2");
const leftButton = document.querySelector(".carousel-btn.left");
const rightButton = document.querySelector(".carousel-btn.right");
const secondLeftButton = document.querySelectorAll(".carousel-btn.left")[1];
const secondRightButton = document.querySelectorAll(".carousel-btn.right")[1];

let isDragStart = false;
let startX;
let scrollLeft;

carouselWrapper.onmousedown = (e) => {
  e.preventDefault();
  isDragStart = true;
  startX = e.pageX - carouselWrapper.offsetLeft;
  scrollLeft = carouselWrapper.scrollLeft;
};

carouselWrapper.onmouseup = () => {
  isDragStart = false;
};

carouselWrapper.onmouseleave = () => {
  isDragStart = false;
};

carouselWrapper.onmousemove = (e) => {
  if (!isDragStart) return;
  const x = e.pageX - carouselWrapper.offsetLeft;
  const walk = (x - startX) * 1; // Adjust multiplier for faster/slower scrolling
  carouselWrapper.scrollLeft = scrollLeft - walk;
};

leftButton.onclick = () => {
  carouselWrapper.scrollLeft -= 300;
};

rightButton.onclick = () => {
  carouselWrapper.scrollLeft += 300;
};

let isDragStart2 = false;
let startX2;
let scrollLeft2;

secondCarouselWrapper.onmousedown = (e) => {
  e.preventDefault();
  isDragStart2 = true;
  startX2 = e.pageX - secondCarouselWrapper.offsetLeft;
  scrollLeft2 = secondCarouselWrapper.scrollLeft;
};

secondCarouselWrapper.onmouseup = () => {
  isDragStart2 = false;
};

secondCarouselWrapper.onmouseleave = () => {
  isDragStart2 = false;
};

secondCarouselWrapper.onmousemove = (e) => {
  if (!isDragStart2) return;
  const x = e.pageX - secondCarouselWrapper.offsetLeft;
  const walk = (x - startX2) * 1; // Adjust multiplier for faster/slower scrolling
  secondCarouselWrapper.scrollLeft2 = scrollLeft2 - walk;
};

secondLeftButton.onclick = () => {
  secondCarouselWrapper.scrollLeft -= 300;
};

secondRightButton.onclick = () => {
  secondCarouselWrapper.scrollLeft += 300;
};
