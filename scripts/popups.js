
document.addEventListener('DOMContentLoaded', function () {
   const popupPay = document.querySelector('.popup-pay');
   const buttonPayChange = document.querySelector('.pay__title-change');
   const buttonClosePopupPay = popupPay.querySelector('.popup-pay .popup__button-close');
   const page = document.querySelector('.page');
   const buttonTotalChangePay = document.querySelector('.total__pay .total__delivery-img')
   const buttonSubmitPopupPay = popupPay.querySelector('.popup-pay__button');

   const popupDelivery = document.querySelector('.popup-delivery');
   const buttonDeliveryChange= document.querySelector('.delivery__title-change');
   const buttonClosePopupDelivery = popupDelivery.querySelector('.popup-delivery .popup__button-close');
   const buttonTotalChangeDelivery = document.querySelector('.total__delivery .total__delivery-img')
   const buttonSubmitPopupDelivery = popupDelivery.querySelector('.popup-delivery__button');

   function handleClickChangePay() {
      popupPay.classList.add('popup-opened');
      page.classList.add('popup-opened-body')
   }
   function handleClickClosePopupPay() {
      popupPay.classList.remove('popup-opened');
      page.classList.remove('popup-opened-body')
   }
   buttonPayChange.addEventListener('click', handleClickChangePay)
   buttonClosePopupPay.addEventListener('click', handleClickClosePopupPay)
   buttonSubmitPopupPay.addEventListener('click', handleClickClosePopupPay)
   popupPay.addEventListener('click', function (event) {
      if (event.target === popupPay) {
         handleClickClosePopupPay();
      }
   });
   buttonTotalChangePay.addEventListener('click', handleClickChangePay);

   function handleClickChangeDelivery() {
      popupDelivery.classList.add('popup-opened');
      page.classList.add('popup-opened-body')
   }
   function handleClickClosePopupDelivery() {
      popupDelivery.classList.remove('popup-opened');
      page.classList.remove('popup-opened-body')
   }
   buttonDeliveryChange.addEventListener('click', handleClickChangeDelivery)
   buttonClosePopupDelivery.addEventListener('click', handleClickClosePopupDelivery)
   buttonSubmitPopupDelivery.addEventListener('click', handleClickClosePopupDelivery)
   popupDelivery.addEventListener('click', function (event) {
      if (event.target === popupDelivery) {
         handleClickClosePopupDelivery();
      }
   });
   buttonTotalChangeDelivery.addEventListener('click', handleClickChangeDelivery);

})