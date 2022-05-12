const form = document.getElementById('large-form');

const email = form.element('mail');
let emailAdress = email.value;

form.addEventListener('submit', event => {
  event.preventDefault();
  if (emailAdress.match)
})

