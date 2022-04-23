const liSubscribe = document.querySelectorAll(".nav-right > ul > li > a")[3];
liSubscribe.addEventListener("mouseover", () => {
  liSubscribe.style.backgroundColor = "#0000ff";
});
liSubscribe.addEventListener("mouseout", () => {
  liSubscribe.style.backgroundColor = "transparent";
});

const footerTag = document.querySelectorAll("footer a");
footerTag.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.color = "#000000";
  });
  e.addEventListener("mouseout", () => {
    e.style.color = "#ffffff";
  });
});

const logoTag = document.querySelector(".logo > a");
logoTag.textContent = "Tokopedia";

const productBtn = document.querySelectorAll(".products-btn");
// console.log(productBtn);
productBtn.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.backgroundColor = "#000000";
  });
  e.addEventListener("mouseout", () => {
    e.style.backgroundColor = "transparent";
  });
});
