const form = document.getElementById('large-form');
const email = document.getElementById("mail")
const emailError= document.getElementById("error-message")

// ==============================================
// EMAIL VALIDATION

form.addEventListener('submit', (event) => {
  const emailAdress = email.value;
  const regEx = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/;
  if (!regEx.test(emailAdress)){
   event.preventDefault();
   emailError.innerHTML="Invalid email, lowercase required";
   emailError.style.display="block"
   emailError.style.color="red"
  }
})

