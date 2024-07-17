const burgerBtn = document.querySelector(".header__burger");

burgerBtn?.addEventListener("click", () => {
  console.log("burger bosildi");
  if (burgerBtn.classList.contains("active")) {
    console.log("active bor");
    burgerBtn.classList.remove("active");
  } else {
    console.log("active yoq");
    burgerBtn.classList.add("active");
  }
});
