import ClothingCategories from './clothing_categories'

class MFEClothingMainPage extends HTMLElement {
    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'})
        if (!customElements.get('clothing-categories')) {
          customElements.define('clothing-categories', ClothingCategories);
        }
    }

    connectedCallback() {
        this.render();
    }

    render() {
      this.shadow.innerHTML = `
        <clothing-categories></clothing-categories>
      `
    }
}

export default MFEClothingMainPage;