let totalAmount = document.getElementById("total-amount");
let userAmount = document.getElementById("user-amount");
const checkAmountButton = document.getElementById("check-amount");
const totalAmountButton = document.getElementById("total-amount-button");
const productTitle = document.getElementById("product-title");
const errorMessage = document.getElementById("budget-error");
const productTitleError = document.getElementById("product-title-error");
const productCostError = document.getElementById("product-cost-error");
const amount = document.getElementById("amount");
const expenditureValue = document.getElementById("expenditure-value");
const balanceValue = document.getElementById("balance-amount");
const list = document.getElementById("list");
let tempAmount = 0;

//Set Budget Functions

totalAmountButton.addEventListener("click", () =>{
    tempAmount = totalAmount.value;
    //Bad input
    if(tempAmount === "" || tempAmount < 0){
        errorMessage.classList.remove("hide");
    }else{
        errorMessage.classList.add("hide");
        //Set Budget
        amount.innerHTML = tempAmount;
        balanceValue.innerHTML = tempAmount - expenditureValue.innerHTML;
        //Clear imnput
        totalAmount.value = 0;
    }
});