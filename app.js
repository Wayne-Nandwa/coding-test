let cartIcon = document.querySelector(".checkout"); 
let cart = document.querySelector(".cart");
let cartClose = document.querySelector("#back-btn");

cartIcon.onclick = () => {
    cart.classList.add("active");

};

cartClose.onclick = () => {
    cart.classList.remove("active");

};

if (document.readyState == 'loading'){
    document.addEventListener("DOMContentLoaded",ready);
}
else{
    ready();
}

function ready(){
    var removeCartBtn = document.getElementById("remove-btn");
    console.log(removeCartBtn);
    for (var i=0; i< removeCartBtn.Length ; i++ ){
        var button = removeCartBtn[i];
        button.addEventListener("click" , removecartItem);
    }
    //add quantity items 
    var quantityInputs = document.getElementsByClassName("cart-quantity");
    for(var i = 0; i< quantityInputs.Length ; i++ ){
        var input = quantityInputs[i];
        input.addEventListener("change", quantityChanged);

    }
    // add items to cart
    var addCart = document.getElementsByClassName("add-cart-btn");
    for(var i = 0; i< addCart.Length ; i++ ){
        var button = addCart[i];
        button.addEventListener("click", addCartClicked);
    }
    document.getElementsByClassName("buy-btn")[0].addEventListener("click",buyButtonClicked);

}

function buyButtonClicked(){
    alert("your order id placed");
    var cartContent = document.getElementsByClassName("contents")[0];
    while (cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild);
    }
}
// remove items
function removecartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

function quantityChanged(event){
    var input = event.target;
    if (isNaN ,(input.value) || input.value<=0){
        input.value = 1;
    }
    updateTotal();
}

function addCartClicked(event){
    var button = event.target;
    var shopProducts = button.parentElement;
    var title = shopProducts.getElementsByClassName("prod-title")[0].innerText;
    var price = shopProducts.getElementsByClassName("price")[0].innerText;
    var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
    addProductToCart(title, price, productImg);
    updateTotal();

}

function addProductToCart(title, price, productImg){
    var cartShopBox = document.createElement("div");
    cartShopBox.classList.add("cart-box");
    var cartItems = document.getElementsByClassName("contents")[0];
    var cartItemsNames = cartItems.getElementsByClassName("product-name");
    for(var i = 0; i< cartItemsNames.Length ; i++){
        if(cartItemsNames[i].innerText == title){
        alert("you have added this item to the cart");
        return;
    }
    }
    
}

var cartBoxContent = `<img src="${productImg}" alt="" class="cart-img" style="width:100%">
                        <div class="box"> 
                            <div class="product-name"> ${title}</div>
                            <div class="price">${price}</div>
                            <input type="number" value="1" class="cart-quantity" >
                            
                        </div>
                        <!--button to remove elements in the cart-->
                        <input type="image" src="./assets/images/bin.png" id="remove-btn"/> `

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox.getElementsByClassid("remove-btn")[0].addEventListener("click",removecartItem);
cartShopBox.getElementsByClassName("cart-quantity")[0].addEventListener("change",quantityChanged);

//update total
function updateTotal(){
    var cartContent = document.getElementsByClassName("contents") [0];
    var cartBoxes = cartContent.getElementsByClassName("cart-box");
    for (var i=0; i< cartBoxes.Length ; i++ ){
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName("price")[0];
        var quantityElement = cartBox.getElementsByClassName("quantity")[0];
        var price = parseFloat(priceElement.innerText.replace("Kshs", ""));
        var amount = quantityElement.value;
        total = total + (price * amount);
    }

        document.getElementsByClassName("total-price")[0].innerText = "Kshs" + total;
    
}