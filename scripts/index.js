const deliveryBackInfo = document.querySelector('.delivery__back-info');
const deliveryBackFreeText = document.querySelector('.delivery__back-free');

deliveryBackFreeText.addEventListener('mouseenter', function () {
   deliveryBackInfo.classList.add('display');
})
deliveryBackFreeText.addEventListener('mouseleave', function () {
   deliveryBackInfo.classList.remove('display');
})