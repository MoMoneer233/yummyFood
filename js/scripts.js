menu.addEventListener("click", () => {
  mobileNav.classList.toggle("showMobileNav");
});

let topBtn = document.getElementById("top");
this.addEventListener("scroll", () => {
  if (scrollY >= 600) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
});

topBtn.addEventListener("click", () => {
  scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
});
