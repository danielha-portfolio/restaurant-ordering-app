import { menuArray } from "./data.js";

const menuContainer = document.querySelector(".menu-container");

// RENDERS THE MENU
let menuContent = '';
menuArray.map((item)=>{
    menuContent += `    
        <div class="item-card">
            <div class="left">
                <p class="product">${item.emoji}</p>
                <div class="item-details">
                    <p class="name">${item.name}</p>
                    <p class="ingredients">${item.ingredients.join(', ')}</p>
                    <p class="price">$${item.price}</p>
                </div>
            </div>
            <button class="add-item">+</button>
        </div>`
    menuContainer.innerHTML = menuContent;
});

