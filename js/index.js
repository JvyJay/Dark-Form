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
function errFunc() {
  const errMsg = document.createElement('p');
  errMsg.classList.add('errMsg');
  errMsg.textContent = 'Please fill in all fields';
  errMsg.style.cssText = 'color: red; font-weight: bolder;';
  form.prepend(errMsg);
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
  const err = document.querySelector('.errMsg');
  if (username.value == '' || email.value == '' || password.value == '') {
    errFunc();
    // Makes sure the errFunc won't create multiple elements
    errFunc = function() {};
  } else {
    successMsg();
    // Removes errFunc msg from DOM if necessary
    err.remove();
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
