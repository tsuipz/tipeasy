var original;
var tip;
var tipTotal;
var totalPrice;

function my15p(){ 
    tip = 15;
    CheckOriginal();
}
function my18p(){ 
    tip = 18;
    CheckOriginal();
}
function my20p(){ 
    tip = 20;
    CheckOriginal();
}
function myOtherp(){
    tip = prompt("Please enter an amount for tip (15% is 15):");
    CheckOriginal();
}
function CheckOriginal(){
    original =  parseFloat(document.getElementById("myOriginal").value);
    if (original == 0 || isNaN(original)){
        alert("Please enter a price that is not zero.");
    }
    else{
        TotalPrice();
    }
}
function TotalPrice(){
    tipTotal = original * (tip/100);
    totalPrice = original + tipTotal;
    alert("Tip is $" + tipTotal.toFixed(2) + "\nTotal is $" + totalPrice.toFixed(2) );
}