const payBillBtn = document
  .getElementById('Pay-Bill-btn')
  .addEventListener('click', function () {
    let bankSelect = document.getElementById('SelectBank').value;
    console.log(bankSelect);
    const payBillNumber = document.getElementById('Pay-Bill-Number').value;

    let payBillAmount = document.getElementById('Pay-Bill-Amount').value;
    let balanceElement = document.getElementById('Balance');
    let balance = balanceElement.innerText;

    if (payBillAmount < 0) {
      alert('Invalid Amount');
      return;
    }

    if (bankSelect === 'Select bank') {
      alert('Invalid Bank');
      return;
    }

    const newBalance = Number(balance) - Number(payBillAmount);
    balanceElement.innerText = newBalance;
    console.log(payBillAmount);
    const payBillPin = document.getElementById('Pay-Bill-pin').value;
    console.log(payBillPin);

    if (payBillNumber.length != 11) {
      alert('Invalid Number');
      return;
    }

    if (payBillPin === '1122') {
      alert('Pay Bill Success');
    } else {
      alert('Invalid Pin');
      return;
    }
  });
