import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onInputData, 500));
form.addEventListener('submit', onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

populateInputs()



function onFormSubmit(evt) {
    e.preventDefault();
  console.log(formData);

  if (!form.email.value || !form.message.value) {
    return alert('Please, fill in all the fields!');
  }

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  formData = {};
    
}


function onInputData (e) {
 formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
    
}



function populateInputs() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMessage) {
    form.email.value = savedMessage.email || '';
    form.message.value = savedMessage.message || '';
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(formData);

  if (!form.email.value || !form.message.value) {
    return alert('Please, fill in all the fields!');
  }

  localStorage.removeItem(STORAGE_KEY);
  e.currentTarget.reset();
  formData = {};
}