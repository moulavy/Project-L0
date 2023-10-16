import { debets } from "./data.js";
document.addEventListener('DOMContentLoaded', function () {
   const popupPay = document.querySelector('.popup-pay');
   const payTemplate = popupPay.querySelector('.popup-pay__template').content;
   const payList = popupPay.querySelector('.popup-pay__list');


   const totalNumber = document.querySelector('.total .total__card-number');
   const totalImg = document.querySelector('.total .total__card-img');
   const payNumber = document.querySelector('.pay .pay__card-number');
   const payImg = document.querySelector('.pay .pay__card-img');
   const payDate = document.querySelector('.pay .pay__card-date');
   const buttonSubmitPopup = popupPay.querySelector('.popup-pay__button');

   function createElementCard(cardItem) {
      const cardElement = payTemplate.querySelector('.popup-pay__item').cloneNode(true);
      const cardElementNumber = cardElement.querySelector('.popup__card-number');
      const cardElementImg = cardElement.querySelector('.popup__card-img');
      const cardElementRadio = cardElement.querySelector('.popup__radio-input');

      cardElementNumber.textContent = cardItem.number;
      cardElementImg.src = cardItem.img;
      cardElementRadio.checked = cardItem.checked;

      function updatePage() {
         if (cardItem.checked === true) {
            totalNumber.textContent = cardItem.number;
            totalImg.src = cardItem.img;
            payNumber.textContent = cardItem.number;
            payImg.src = cardItem.img;
            payDate.textContent = cardItem.date;
         }
      }

      cardElementRadio.addEventListener('change', function () {
         debets.forEach(function (item) {
            item.checked = false;
         })
         cardItem.checked = true;
      });

      buttonSubmitPopup.addEventListener('click', function () {
         updatePage();
      });

      updatePage();
      return cardElement;
   }

   debets.forEach(function (cardItem) {
      const cardElement = createElementCard(cardItem);
      payList.append(cardElement);
   })

})
