document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const logoTextElements = document.querySelectorAll(".logoText");
    const linkedElements = document.querySelectorAll("a");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.backgroundColor = "#ffffff";
            logoTextElements.forEach(function (logoText) {
                logoText.style.color = "black";
            });
            linkedElements.forEach(function (link) {
                link.style.color = "black";
            });
        } else {
            header.style.backgroundColor = "transparent";
            logoTextElements.forEach(function (logoText) {
                logoText.style.color = "";
            });
            linkedElements.forEach(function (link) {
                link.style.color = "";
            });
        }
    });
});


const cartContainer = document.getElementById("cartContainer");
const productsInCart = document.getElementById("cartProducts")
var cartedProducts = [];

//checks if there is a product in cart innitially
var innitCartedProducts = JSON.parse(localStorage.getItem('cartedProducts'));

cartFunction();

function cartFunction() {
    innitCartedProducts = JSON.parse(localStorage.getItem('cartedProducts'));
    console.log(innitCartedProducts.length)
    if (innitCartedProducts.length != 0) {        
    for (let i = 0; i < innitCartedProducts.length; i++) {
        const cartedProduct = innitCartedProducts[i];
        var source = "./img/" + cartedProduct.name + ".jpg"
        var action = "removeProduct(" + i + ")";
        var cartDiv = document.createElement('div');
        cartDiv.className = "cart";
        var cancelButton = "<button class='cancelBtn' onclick='" + action + "'><img class='cancel' src='/img/cancel.png'></button>";
        var sizes = "<div class='radio-input'>" +
        "<label><input type='radio' id='value-1' name='value-radio' value='value-1'><span>S</span></label>" +
        "<label><input type='radio' id='value-2' name='value-radio' value='value-2'><span>M</span></label>" +
        "<label><input type='radio' id='value-3' name='value-radio' value='value-3'><span>L</span></label>" +
        "<span class='selection'></span>" +
        "</div>";
        var quantity = "<div class='quantityContainer' id='quantity'> <label for='quantityCounter'> Quantity:<input id='quantityCounter' class='quantityCounter' type='number' oninput='preventNull(this)'></div>"
    
        cartDiv.innerHTML = "<img src='" + source + "'" + "class='cartPhoto'>" + "<div class='text'>" + "<p>"+ cartedProduct.name +"</p> <h1>" + cartedProduct.price + "</h1>" + sizes + quantity + "</div>" + cancelButton ;
        productsInCart.appendChild(cartDiv)
        cartedProducts = innitCartedProducts;
    }
    
    }
}


function addToCart(index) {
    toAdd = products[index];
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(products[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}

function addedAProduct() {
    var cartIndex = currentCartIndex(); 
    var cartProduct = cartedProducts[cartIndex];
    var cartDiv = document.createElement('div');
    cartDiv.className = "cart"
    var action2 = "removeProduct(" + cartIndex + ")"
    var cancelButton = "<button class='cancelBtn' onclick='" + action2 + "'><img class='cancel' src='/img/cancel.png'></button>";
    var sizes = "<div class='radio-input'>" +
    "<label><input type='radio' id='value-1' name='value-radio' value='value-1'><span>S</span></label>" +
    "<label><input type='radio' id='value-2' name='value-radio' value='value-2'><span>M</span></label>" +
    "<label><input type='radio' id='value-3' name='value-radio' value='value-3'><span>L</span></label>" +
    "<span class='selection'></span>" +
    "</div>";
    var quantity = "<div class='quantityContainer' id='quantity'> <label for='quantityCounter'> Quantity:<input id='quantityCounter' class='quantityCounter' type='number' oninput='preventNull(this)'></div>"

    var source = "./img/" + cartProduct.name + ".jpg"
    cartDiv.innerHTML = "<img src='" + source + "'" + "class='cartPhoto'>" + "<div class='text'>" + "<p>"+ cartProduct.name +"</p> <h1>" + cartProduct.price + "</h1>" + sizes + quantity + "</div>" + cancelButton;
    productsInCart.appendChild(cartDiv);
}

function currentCartIndex() {
    if (cartedProducts.length === 1) {
        return 0;
    } else {
        return cartedProducts.length - 1;
    }
}

var cartShown = false;

function displayCart() {
    // console.log("Working")
    if (cartShown) {
        cartContainer.style.right = "-26%";
        cartShown = false
    } else {
        cartContainer.style.right = "0px";
        cartShown = true
    }
}

function preventNull(input) {
    var value = Number(input.value);
    
    if (value <= 0) {
      input.value = 1;
    }

    calculateSubTotal(input.value)
}

function calculateSubTotal(count) {
}

function removeProduct(index) {
    cartedProducts.splice(index, 1);
    localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts));
    productsInCart.innerHTML = '';
    cartFunction();
}