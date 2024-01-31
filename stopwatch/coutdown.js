let countdownInterval;

function startCountdown() {
  const countdownElement = document.getElementById('countdown');
  const countdownInput = document.getElementById('countdown-input').value;

  if (!countdownInput) {
    alert('Please enter a valid date');
    return;
  }

  const countdownDate = new Date(countdownInput).getTime();

  countdownInterval = setInterval(function () {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(countdownInterval);
      countdownElement.innerHTML = 'Countdown expired';
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(countdownInterval);
}
