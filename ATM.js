var availableAmount = 500;
console.log("availableAmount", availableAmount);
var withdrawalAmount = 400;
console.log("withdrawalAmount", withdrawalAmount)
var balance = availableAmount - withdrawalAmount

function withdraw(availableAmount) {
    
    if (availableAmount == withdrawalAmount) {
        //  balance = subract(availableAmount, withdrawalAmount);
        return "withdrawn";
    } else if (availableAmount < withdrawalAmount){
        return "insufficient amount";
     }else{
         console.log("insufficient fund"); 
     }

}
// console.log(withdraw(4000));
var total= balance;
console.log("current balance", total);