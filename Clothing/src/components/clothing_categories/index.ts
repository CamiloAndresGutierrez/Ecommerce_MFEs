const CLOTHING_CATEGORIES = [
    { name: 'Shirts', identifier: 0},
    { name: 'Pants', identifier: 1},
    { name: 'Dresses', identifier: 2},
    { name: 'Accesories', identifier: 3}
]

class ClothingCategories extends HTMLElement {
    shadow: ShadowRoot;
  
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        CLOTHING_CATEGORIES.forEach(category => {
            const categoryCard = document.createElement('div');
            const categoryName = document.createElement('h2');
      
            categoryCard.className = "category-card";
            categoryName.className = "category-card-title";
            categoryName.innerHTML = category.name || "";
            categoryCard.appendChild(categoryName)
    
            categoryCard.addEventListener('click', () => {
                console.log(category.identifier)
            })
    
            this.shadow.appendChild(categoryCard)
          })
    }

}

export default ClothingCategories;


