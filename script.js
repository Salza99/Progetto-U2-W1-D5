const animazionescroll = () => {
  document.addEventListener("scroll", () => {
    const vertical = window.scrollY;

    console.log(`Vertical scrollbar Position of a page: ${vertical}`);
    const navbar = document.querySelector("nav");
    const button = document.querySelector("button");
    if (vertical > 500) {
      navbar.classList.add("animazione");
      button.classList.add("animazione-bottone");
    }
    if (vertical < 500) {
      navbar.classList.remove("animazione");
      button.classList.remove("animazione-bottone");
    }
  });
};
animazionescroll();
