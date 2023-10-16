import { addressCourier } from "./data.js";
document.addEventListener('DOMContentLoaded', function () {
   const popupDelivery = document.querySelector('.popup-delivery');
   const deliveryTemplate = popupDelivery.querySelector('.popup-delivery__template-courier').content;
   const deliveryListCourier = popupDelivery.querySelector('.popup-delivery__list-courier');


   const totalAddress = document.querySelector('.total .total__address');
   const deliveryAddress = document.querySelector('.delivery__point-address');
   const deliveryRating = document.querySelector('.delivery__rating-number');
   
   const buttonSubmitPopup = popupDelivery.querySelector('.popup-delivery__button-submit');


   function createElementAddress(addressItem) {
      const addressElement = deliveryTemplate.querySelector('.popup-delivery__item').cloneNode(true);
      const addressElementName = addressElement.querySelector('.popup__adress-text');
      const addressElementRadio = addressElement.querySelector('.popup__radio-input');
    
      addressElementName.textContent = addressItem.name;
      addressElementRadio.checked = addressItem.checked;

      function updatePage() {
         if (addressItem.checked === true) {
            totalAddress.textContent = addressItem.name;            
            deliveryAddress.textContent = addressItem.name;            
         }
      }

      addressElementRadio.addEventListener('change', function () {
         addressCourier.forEach(function (item) {
            item.checked = false;
         })
         addressItem.checked = true;
      });

      buttonSubmitPopup.addEventListener('click', function () {
         updatePage();
      });

      updatePage();
      return addressElement;
   }

   addressCourier.forEach(function (addressItem) {
      const addressElement = createElementAddress(addressItem);
      deliveryListCourier.append(addressElement);
   })






})
