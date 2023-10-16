const popupPay = document.querySelector('.popup-pay');
const buttonPayChange = document.querySelector('.pay__title-change');
const buttonClosePopupPay = popupPay.querySelector('.popup__button-close');
const page = document.querySelector('.page');
const buttonTotalChange=document.querySelector('.total__pay .total__delivery-img')

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

popupPay.addEventListener('click', function (event) {
   if (event.target === popupPay) {
      handleClickClosePopupPay();
   }
});
buttonTotalChange.addEventListener('click', handleClickChangePay);