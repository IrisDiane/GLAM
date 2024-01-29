var kidProducts = [
    {id: 37, name: "Men Solid Button Up Shirt", price: "₱450"},
    {id: 38, name: "Men Solid Corduroy Loose Pants", price: "₱220"},
    {id: 39, name: "Baggy sweat short", price: "₱200"},
    {id: 40, name: "Solid Drop Shoulder Sweater", price: "₱330"},
    {id: 41, name: "Men Half Sleeved Polo", price: "₱200"},
    {id: 42, name: "Men Raglan Hoodie", price: "₱130"},
    {id: 43, name: "Stringer Tank", price: "₱320"},
    {id: 44, name: "Light Jeans Loose Fit", price: "₱120"},
    {id: 45, name: "Boxer Brief", price: "₱100"},
    {id: 46, name: "Collar Cotton Shirt", price: "₱220"},
];

var kidProductsContainer = document.getElementById('kidProductsContainer');

for (let i = 0; i < kidProducts.length; i++) {
    var kProduct = kidProducts[i];
    var source = "./img/" + kProduct.name + ".jpg"
    var action = "addToCartFromKid(" + i + ")"

    var kidProductDiv = document.createElement('div');
    kidProductDiv.className = "kidProducts"
    var button = "<button class='CartBtn' onclick='" + action + "'><img class='IconContainer' src='/img/cart.png'>Add to Cart</button>";

    kidProductDiv.innerHTML = "<img src='" + source + "'" + "class='photo'>" + "<h1>" + kProduct.name + "</h1>" + "<h2>" + kProduct.price + "</h2>" + button;
    kidProductsContainer.appendChild(kidProductDiv);
}

function addToCartFromKid(index) {
    toAdd = kidProducts[index]
    if (!cartedProducts.some(existingProduct => existingProduct.id === toAdd.id)) {
        cartedProducts.push(kidProducts[index]);
        localStorage.setItem('cartedProducts', JSON.stringify(cartedProducts))
        addedAProduct();   
    } else {
        window.alert("Already in Cart");
    }
}