const scrollToElements = document.getElementsByClassName("scroll-to");

const scrollTo = function () {
  const section = this.getAttribute("data-scroll-to");
  const scrollDiv = document.getElementById(section).offsetTop;
  window.scrollTo({ top: scrollDiv - 80, behavior: "smooth" });
};

for (let i = 0; i < scrollToElements.length; i++) {
  scrollToElements[i].addEventListener("click", scrollTo, false);
}

const menu = document.getElementById("menu");
window.addEventListener("scroll", function () {
  menu.classList.toggle("sticky-menu", window.scrollY);
});

const params = window.location.search;

const productLinks = document.querySelectorAll('a[href*="gossby.com"]');

productLinks.forEach((link) => {
  const originalHref = link.href;
  link.href = originalHref + location.search;
});
