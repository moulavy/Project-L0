import { initialProducts } from "./products.js";
document.addEventListener('DOMContentLoaded', function () {
   let likeButtons = document.querySelectorAll('.product__like');
   let products = document.querySelectorAll('.product');

   products.forEach(function (product) {

      let deleteButton = product.querySelector('.product__delete');
      deleteButton.addEventListener('click', function () {
         product.classList.toggle('delete');
      });
   });

   likeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
         button.classList.toggle('active');
      });
   });

   const productsList = document.querySelector('.products-list');
   const productTemplate = document.querySelector('.product__template').content;

   function toPrice(value) {
      let arr = value.split('');
      let initialLength = arr.length;
      for (let i = arr.length - 1; i >= 0; i--) {
         if ((initialLength - i) % 3 === 0 && i != 0) {
            arr.splice(i, 0, ' ');
         }
      }
      return arr.join('');
   }
   initialProducts.forEach(function (productItem) {
      let productElement = productTemplate.querySelector('.product').cloneNode(true);
      let productElementTitle = productElement.querySelector('.product__title');
      let productElementImg = productElement.querySelector('.product__img');
      let productElementColor = productElement.querySelector('.product__color');
      let productElementSize = productElement.querySelector('.product__size');
      let productElementStorage = productElement.querySelector('.product__storage');
      let productElementCompany = productElement.querySelector('.product__company-text');
      let productElementInput = productElement.querySelector('.product__quantity-field');

      let productElementPriceDesktop = productElement.querySelector('.product__prices')
      let productElementActivePrice = productElementPriceDesktop.querySelector('.product__active-price-value');
      let productElementOldPrice = productElementPriceDesktop.querySelector('.product__old-price-value');
      let productElementPriceMobile = productElement.querySelector('.product__prices-mobile')
      let productElementActivePriceMobile = productElementPriceMobile.querySelector('.product__active-price-value');
      let productElementOldPriceMobile = productElementPriceMobile.querySelector('.product__old-price-value');
      let productElementRemains = productElement.querySelector('.product__remains');

      productElementTitle.textContent = productItem.name;
      productElementImg.src = productItem.img;
      if (productItem.color != '') {
         productElementColor.querySelector('.product__param-key').textContent = 'Цвет: ';
         productElementColor.querySelector('.product__param-value').textContent = productItem.color;
      }
      if (productItem.size != '') {
         productElementSize.querySelector('.product__param-key').textContent = 'Размер: ';
         productElementSize.querySelector('.product__param-value').textContent = productItem.size;
      }
      productElementStorage.textContent = productItem.storage;
      productElementCompany.textContent = productItem.company;
      productElementInput.value = productItem.count;
      let priceActiveValue = toPrice((productItem.activePrice * productItem.count).toString());
      let priceOldValue = toPrice((productItem.oldPrice * productItem.count).toString());
      if (priceActiveValue.length > 6) {
         productElementActivePrice.classList.add('product__long-price');
      }
      productElementActivePrice.textContent = priceActiveValue;
      productElementOldPrice.textContent = priceOldValue;
      productElementActivePriceMobile.textContent = priceActiveValue;
      productElementOldPriceMobile.textContent = priceOldValue;
      productElementRemains.textContent = productItem.remains;

      productsList.append(productElement)
   })
});

