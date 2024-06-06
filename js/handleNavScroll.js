window.onscroll = (e) => {
  const navHeader = document.getElementById("navHead");
  const logoText = document.getElementById("logoText");
  const navUl = document.getElementById("navUl");
  const roots = document.querySelector(":root");

  if (window.pageYOffset > 20) {
    navHeader.classList.replace("xl:bg-transparent", "xl:bg-white");
    navUl.classList.replace("text-white", "text-black");
    logoText.classList.replace("xl:text-white", "xl:text-sky-600");
    roots.style.setProperty("--primary", "black");
    roots.style.setProperty("--secondary", "white");
  } else if (window.pageYOffset === 0) {
    navHeader.classList.replace("xl:bg-white", "xl:bg-transparent");
    logoText.classList.replace("xl:text-sky-600", "xl:text-white");
    navUl.classList.replace("text-black", "text-white");
    roots.style.setProperty("--primary", "white");
    roots.style.setProperty("--secondary", "black");
  }
};
