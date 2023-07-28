const animazioneScroll = () => {
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
animazioneScroll();

const svgAnimation = () => {
  const svg = document.querySelector("svg g g");
  const arrSvg = svg.ariaLabel.split(" ");
  setInterval(() => {
    let r = Math.floor(Math.random() * arrSvg.length);
    arrSvg.splice(r, r + 1);
    svg.ariaLabel = arrSvg.join();
    console.log(arrSvg);
  }, 1000);

  //   console.log(arrSvg);
};
svgAnimation();
