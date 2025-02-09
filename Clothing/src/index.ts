import MFEClothingMainPage from './components/main';

if (!customElements.get('mfe-clothing-main-page')) {
  customElements.define('mfe-clothing-main-page', MFEClothingMainPage);
}

export {};