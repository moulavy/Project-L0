document.addEventListener('DOMContentLoaded', function () {
   const form = document.querySelector('.cart-main__recipient');
   const nameInput = form.querySelector('#name');
   const surnameInput = form.querySelector('#surname');
   const emailInput = form.querySelector('#email');
   const phoneInput = form.querySelector('#phone');
   const innInput = form.querySelector('#inn');
   const inputs = [nameInput, surnameInput, emailInput, phoneInput, innInput];
   const errors = form.querySelectorAll('.recipient__error');
   const labels = form.querySelectorAll('.recipient__label');
   const totalSubmitButton = document.querySelector('.total__submit')

   function showError(input, errorElement, errorMessage) {
      errorElement.textContent = errorMessage;     
      input.classList.add('recipient__input-error');
   }
   function hideError(input, errorElement) {
      errorElement.textContent = '';
      input.classList.remove('recipient__input-error');
   }
   function showLabel(input,labelElement, labelMessage) {
      if (input.value.trim() !== '') {
         labelElement.textContent = labelMessage;
      }
      else {
         labelElement.textContent = '';
      }
   }   

   function validateName() {      
         hideError(nameInput, errors[0]);      
   }
   function validateNameSubmit() {
      const value = nameInput.value.trim();
      if (value === '') {
         showError(nameInput, errors[0], 'Укажите имя');
      } else {
         hideError(nameInput, errors[0]);
      }
   }

   function validateSurname() {
      
         hideError(surnameInput, errors[1]);
      
   }
   function validateSurnameSubmit() {
      const value = surnameInput.value.trim();
      if (value === '') {
         showError(surnameInput, errors[1], 'Введите фамилию');
      } else {
         hideError(surnameInput, errors[1]);
      }
   }

   function validateEmail() {
      const value = emailInput.value.trim();
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (emailRegex.test(value) || value==='') {
         hideError(emailInput, errors[2]);
      }
      else {
         showError(emailInput, errors[2], 'Проверьте адрес электронной почты');
      }

   }
   function validateEmailSubmit() {
      const value = emailInput.value.trim();
      if (value === '') {
         showError(emailInput, errors[2], 'Укажите электронную почту');
      } else {
         const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
         if (emailRegex.test(value)) {
            hideError(emailInput, errors[2]);
         }
         else {
            showError(emailInput, errors[2], 'Проверьте адрес электронной почты');
         }
      }
   }

   function validatePhone() {
      const value = phoneInput.value.replace(/\s/g, ''); 
      if (!/^\+?\d{1,3}?\s?\d{1,3}?\s?\d{2,3}?\s?\d{2}?\s?\d{2}$/.test(value) && value!=='') {
         showError(phoneInput, errors[3], 'Формат: +9 999 999 99 99');
      } else {
         hideError(phoneInput, errors[3]);
      }
   }
   function validatePhoneSubmit() {
      const value = phoneInput.value.replace(/\s/g, ''); 
      if (value === '') {
         showError(phoneInput, errors[3], 'Укажите номер телефона');
      } else if (!/^\+?\d{1,3}?\s?\d{1,3}?\s?\d{2,3}?\s?\d{2}?\s?\d{2}$/.test(value)) {
         showError(phoneInput, errors[3], 'Формат: +9 999 999 99 99');
      } else {
         hideError(phoneInput, errors[3]);
      }
   }

   function validateInn() {
      const value = innInput.value.trim();
      if (!/^\d{14}$/.test(value) && value!=='') {
         showError(innInput, errors[4], 'Проверьте ИНН');
      } else {
         hideError(innInput, errors[4]);
      }
   }
   function validateInnSubmit() {
      const value = innInput.value.trim();
      if (value === '') {
         showError(innInput, errors[4], 'Укажите ИНН');
      } else if (!/^\d{14}$/.test(value)) {
         showError(innInput, errors[4], 'Проверьте ИНН');
      } else {
         hideError(innInput, errors[4]);
      }
   }

   totalSubmitButton.addEventListener('click', function () {
      validateNameSubmit();
      validateSurnameSubmit();
      validateEmailSubmit();
      validatePhoneSubmit();
      validateInnSubmit();
   });

   inputs.forEach(input => {
      input.addEventListener('blur', function () {
         if (input === nameInput) {
            validateName();
         }
         else if (input === surnameInput) {
            validateSurname();
         }
         else if (input === emailInput) {
            validateEmail();
         } else if (input === phoneInput) {
            validatePhone();
         } else if (input === innInput) {
            validateInn();
         }
      });
   });
   inputs.forEach(input => {
      input.addEventListener('input', function () {
         if (input === nameInput) {
            showLabel(nameInput,labels[0],'Имя')
         }
         else if (input === surnameInput) {
            showLabel(surnameInput,labels[1], 'Фамилия')
         }
         else if (input === emailInput) {
            showLabel(emailInput,labels[2], 'Почта')
         } else if (input === phoneInput) {
            showLabel(phoneInput,labels[3], 'Телефон')
         } else if (input === innInput) {
            showLabel(innInput,labels[4], 'ИНН')
         }
      });
   });
});
