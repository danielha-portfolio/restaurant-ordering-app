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
            <button class="add-item" data-product="${item.name.toLowerCase()}">+</button>
        </div>`
    menuContainer.innerHTML = menuContent;
});

let buttons = document.querySelectorAll('[data-product]');

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let selectedProduct = e.currentTarget.dataset.product;
        order.find(product => {
            if(product.name === selectedProduct){
                product.amount++;
                renderingOrder()
            }
        })
    })
})

let order = [
    {
        name: 'pizza',
        amount: 0,
        price: 14,
    },
    {
        name:'hamburger',
        amount: 0,
        price: 12
    },
    {
        name:'beer',
        amount: 0,
        price: 12
    },
]

let orderContainer = document.querySelector(".order-container");

// ORDER DETAILS
const renderingOrder = () =>{
    const moreThanOne = order.some(order => order.amount > 0);
    orderContainer.style.display = moreThanOne ? "block" : "none";
}
renderingOrder()
