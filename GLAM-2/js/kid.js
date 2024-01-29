var kidProducts = [
    {id: 101, name: "Girls Floral Print Ruffle Trim Blouse & Overall Dress", price: "₱470"},
    {id: 102, name: "Coffee Floral Dress", price: "₱420"},
    {id: 103, name: "Fox Embroidery Dress", price: "₱420"},
    {id: 104, name: "Little Dinosaur Set For Toddlers", price: "₱420"},
    {id: 105, name: "2-piece Linen Set", price: "₱320"},
    {id: 105, name: "Three Piece Kiddy Shorts", price: "₱320"},
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