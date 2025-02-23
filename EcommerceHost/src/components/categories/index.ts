import './style.css'

const CATEGORIES = [
  {name: 'Clothing', url: 'clothing'},
  {name: 'Electronics', url: 'electronics'},
  {name: 'Home', url: 'home-decor'},
  {name: 'Beauty', url: 'beauty'}
]

class Categories extends HTMLElement {
    shadow: ShadowRoot;
  
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback() {
      this.renderTemplate();
      this.renderCategories();
    }

    renderCategories() {
      const cardsContainer = this.shadow.querySelector('.category-cards');

      CATEGORIES.forEach(category => {
        const categoryCard = document.createElement('div');
        const categoryName = document.createElement('h2');
  
        categoryCard.className = "category-card";
        categoryName.className = "category-card-title";
        categoryName.innerHTML = category.name || "";
        categoryCard.appendChild(categoryName)

        categoryCard.addEventListener('click', () => {
          window.history.pushState({}, '', category.url);
        })

        cardsContainer && cardsContainer.appendChild(categoryCard)
      })
    }
  
    renderTemplate() {
      this.shadow.innerHTML = `
      <link rel="stylesheet" href="/src/components/categories/style.css">
      <div class="categories-container">
        <h1>Categories</h1>
        <div class="category-cards" />
      </div>
    `
    }
  }
  
export default Categories;