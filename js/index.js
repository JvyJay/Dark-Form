// Dark Mode Toggle
const container = document.querySelector('.container');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  container.classList.toggle('dark');
  toggle.classList.toggle('darkBtn');
});

// Form elements
const form = document.querySelector('#myForm');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// Submission event handler
form.addEventListener('submit', e => {
  e.preventDefault();
  validate();
});

const validate = () => {
  if (username.value === '') {
    errMsg(username, 'Username is required');
  } else {
    successMsg(username);
  }

  if (email.value === '') {
    errMsg(email, 'Email is required');
  } else {
    successMsg(email);
  }

  if (password.value === '') {
    errMsg(password, 'Password is required');
  } else if (password.value.length <= 6) {
    errMsg(password, 'Password must be longer than 6 characters');
  } else {
    successMsg(password);
  }

  if (password2.value === '') {
    errMsg(password2, 'Password confirmation is required');
  } else if (password2.value !== password.value) {
    errMsg(password2, 'Password does not match');
  } else {
    successMsg(password2);
    signupSuccess();
  }
};

// Error msg
let fillTheForm = () => {
  const errMsg = document.createElement('p');
  errMsg.classList.add('errMsg');
  errMsg.textContent = 'Please fill in all fields';
  errMsg.style.cssText = 'color: darkred; font-weight: bolder;';
  form.prepend(errMsg);
};

const errMsg = (input, msg) => {
  const formControl = input.parentElement;
  // Input border color change
  const border = input;
  border.style.cssText = 'border: solid 2px darkred;';
  // Shows error msg
  const small = formControl.querySelector('small');
  small.innerText = msg;
  small.style.cssText = 'visibility: visible;';
};

// Success msg
const successMsg = input => {
  const formControl = input.parentElement;
  const border = input;
  border.style.cssText = 'border: solid 2px lightgreen;';
  // Hides error msg
  const small = formControl.querySelector('small');
  small.style.cssText = 'visibility: hidden;';
};

const signupSuccess = () => {
  const successMsg = document.createElement('p');
  successMsg.textContent = 'Success!';
  successMsg.style.cssText = 'color: green; font-weight: bolder;';
  form.prepend(successMsg);

  setTimeout(() => successMsg.remove(), 5000);

  username.value = '';
  email.value = '';
  password.value = '';
  password2.value = '';
};
