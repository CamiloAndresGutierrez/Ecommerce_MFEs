import Categories from "./components/categories/index";
import NavBar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Router from "./components/router";

(async function renderMFEClothing() {
  await import("mfe-clothing-category/clothing-page")
})()
customElements.define('categories-component', Categories);
customElements.define('nav-bar', NavBar);
customElements.define('footer-component', Footer);
customElements.define('router-component', Router);