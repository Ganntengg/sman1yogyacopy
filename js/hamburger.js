const hamburgerBtn = document.getElementById("hamburgerBtn"),
  hamburgerToggle = document.getElementById("hamburgerToggle");

hamburgerBtn.onclick = () => {
  const toggler = hamburgerToggle.classList.contains("fa-bars");
  if (toggler) hamburgerToggle.classList.replace("fa-bars", "fa-x");
  else hamburgerToggle.classList.replace("fa-x", "fa-bars");
};
