const burgerBtn = document.querySelector(".header__burger");
const mobileHeader = document.querySelector(".mobile-header");

burgerBtn?.addEventListener("click", () => {
  console.log("burger bosildi");
  if (burgerBtn.classList.contains("active")) {
    console.log("active bor");
    burgerBtn.classList.remove("active");
    mobileHeader?.classList.remove("active");
  } else {
    console.log("active yoq");
    burgerBtn.classList.add("active");
    mobileHeader?.classList.add("active");
  }
});
