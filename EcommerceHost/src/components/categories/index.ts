import './style.css'

interface ICategory {
  name: string,
  url: string
}

const CATEGORIES: ICategory[] = [
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

    createCardName(name: string) {
      const categoryName = document.createElement('h2');
      categoryName.className = "category-card-title";
      categoryName.innerHTML = name || "";

      return categoryName
    }

    createContainer(category: ICategory) {
      const cardName = this.createCardName(category.name)
      
      const categoryCard = document.createElement('div');
      categoryCard.className = "category-card";
      categoryCard.appendChild(cardName)

      categoryCard.addEventListener('click', () => {
        window.history.pushState({}, '', category.url);
      })

      return categoryCard
    }

    renderCategories() {
      const cardsContainer = this.shadow.querySelector('.category-cards');

      CATEGORIES.forEach(category => {
        const container = this.createContainer(category);

        cardsContainer && cardsContainer.appendChild(container);
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