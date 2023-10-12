document.addEventListener('DOMContentLoaded', function () {
   let likeButtons = document.querySelectorAll('.product__like');
   let deleteButtons = document.querySelectorAll('.product__delete');
   let products = document.querySelectorAll('.product');

   products.forEach(function (product) {
      let deleteButton = product.querySelector('.product__delete');
      deleteButton.addEventListener('click', function () {
         product.classList.toggle('delete');
      });
      console.log('ff')
   });

   likeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
         button.classList.toggle('active');
      });
   });
});
