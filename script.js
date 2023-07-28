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
  const svg = document.querySelectorAll("svg g g g[opacity]");
  const lunghezzaM = document.querySelectorAll("svg g g g[opacity='1']");
  const a = setInterval(() => {
    svg[Math.floor(Math.random() * svg.length)].attributes.opacity.value = 0;
    // console.log(document.querySelectorAll("svg g g g[opacity='0']").length);
    // if (document.querySelectorAll("svg g g g[opacity='0']").length > lunghezzaM - 20) {
    //   console.log("ci entra dc");
    //   clearInterval(a);
    // }
    // console.log(arrSvg);
  }, 100);

  setInterval(() => {
    const svgOp = document.querySelectorAll("svg g g g[opacity='0']");
    svgOp[Math.floor(Math.random() * svgOp.length)].attributes.opacity.value = 1;
    if (document.querySelectorAll("svg g g g[opacity='0']").length > lunghezzaM) {
      console.log("sidia");
      return;
    }

    // console.log(arrSvg);
  }, 100);

  //   console.log(arrSvg);
};
svgAnimation();
