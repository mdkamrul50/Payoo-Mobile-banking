const addMoneyBtn = document
  .getElementById('Add-Money-btn')
  .addEventListener('click', function () {
    let selectBank = document.getElementById('Select-bank').value;
    console.log(selectBank);
    const addMoneyNumber = document.getElementById('Add-Money-Number').value;
    console.log(addMoneyNumber);
    let addAmount = document.getElementById('Add-Amount').value;
      let balanceElement = document.getElementById('Balance');
      let balance = balanceElement.innerText;

      if (addAmount < 0) {
        alert('Invalid Amount');
        return;
      }

      const newBalance = Number(balance) + Number(addAmount);
      balanceElement.innerText = newBalance
    console.log(addAmount);
    const addMoneyPin = document.getElementById('Add-Money-pin').value;
    console.log(addMoneyPin);

    if (selectBank === 'Select bank') {
      alert('Invalid Bank');
      return;
    }
    if (addMoneyNumber.length != 11) {
      alert('Invalid Number')
      return
    }

    if (addMoneyPin === '1122') {
      alert('Add Money Success');
    } else {
      alert('Invalid Pin');
      return;
    }
  });
