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
let orderCont = document.querySelector(".orders-cont");
let totalCost = document.querySelector('.total-cost')


orderCont.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {

        const selectedProduct = e.target.dataset.product;

        const product = order.find(
            item => item.name === selectedProduct
        );

        if (product) {
            product.amount = 0;
            renderingOrder();
        }
    }
});

// ORDER DETAILS
const renderingOrder = () =>{
    const moreThanOne = order.some(order => order.amount > 0);
    orderContainer.style.display = moreThanOne ? "block" : "none";

    let orderDetails = '';
    order.map((orderDetail)=>{
        if(orderDetail.amount > 0){
            orderDetails += `
            <div class="order-card">
                <div class="left">
                <p>${orderDetail.amount} x</p> <p>${orderDetail.name.toUpperCase()}</p> <p class="remove-btn" data-product="${orderDetail.name.toLowerCase()}">remove</p>
                </div>
                <div class="right">
                <p class="cost">$${orderDetail.price * orderDetail.amount}</p>
                </div>
            </div>
           `
        }
        let total = order.reduce((sum, item) => {
            return sum + (item.price * item.amount);
        }, 0);
        totalCost.textContent=`$${total}`
    })
    orderCont.innerHTML = orderDetails
}
renderingOrder()

// FORM

let modalContainer = document.querySelector('.modal-container');
let completeBtn = document.querySelector('.completeBtn');
let orderForm = document.querySelector("#PayForm")

completeBtn.addEventListener("click", ()=>{
    modalContainer.style.display="block";
})

orderForm.addEventListener("submit", (e)=>{
    const formData = new FormData(orderForm);
    const name = formData.get("nameInput") 
    menuContainer.insertAdjacentHTML('afterend', `<p class="complete-text">Thanks, ${name}! Your order is on its way!</p>`);
    modalContainer.style.display="none";
    orderContainer.style.display="none";
    e.preventDefault()
})



