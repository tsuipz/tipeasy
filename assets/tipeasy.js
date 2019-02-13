var original;
var tip;
var tipTotal;
var totalPrice;
var tax;
var totalWithTax;

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
	  tax =  parseFloat(document.getElementById("myTax").value);
    if (original == 0 || isNaN(original)){
        alert("Please enter a price that is not zero.");
    }
    else{
			if (tax == 0 || isNaN(tax)){
				tax = 0;
			}
			else{
				tax = tax/100;
			}
			TotalPrice();

    }
}
function TotalPrice(){
		totalWithTax = original + (original * tax);
    tipTotal = totalWithTax * (tip/100);
    totalPrice = totalWithTax + tipTotal;
		
		if (tax == 0){
    	alert("Tip is $" + tipTotal.toFixed(2) + "\nTotal is $" + totalPrice.toFixed(2) );			
		}
		else{
    	alert("Tax is $" + (original * tax).toFixed(2) + "\nTip is $" + tipTotal.toFixed(2) + "\nTotal is $" + totalPrice.toFixed(2) );
		}
}