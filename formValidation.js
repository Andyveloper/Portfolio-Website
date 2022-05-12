const form = document.getElementById('large-form');

const email = document.getElementById("mail")
const emailError= document.getElementById("error-message")
const emailAdress = email.value;

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailAdress.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)){
    form.submit()
  }
  else{
   emailError.textContent="Please enter the email only contain lowercase characters";
   emailError.style.display="block"
   emailError.style.color="red"
   
  }
  return false;
})

