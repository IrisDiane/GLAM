var womenProducts = [
    {id: 7, name: "Spaghetti Dress", price: "₱450"},
    {id: 8, name: "Gingham Collar  Top & Split Hem Skirt", price: "₱220"},
    {id: 9, name: "Floral Skirt With Split", price: "₱200"},
    {id: 10, name: "Sleepwear Set", price: "₱330"},
    {id: 11, name: "Wide Leg Jeans", price: "₱200"},
    {id: 12, name: "Zipper Sweatshirt", price: "₱130"},
    {id: 13, name: "Ruched Top With High Waisted Bikini", price: "₱320"},
    {id: 14, name: "Long Sleeve A-Line Mini Dress", price: "₱120"},
    {id: 15, name: "Wide Leg Shorts", price: "₱100"},
    {id: 16, name: "Wide leg trouser", price: "₱220"},
];

var womenProductsContainer = document.getElementById('womenProductsContainer');

for (let i = 0; i < womenProducts.length; i++) {
    var wProduct = womenProducts[i];
    var source = "./img/" + wProduct.name + ".jpg"
    var action = "addToCartFromWomen(" + i + ")"

    var womenProductDiv = document.createElement('div');
    womenProductDiv.className = "womenProducts"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    womenProductDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + wProduct.name + "</h1>" + "<h2>" + wProduct.price + "</h2>" + button;
    womenProductsContainer.appendChild(womenProductDiv);
}

function addToCartFromWomen(index) {
    toAdd = womenProducts[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(womenProducts[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}