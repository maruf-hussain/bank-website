document.getElementById('deposit-btn').addEventListener('click', function(){
    const amountDeposit = document.getElementById('deposit-amount');
    const depositAmount = amountDeposit.value;
const depositConvert = parseFloat(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
const previousAmount = depositTotal.innerText;
const newDepositConvert = parseFloat(previousAmount);
const currentAmount = newDepositConvert + depositConvert;

    depositTotal.innerText = currentAmount;

// ...........balance total...............//
    const balanceTotal = document.getElementById('balance-total');
    const balanceAmount = balanceTotal.innerText;
    const balanceConvert = parseFloat(balanceAmount);
    const newBalance = depositConvert;
     + balanceConvert;
    balanceTotal.innerText = newBalance;

    amountDeposit.value = '';

    
})

// .......withdraw part...............//
document.getElementById('withdraw-button').addEventListener('click', function(){
    const amountWithdraw = document.getElementById('withdraw-amount');
    const withdrawAmount = amountWithdraw.value;
    const withdrawAmountConvert = parseFloat(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
const newWithdrawConvert = parseFloat(previousWithdrawAmount);
const currentWithdrawAmount = newWithdrawConvert + withdrawAmountConvert;
withdrawTotal.innerText = currentWithdrawAmount;

// .........balance cutout............//
const withdrawBalanceTotal = document.getElementById('balance-total');
const balanceTotalText = withdrawBalanceTotal.innerText;
const convertBalance = parseFloat(balanceTotalText);
const balanceNew = convertBalance - currentWithdrawAmount;
withdrawBalanceTotal.innerText = balanceNew;


    amountWithdraw.value = '';
})

