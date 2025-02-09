class Categories extends HTMLElement {
  shadow: ShadowRoot;

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .category-cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        width: 100%;
      }
      .category-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      
    </style>
    <div class="container">
      <h1>Categories</h1>
      <div class="category-cards">
        <div class="category-card">
          <h2 class="category-card-title">Clothing</h2>
          <p class="category-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="category-card">
          <h2 class="category-card-title">Electronics</h2>
          <p class="category-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="category-card">
          <h2 class="category-card-title">Home</h2>
          <p class="category-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div class="category-card">
          <h2 class="category-card-title">Beauty</h2>
          <p class="category-card-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>
  `
  }
}

export default Categories;
