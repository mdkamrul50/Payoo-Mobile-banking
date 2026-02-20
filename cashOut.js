let cashOutBtn = document
  .getElementById('CashOut-btn')
  .addEventListener('click', function () {
    let agentNumber = document.getElementById('Agent-Number').value;
    let withdrAwAmount = document.getElementById('Withdraw-Amount').value;
    let withdrawPin = document.getElementById('Withdraw-pin').value;

    let balanceElement = document.getElementById('Balance');
    let balance = balanceElement.innerText;
    let newBalance = Number(balance) - Number(withdrAwAmount);
   

    if (newBalance < 0) {
      alert('Invalid Amount');
      return;
    }

    balanceElement.innerText = newBalance;

    if (agentNumber.length != 11) {
      alert('Invalid Agent Number');
      return;
    }

    if (withdrawPin === '1122') {
      alert('Cash Out Success');
    } else {
      alert('Invalid Pin');
      return;
    }
  });
