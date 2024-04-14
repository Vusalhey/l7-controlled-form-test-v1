import axios from 'axios';

const app = () => {
// step 1
  const formContainer = document.querySelector('.form-container');

  const formHtml = `<form id="registrationForm">
    <div class="form-group">
        <label for="inputName">Name</label>
        <input type="text" class="form-control" id="inputName" placeholder="Введите ваше имя" name="name" required>
    </div>
    <div class="form-group">
        <label for="inputEmail">Email</label>
        <input type="text" class="form-control" id="inputEmail" placeholder="Введите email" name="email" required>
    </div>
    <input type="submit" value="Submit" class="btn btn-primary">
</form>
`;

  formContainer.innerHTML = formHtml;

  // step 2
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    axios.post('/users', formContainer.values)
      .then((response) => {
        document.body.innerHTML = `<p>${response.data.message}</p>`;
      })
      .catch((error) => {
        console.log(error);
      });
  });
  // step 3
  const nameInput = document.getElementById('inputName');
  const emailInput = document.getElementById('inputEmail');

  const isValidName = (name) => name.trim().length > 0;
  const isValidEmail = (email) => /\w+@\w+/.test(email.trim());

  const validateInputs = () => {
    const name = nameInput.value;
    const email = emailInput.value;
    // step 4

    const subbutton = document.querySelector('input[type="submit"]');

    // step 4

    // name validatiion
    if (isValidName(name)) {
      nameInput.classList.add('is-valid');
      nameInput.classList.remove('is-invalid');
    } else {
      nameInput.classList.add('is-invalid');
      nameInput.classList.remove('is-valid');
    }

    // email validation
    if (isValidEmail(email)) {
      emailInput.classList.add('is-valid');
      emailInput.classList.remove('is-invalid');
    } else {
      emailInput.classList.add('is-invalid');
      emailInput.classList.remove('is-valid');
    }

    // step 4
    // changing the status of the 'submit' button
    if (isValidName(name) && isValidEmail(email)) {
      subbutton.disabled = false;
    } else {
      subbutton.disabled = true;
    }

  // step 4
  };

  // listenners adding
  nameInput.addEventListener('input', validateInputs);
  emailInput.addEventListener('input', validateInputs);
  // step 3
};

export default app;
