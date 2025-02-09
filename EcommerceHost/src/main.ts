import Categories from "./components/categories";
import NavBar from "./components/navbar/index";
import Footer from "./components/footer/index";
import Router from "./components/router";

import("mfe-clothing-category/clothing-page")
  .then(() => {
    console.log("MFEClothingMainPage loaded!");
  })
  .catch((err) => console.error("Failed to load remote Web Component:", err));

customElements.define('categories-component', Categories);
customElements.define('nav-bar', NavBar);
customElements.define('footer-component', Footer);
customElements.define('router-component', Router);