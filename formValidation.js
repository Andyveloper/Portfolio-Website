const form = document.getElementById('large-form');
const email = document.getElementById('mail');
const emailError = document.getElementById('error-message');
const userName = document.getElementById('username');
const textArea = document.getElementById('textareaxd');

// ==============================================
// LOCAL STORAGE

let objectData = {};

const storageData = () => {
  const data = JSON.stringify(objectData);
  localStorage.setItem('data', data);
}

const populateData = () => {
  let storagedData = JSON.parse(localStorage.getItem('data'))
  if (storagedData) {
    userName.value = storagedData.name;
    email.value = storagedData.email;
    textArea.value = storagedData.textArea;
  }  
}

form.addEventListener('keyup', (e) => {
  if (userName.value) {
  objectData.name = userName.value;
  }
  if (email.value) {
    objectData.email = email.value;
  }
  if (textArea.value) {
    objectData.textarea = textArea.value
  }
  storageData();
}
);



// ==============================================
// EMAIL VALIDATION

form.addEventListener('submit', (event) => {
  const emailAdress = email.value;
  const regEx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regEx.test(emailAdress)) {
    event.preventDefault();
    emailError.innerHTML = 'Invalid email, lowercase required';
    emailError.style.display = 'block';
    emailError.style.color = 'red';
  }
});
// ==============================================

populateData();

