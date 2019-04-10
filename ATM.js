var availableBalance = 500;
var transactionHistory = [];

function giveUserBalance() {
    return availableBalance;
}

function withdraw(withdrawalAmount) {

    if (availableBalance >= withdrawalAmount) {
        availableBalance = availableBalance - withdrawalAmount;
        transactionHistory.push(withdrawalAmount);
        console.log("transactionHistory", transactionHistory)
        console.log("withrawal of " + withdrawalAmount + " withdrawn")
        console.log("remaining funds " + availableBalance)
        return
    }
    else if(availableBalance < withdrawalAmount){
        console.log("Insufficient Balance")
        return "Insufficient Balance";
    }

}

console.log("current balance " + giveUserBalance())
withdraw(200);
withdraw(310);

