document.getElementById('deposit-btn').addEventListener('click', function(){
  const depositAmount = document.getElementById('deposit-amount');
  const depositAmountText = depositAmount.value;
  const depositAmountConvert = parseFloat(depositAmountText);


  const depositTotal = document.getElementById('deposit-total');
const depositTotalText = depositTotal.innerText;
const depositTotalConvert = parseFloat(depositTotalText);
const depositTotalAmount = depositTotalConvert + depositAmountConvert;
depositTotal.innerText = depositTotalAmount;


// .............update balance.................//
const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const balanceConvert = parseFloat(balanceTotalText);
const balanceTotalAmount = balanceConvert + depositAmountConvert;
balanceTotal.innerText = balanceTotalAmount;

depositAmount.value = '';

    
})

// ...............withdraw part....................//
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountText = withdrawAmount.value;
    const withdrawAmountConvert = parseFloat(withdrawAmountText);

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalConvert = parseFloat(withdrawTotalText);
    const withdrawTotalAmount = withdrawTotalConvert + withdrawAmountConvert;
    withdrawTotal.innerText = withdrawTotalAmount;
console.log(withdrawTotalText);

// .............update balance.................//
const balanceAfterWithdraw = document.getElementById('balance-total');
const balanceAfterWithdrawText = balanceAfterWithdraw.innerText;
const balanceAfterWithdrawConvert = parseFloat(balanceAfterWithdrawText);
const totalBalanceAfterWithdraw =  balanceAfterWithdrawConvert - withdrawAmountConvert;
balanceAfterWithdraw.innerText = totalBalanceAfterWithdraw;


    withdrawAmount.value = '';

})
