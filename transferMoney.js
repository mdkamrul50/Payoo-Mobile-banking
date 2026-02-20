let transferBtn = document
  .getElementById('Transfer-btn')
  .addEventListener('click', function () {
    let transferNumber = document.getElementById('Transfer-Number').value;
    let transferAmount = document.getElementById('Transfer-Amount').value;
    let transferPin = document.getElementById('Transfer-pin').value;

    let balanceElement = document.getElementById('Balance');
    let balance = balanceElement.innerText;
    let newBalance = Number(balance) - Number(transferAmount);

    if (newBalance < 0) {
      alert('Invalid Amount');
      return;
    }

    balanceElement.innerText = newBalance;

    if (transferNumber.length != 11) {
      alert('Invalid Agent Number');
      return;
    }

    if (transferPin === '1122') {
      alert('Transfer Money Successful');
    } else {
      alert('Invalid Pin');
      return;
    }
  });
