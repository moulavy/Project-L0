const deliveryBackInfo = document.querySelector('.delivery__back-info');
const deliveryBackFreeText = document.querySelector('.delivery__back-free');
const deliveryBackInfoTotal = document.querySelector('.total .delivery__back-info');
const deliveryBackFreeTextTotal = document.querySelector('.total .delivery__back-free');

deliveryBackFreeText.addEventListener('mouseenter', function () {
   deliveryBackInfo.classList.add('display');
})
deliveryBackFreeText.addEventListener('mouseleave', function () {
   deliveryBackInfo.classList.remove('display');
})

deliveryBackFreeTextTotal.addEventListener('mouseenter', function () {
   deliveryBackInfoTotal.classList.add('display');
})
deliveryBackFreeTextTotal.addEventListener('mouseleave', function () {
   deliveryBackInfoTotal.classList.remove('display');
})