import { initialProducts, missingProducts } from "./products.js";
document.addEventListener('DOMContentLoaded', function (){
   const productsListActive = document.querySelector('.cart-main__active .products-list');
   const productTemplateActive = document.querySelector('.cart-main__active .product__template').content;
   const productsListInactive = document.querySelector('.cart-main__inactive .products-list');
   const productTemplateInactive = document.querySelector('.cart-main__inactive .product__template').content;
   
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
   function declensionOfWord(number, one, few, many) {
      if (number % 10 === 1 && number % 100 !== 11) {
         return one;
      } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
         return few;
      } else {
         return many;
      }
   } 
   function clearActiveProducts() {
      productsListActive.innerHTML = ''; 
   }
   function clearInactiveProducts() {
      productsListInactive.innerHTML = '';
   }

   function deleteProductActive(element, array) {
      const index = array.findIndex(item => item.id === element.id);
      if (index !== -1) {
         array.splice(index, 1);
         clearActiveProducts();
         array.forEach(function (element) {
            const productElement = createElementActive(element);
            productsListActive.append(productElement)
         })
      }
   }

   function deleteProductInactive(element, array) {
      const index = array.findIndex(item => item.id === element.id);
      if (index !== -1) {
         array.splice(index, 1);
         clearInactiveProducts();
         array.forEach(function (element) {
            const productElement = createElementInactive(element);
            productsListInactive.append(productElement)
         })
      }
   }
   
   function updateTotalPrice() {
      let totalActivePrice = document.querySelector('.total__title-value-text');
      let totalOldPrice = document.querySelector('.total__detail-old');
      let totalSalePrice = document.querySelector('.total__detail-sale');
      let totalCount = document.querySelector('.total__detail-count');
      let arrActivePrice = [];
      let arrOldPrice = [];
      let arrSalePrice = [];
      let arrCount = [];
      if (initialProducts.length === 0) {
         totalActivePrice.textContent = '0';
         totalOldPrice.textContent = '0';
         totalSalePrice.textContent = '0';
         totalCount.textContent = '0 товаров';
      }
      else {
         arrActivePrice = initialProducts.map(product => product.count * parseInt(product.activePrice, 10));
         arrOldPrice = initialProducts.map(product => product.count * parseInt(product.oldPrice, 10));
         arrSalePrice = initialProducts.map(product => product.count * parseInt(product.oldPrice, 10) - product.count * parseInt(product.activePrice, 10))
         arrCount = initialProducts.map(product => product.count);
         let sumActive = arrActivePrice.reduce(function (prev, item) {
            return prev + item;
         })
         let sumOld = arrOldPrice.reduce(function (prev, item) {
            return prev + item;
         })
         let sumSale = arrSalePrice.reduce(function (prev, item) {
            return prev + item;
         })
         let sumCount = arrCount.reduce(function (prev, item) {
            return prev + item;
         })
         let countWord = declensionOfWord(sumCount, 'товар', 'товара', 'товаров');
         totalActivePrice.textContent = toPrice(sumActive.toString());
         totalOldPrice.textContent = toPrice(sumOld.toString());
         totalSalePrice.textContent = '−' + toPrice(sumSale.toString());
         totalCount.textContent = sumCount + ' ' + countWord;
      }
   }

   function createElementActive(productItem) {
      let productElement = productTemplateActive.querySelector('.product').cloneNode(true);
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
      let productElementButtonPlus = productElement.querySelector('.product__plus-btn');
      let productElementButtonMinus = productElement.querySelector('.product__minus-btn');
      let productElementDeleteButton = productElement.querySelector('.product__delete');
      function priceHandler(count) {
         let priceActiveValue = toPrice((productItem.activePrice * count).toString());                 
         let priceOldValue = toPrice((productItem.oldPrice * count).toString());
         if (priceActiveValue.length > 6) {
            productElementActivePrice.classList.add('product__long-price');
         }
         productElementActivePrice.textContent = priceActiveValue;
         productElementOldPrice.textContent = priceOldValue;
         productElementActivePriceMobile.textContent = priceActiveValue;
         productElementOldPriceMobile.textContent = priceOldValue;         
      }      
      productElementDeleteButton.addEventListener('click', () => {
         deleteProductActive(productItem, initialProducts);         
         updateTotalPrice();
      });
      productElementButtonPlus.addEventListener('click', function () {
         if (productElementInput.value < productItem.maxCount) {
            productElementInput.value++;
            productItem.count++;
            
            priceHandler(productItem.count);
            if (productElementInput.value >= productItem.maxCount) {
               productElementButtonPlus.disabled = true;
            }
            if (Number(productElementInput.value) != productItem.minCount) {
               productElementButtonMinus.disabled = false;
            }
         }
         updateTotalPrice();
      })

      productElementButtonMinus.addEventListener('click', function () {
         if (productElementInput.value > productItem.minCount) {
            productElementInput.value--;
            productItem.count--;
            
            priceHandler(productItem.count);
            if (productElementInput.value <= productItem.minCount) {
               productElementButtonMinus.disabled = true;
            }
            if (Number(productElementInput.value) != productItem.maxCount) {
               productElementButtonPlus.disabled = false;
            }
         }
         updateTotalPrice();
      })

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

      if (productItem.count === productItem.maxCount) {
         productElementButtonPlus.disabled = true;
      }

      if (productItem.count === productItem.minCount) {
         productElementButtonMinus.disabled = true;
      }

      productElementInput.value = productItem.count;
      priceHandler(productItem.count);     

      productElementRemains.textContent = productItem.remains;

      return productElement;
   }

   function createElementInactive(productItem) {
      let productElement = productTemplateInactive.querySelector('.product').cloneNode(true);
      let productElementTitle = productElement.querySelector('.product__title');
      let productElementImg = productElement.querySelector('.product__img');
      let productElementColor = productElement.querySelector('.product__color');
      let productElementSize = productElement.querySelector('.product__size');
      let productElementDeleteButton = productElement.querySelector('.product__delete');
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
      productElementDeleteButton.addEventListener('click', () => {
         deleteProductInactive(productItem, missingProducts);         
      });
      return productElement;
   }

   initialProducts.forEach(function (productItem) {
      const productElement = createElementActive(productItem);
      productsListActive.append(productElement)
      updateTotalPrice();
   })

   missingProducts.forEach(function (productItem) {
      const productElement = createElementInactive(productItem);
      productsListInactive.append(productElement)
   })
});

