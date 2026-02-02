// Select elements
const showBtn = document.querySelector('.show-success');
const alertBox = document.querySelector('.alert');
const closeBtn = document.querySelector('.close-btn');

// Show alert on button click
showBtn.addEventListener('click', () => {
  alertBox.classList.add('show'); // display alert

  // Hide alert automatically after 3 seconds
  setTimeout(() => {
    alertBox.classList.remove('show');
  }, 3000);
});

// Close alert on close button click
closeBtn.addEventListener('click', () => {
  alertBox.classList.remove('show');
});
