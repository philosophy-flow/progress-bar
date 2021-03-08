// Loader total width = 480px

// Initial Amount = $370
// Total Amount = $1000

// Manipulate width with 'clientWidth' property

const loader = document.querySelector('.loader');
const amountRaised = document.querySelector('.raised');

const form = document.querySelector('.add-input');
const formInput = document.getElementById('input');


function changeText(newTotal) {
  if (newTotal < 1000) {
    amountRaised.innerHTML = newTotal;
  } else {
    amountRaised.innerHTML = 1000;
  }
}

function loadBar(newTotal) {
  const newPercentage = String((newTotal / 1000) * 100);
  loader.style.width = `${newPercentage}%`;
}


form.addEventListener('submit', e => {
  e.preventDefault();

  const initialAmount = parseInt(amountRaised.innerHTML);
  const donationAmount = parseInt(formInput.value);
  const newTotal = initialAmount + donationAmount;

  changeText(newTotal);
  loadBar(newTotal);
});
