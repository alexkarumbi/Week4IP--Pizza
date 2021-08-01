function getSize(){
    var selectedSize =document.getElementById("p-size").value ;
    return parseInt(selectedSize);
}
function getCrust() {
    var selectedCrust = document.getElementById("p-crust").value;
    return parseInt(selectedCrust);
}
function getToppings() {
    var selectedToppings = document.getElementById("p-toppings").value;
    return parseInt(selectedToppings);
}
function getQuantity() {
    var selectedQuantity = document.getElementById("QTY").value;
    return parseInt(selectedQuantity);
}
function getType(){
   var selectedtype =document.getElementById("p-type").value
    return parseInt(selectedtype);
}
function checkout(){
    var Total= getSize() + getToppings() + getType() + getCrust() * getQuantity() +200  ;
    alert("The total payment is Ksh." + (Total));
    prompt("Enter your location")
    alert("Your order will be delivered as soon as possible")
} 