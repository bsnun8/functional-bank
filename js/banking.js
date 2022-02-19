function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  // clear input field
  inputField.value = '';
  return amountValue;
}

document.getElementById('deposit-btn').addEventListener
('click', function () {
  /* const depositInput = document.getElementById('deposit-input');
  const depositAmountText = depositInput.value;
  const depositAmount = parseFloat(depositAmountText); */
  const depositAmount = getInputValue('deposit-input');

  // get and update deposit total
  const depositTotal = document.getElementById('deposit-total');
  const depositTotalText = depositTotal.innerText;
  const previousDepositTotal = parseFloat(depositTotalText);

  depositTotal.innerText = previousDepositTotal + depositAmount;

  // update balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  balanceTotal.innerText = previousBalanceTotal + depositAmount;
  
  // clear deposit input field
  // depositInput.value = '';
});

// handle withdraw button 
document.getElementById('withdraw-btn').addEventListener
('click', function () {
  const withdrawAmount = getInputValue('withdraw-input');
  
  // get and update withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previousWithdrawTotalText = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
  withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

  // update balance after withdraw
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);

  balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
});