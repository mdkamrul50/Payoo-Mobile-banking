const bonusBtn = document
  .getElementById('bonus-btn')
  .addEventListener('click', function () {
    let bonusCode = document.getElementById('bonus-Code').value;

    if (bonusCode === '7499') {
      alert('Bonus Received Success');
    } else {
      alert('Invalid Code');
      return;
    }

    let balanceElement = document.getElementById('Balance');
    let balance = balanceElement.innerText;
    const newBalance = Number(balance) + Number('1000');
    balanceElement.innerText = newBalance;
  });
