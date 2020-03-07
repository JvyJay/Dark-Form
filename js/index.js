// Dark Mode Toggle
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  container.classList.toggle('dark');
  toggle.classList.toggle('darkBtn');
});

// form elements
const form = document.querySelector('#myForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const submit = document.querySelector('#formSubmit');

// Error msg
function validateErr() {
  const errMsg = document.createElement('p');
  errMsg.classList.add('errMsg');
  errMsg.textContent = 'Please fill in all fields';
  errMsg.style.cssText = 'color: red; font-weight: bolder;';
  form.prepend(errMsg);

  setTimeout(() => errMsg.remove(), 3000);
}

// Success msg
function successMsg() {
  const successMsg = document.createElement('p');
  successMsg.textContent = 'Successfully signed up';
  successMsg.style.cssText = 'color: green; font-weight: bolder';
  form.prepend(successMsg);

  setTimeout(() => successMsg.remove(), 3000);
}

// Validate form
function validate() {
  if (username.value == '' || email.value == '' || password.value == '') {
    validateErr();
  } else {
    successMsg();
  }
}

// Submission event handler
submit.addEventListener('click', e => {
  e.preventDefault();
  validate();

  username.value = '';
  email.value = '';
  password.value = '';
});
