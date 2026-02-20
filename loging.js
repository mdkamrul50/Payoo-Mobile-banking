document.getElementById('login-btn').addEventListener('click', function () {
  const inputNumber = document.getElementById('input-number');
  const number = inputNumber.value;
  console.log(number);
  const inputPin = document.getElementById('input-pin');
  const pin = inputPin.value;
  console.log(pin);
  if (number == '01772237629' && pin == '1122') {
    alert('login success');
    window.location.assign('/home.html')
  } else {
    alert('login failed');
    return;
  }
});
