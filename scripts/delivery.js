import { addressCourier } from "./data.js";
document.addEventListener('DOMContentLoaded', function () {
   const popupDelivery = document.querySelector('.popup-delivery');
   const deliveryTemplate = popupDelivery.querySelector('.popup-delivery__template-courier').content;
   const deliveryListCourier = popupDelivery.querySelector('.popup-delivery__list-courier');


   const totalAddress = document.querySelector('.total .total__address');
   const deliveryAddress = document.querySelector('.delivery__point-address');
   const deliveryRating = document.querySelector('.delivery__rating-number');   
   
   const buttonSubmitPopup = popupDelivery.querySelector('.popup-delivery__button-submit');

   function deleteAddress(element, array) {
      const index = array.findIndex(item => item.id === element.id);
      if (index !== -1) {
         array.splice(index, 1);
      }
   }
   function clearAddress() {
      deliveryListCourier.innerHTML = '';

   }
   function updateAdress() {
      clearAddress();
      addressCourier.forEach(function (element) {
         const addressElement = createElementAddress(element);
         deliveryListCourier.append(addressElement);
      })
   }
   function createElementAddress(addressItem) {
      const addressElement = deliveryTemplate.querySelector('.popup-delivery__item').cloneNode(true);
      const addressElementName = addressElement.querySelector('.popup__adress-text');
      const addressElementRadio = addressElement.querySelector('.popup__radio-input');
      const addressElementDelete = addressElement.querySelector('.popup__delete');
      addressElementName.textContent = addressItem.name;
      addressElementRadio.checked = addressItem.checked;

      function updatePage() {
         if (addressItem.checked === true) {
            totalAddress.textContent = addressItem.name;            
            deliveryAddress.textContent = addressItem.name;            
         }
      }
      addressElementDelete.addEventListener('click', function () {
         deleteAddress(addressItem, addressCourier);
         updateAdress();
      })
     
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
