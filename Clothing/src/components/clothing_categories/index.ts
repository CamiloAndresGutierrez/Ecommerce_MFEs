interface IClothingCategories {
    name: string,
    identifier: number,
    icon: string
}

const CLOTHING_CATEGORIES: IClothingCategories[] = [
    { name: 'Bikini', identifier: 0, icon: 'http://localhost:5001/bikini.svg'},
    { name: 'Shirts', identifier: 1, icon: 'http://localhost:5001/shirt.svg'},
    { name: 'Skirts', identifier: 2, icon: 'http://localhost:5001/skirt.svg'},
    { name: 'Socks', identifier: 3, icon: 'http://localhost:5001/sock.svg'},
]

class ClothingCategories extends HTMLElement {
    shadow: ShadowRoot;
  
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' })
    }

    createImage({ icon }: IClothingCategories): HTMLElement {
        const categoryIcon = document.createElement('img');
        categoryIcon.src = icon

        return categoryIcon
    }

    createTitle({ name }: IClothingCategories): HTMLElement {
        const categoryName = document.createElement('h2');
        categoryName.className = "category-card-title";
        categoryName.innerHTML = name || "";
        
        return categoryName;
    }

    createContainer(elements: HTMLElement[]) {
        const categoryCard = document.createElement('div');
        categoryCard.className = "category-card";

        elements.forEach(element => {
            categoryCard.appendChild(element)
        })

        return categoryCard
    }

    connectedCallback() {
        CLOTHING_CATEGORIES.forEach(category => {
            const containerElements = [this.createTitle(category), this.createImage(category)]
            const container = this.createContainer(containerElements)
      
            this.shadow.appendChild(container)
        })
    }

}

if (!customElements.get('clothing-categories')) {
    customElements.define('clothing-categories', ClothingCategories);
}

export default ClothingCategories;


