import { addressCourier, addressPoint } from "./data.js";
document.addEventListener('DOMContentLoaded', function () {
   const popupDelivery = document.querySelector('.popup-delivery');
   const deliveryTemplateCourier = popupDelivery.querySelector('.popup-delivery__template-courier').content;
   const deliveryTemplatePoint = popupDelivery.querySelector('.popup-delivery__template-point').content;
   const deliveryListCourier = popupDelivery.querySelector('.popup-delivery__list-courier');
   const deliveryListPoint = popupDelivery.querySelector('.popup-delivery__list-point');
   const totalAddress = document.querySelector('.total .total__address');
   const deliveryAddress = document.querySelector('.delivery__point-address');
   const buttonSubmitPopup = popupDelivery.querySelector('.popup-delivery__button-submit');

   function deleteAddress(element, array) {
      const index = array.findIndex(item => item.id === element.id);
      if (index !== -1) {
         array.splice(index, 1);
      }
   }
   function clearAddress() {
      deliveryListCourier.innerHTML = '';
      deliveryListPoint.innerHTML = '';
   }
   function updateAdress() {
      clearAddress();
      addressCourier.forEach(function (element) {
         const addressElement = createElementAddress(element, deliveryTemplateCourier, addressCourier);
         deliveryListCourier.append(addressElement);
      })
      addressPoint.forEach(function (element) {
         const addressElement = createElementAddress(element, deliveryTemplatePoint, addressPoint);
         deliveryListPoint.append(addressElement);
      })
   }
   function createElementAddress(addressItem, template, array) {
      const addressElement = template.querySelector('.popup-delivery__item').cloneNode(true);
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
         deleteAddress(addressItem, array);
         updateAdress();
      })
      addressElementRadio.addEventListener('change', function () {
         addressCourier.forEach(function (item) {
            item.checked = false;
         })
         addressPoint.forEach(function (item) {
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
      const addressElement = createElementAddress(addressItem, deliveryTemplateCourier, addressCourier);
      deliveryListCourier.append(addressElement);
   })

   addressPoint.forEach(function (addressItem) {
      const addressElement = createElementAddress(addressItem, deliveryTemplatePoint, addressPoint);
      deliveryListPoint.append(addressElement);
   })
})
