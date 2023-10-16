import { initialProducts, missingProducts } from "./data.js";
document.addEventListener('DOMContentLoaded', function () {
   const totalCheckbox = document.querySelector('.cart-main__checkbox');
   const totalDebitCheckbox = document.querySelector('.total .total__checkbox');
   const totalSubmit = document.querySelector('.total__submit');

   const hideActiveProductsButton = document.querySelector('.cart-main__active .cart-main__hide-button');
   const hideInactiveProductsButton = document.querySelector('.cart-main__inactive .cart-main__hide-button')
   const missCountText = document.querySelector('.cart-main__miss-count');
   const checkboxMark = document.querySelector('.cart-main__active .checkbox-fake');

   const chooseAllText = document.querySelector('.cart-main__choose-text');
   const choosePriceCountText = document.querySelector('.cart-main__price-count');

   const productsListActive = document.querySelector('.cart-main__active .products-list');
   const productTemplateActive = document.querySelector('.cart-main__active .product__template').content;
   const productsListInactive = document.querySelector('.cart-main__inactive .products-list');
   const productTemplateInactive = document.querySelector('.cart-main__inactive .product__template').content;

   const deliveryTemplate56 = document.querySelector('.delivery__date-one .delivery__product-template').content;
   const productsListDelivery56 = document.querySelector('.delivery__date-one .delivery__value-img');
   const delivery78 = document.querySelector('.delivery__date-two');
   const delivery56 = document.querySelector('.delivery__date-one');
   const deliveryTemplate78 = delivery78.querySelector('.delivery__product-template').content;
   const productsListDelivery78 = document.querySelector('.delivery__date-two .delivery__value-img');

   function updateTotalButton() {
      if (totalDebitCheckbox.checked === true) {
         totalSubmit.textContent = 'Оплатить ' + document.querySelector('.total__title-value-text').textContent + ' сом';
      }
      else {
         totalSubmit.textContent = 'Заказать'
      }      
   }
   totalDebitCheckbox.addEventListener('change',updateTotalButton)
  
   let products78 = [];
   function createArrayProducts78(){
      products78 = initialProducts.filter(product => product.count > 184);
   }
   createArrayProducts78();
   hideActiveProductsButton.addEventListener('click', function () {
      productsListActive.classList.toggle('hide');
      hideActiveProductsButton.querySelector('.cart-main__hide-img').classList.toggle('hide');
      hideActiveProductsButton.querySelector('.cart-main__hide-img-down').classList.toggle('hide');
      chooseAllText.classList.toggle('hide');
      choosePriceCountText.classList.toggle('hide');
      checkboxMark.classList.toggle('hide');

   })
   hideInactiveProductsButton.addEventListener('click', function () {
      productsListInactive.classList.toggle('hide');
      hideInactiveProductsButton.querySelector('.cart-main__hide-img').classList.toggle('hide');
      hideInactiveProductsButton.querySelector('.cart-main__hide-img-down').classList.toggle('hide');

   })
   missCountText.textContent = missingProducts.length + ' ' + declensionOfWord(missingProducts.length, 'товар', 'товара', 'товаров');
   function clearActiveProducts() {
      productsListActive.innerHTML = '';
      productsListDelivery56.innerHTML = '';
      productsListDelivery78.innerHTML = '';
      delivery56.querySelector('.delivery__date-key').textContent = ''
      delivery78.querySelector('.delivery__date-key').textContent = ''
   }
   function clearInactiveProducts() {
      productsListInactive.innerHTML = '';
   }
   function updateActiveProducts() {
      clearActiveProducts();
      initialProducts.forEach(function (element) {
         const productElement = createElementActive(element);
         const productDelivery = createDeliveryProduct(element, deliveryTemplate56);
         productsListActive.append(productElement);
         productsListDelivery56.append(productDelivery);
      })
      createArrayProducts78();
      let flag = products78.some(function (item) {
         return (item.checked === true);
      });
      if (products78.length > 0 && flag) {
         delivery78.querySelector('.delivery__date-key').textContent = '7—8 февраля'
         products78.forEach(function (element) {
            const productDelivery = createDeliveryProduct(element, deliveryTemplate78);
            productsListDelivery78.append(productDelivery); 
         })
      }
   }
   function checkboxAll() {
      let flag = initialProducts.every(function (item) {
         return (item.checked === true);
      })
      return flag;
   }
   totalCheckbox.checked = checkboxAll();
   totalCheckbox.addEventListener('change', function () {
      if (totalCheckbox.checked === true) {
         initialProducts.forEach(function (item) {
            item.checked = true;
         })
      }
      else {
         initialProducts.forEach(function (item) {
            item.checked = false;
         })
      }
      updateTotalPrice();
      updateCheckboxPrice();
      updateActiveProducts();
   })

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

   function deleteProductActive(element, array) {
      const index = array.findIndex(item => item.id === element.id);
      if (index !== -1) {
         array.splice(index, 1);
         updateActiveProducts();
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
         arrActivePrice = initialProducts.map(product => {
            if (product.checked === true) {
               return product.count * parseInt(product.activePrice, 10)
            }
            return 0;
         });
         arrOldPrice = initialProducts.map(product => {
            if (product.checked === true) {
               return product.count * parseInt(product.oldPrice, 10)
            }
            return 0;
         });
         arrSalePrice = initialProducts.map(product => {
            if (product.checked === true) {
               return product.count * parseInt(product.oldPrice, 10) - product.count * parseInt(product.activePrice, 10)
            }
            return 0;
         })
         arrCount = initialProducts.map(product => {
            if (product.checked === true) {
               return product.count
            }
            return 0;
         });
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
      updateTotalButton();
   }
   function updateCheckboxPrice() {
      let arrActivePrice = [];
      let arrCount = [];
      if (initialProducts.length === 0) {
         choosePriceCountText.textContent = '0 товаров  · 0 сом';
      }
      else {
         arrActivePrice = initialProducts.map(product => product.count * parseInt(product.activePrice, 10));
         arrCount = initialProducts.map(product => product.count);
         let sumActive = arrActivePrice.reduce(function (prev, item) {
            return prev + item;
         })
         let sumCount = arrCount.reduce(function (prev, item) {
            return prev + item;
         })
         let countWord = declensionOfWord(sumCount, 'товар', 'товара', 'товаров');
         choosePriceCountText.textContent = sumCount + ' ' + countWord + ' · ' + toPrice(sumActive.toString()) + ' сом';
      }
   }
   function createDeliveryProduct(productItem, deliveryTemplate) {
      if (productItem.checked) {
         delivery56.querySelector('.delivery__date-key').textContent = '5—6 февраля'
         const productDelivery = deliveryTemplate.querySelector('.delivery__item').cloneNode(true);
         const productDeliveryImg = productDelivery.querySelector('.delivery__img');
         const productDeliveryCount = productDelivery.querySelector('.delivery__img-count');
         productDeliveryImg.src = productItem.img;
         if (productItem.count > 1) {
            if (deliveryTemplate === deliveryTemplate56) {
               if (productItem.count > 184) {
                  productDeliveryCount.textContent = 184;
               }
               else {
                  productDeliveryCount.textContent = productItem.count;
               }
            }
            else {
               if (productItem.count > 184) {
                  productDeliveryCount.textContent = productItem.count - 184;
               }
               else {
                  delivery78.querySelector('.delivery__date-key').textContent = ''
                  return '';
               }
            }
         }
         return productDelivery;
      }
      else {
         createArrayProducts78();
         if (products78.length === 0) {
            delivery78.querySelector('.delivery__date-key').textContent = ''
         }
         return ''
      }
   }
   function createElementActive(productItem) {
      const productElement = productTemplateActive.querySelector('.product').cloneNode(true);
      const productElementTitle = productElement.querySelector('.product__title');
      const productElementImg = productElement.querySelector('.product__img');
      const productElementColor = productElement.querySelector('.product__color');
      const productElementSize = productElement.querySelector('.product__size');
      const productElementStorage = productElement.querySelector('.product__storage');
      const productElementCompany = productElement.querySelector('.product__company-text');
      const productElementInput = productElement.querySelector('.product__quantity-field');
      const productElementPriceDesktop = productElement.querySelector('.product__prices')
      const productElementActivePrice = productElementPriceDesktop.querySelector('.product__active-price-value');
      const productElementOldPrice = productElementPriceDesktop.querySelector('.product__old-price-value');
      const productElementPriceMobile = productElement.querySelector('.product__prices-mobile')
      const productElementActivePriceMobile = productElementPriceMobile.querySelector('.product__active-price-value');
      const productElementOldPriceMobile = productElementPriceMobile.querySelector('.product__old-price-value');
      const productElementRemains = productElement.querySelector('.product__remains');
      const productElementButtonPlus = productElement.querySelector('.product__plus-btn');
      const productElementButtonMinus = productElement.querySelector('.product__minus-btn');
      const productElementDeleteButton = productElement.querySelector('.product__delete');
      const productElemementLikeButton = productElement.querySelector('.product__like');
      const productElementCheckbox = productElement.querySelector('.product__checkbox');


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
      productElemementLikeButton.addEventListener('click', function () {
         productElemementLikeButton.classList.add('active');
      })

      productElementDeleteButton.addEventListener('click', () => {
         deleteProductActive(productItem, initialProducts);
         deleteProductActive(productItem, products78);
         updateTotalPrice();
         updateCheckboxPrice();
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
         updateCheckboxPrice();
         updateActiveProducts();
         
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
         updateCheckboxPrice();
         updateActiveProducts();         
      })

      productElementCheckbox.checked = productItem.checked;
      productElementCheckbox.addEventListener('change', function () {
         productItem.checked = !productItem.checked;
         totalCheckbox.checked = checkboxAll();
         updateTotalPrice();
         updateCheckboxPrice();
         updateActiveProducts();

         let noCheked = initialProducts.every(function (item) {
            return item.checked === false
         })
         if (noCheked) {
            delivery56.querySelector('.delivery__date-key').textContent = '';
         }
         else {
            delivery56.querySelector('.delivery__date-key').textContent = '5—6 февраля';
         }
         
         
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
      const productElement = productTemplateInactive.querySelector('.product').cloneNode(true);
      const productElementTitle = productElement.querySelector('.product__title');
      const productElementImg = productElement.querySelector('.product__img');
      const productElementColor = productElement.querySelector('.product__color');
      const productElementSize = productElement.querySelector('.product__size');
      const productElementDeleteButton = productElement.querySelector('.product__delete');
      const productElemementLikeButton = productElement.querySelector('.product__like');


      productElementTitle.textContent = productItem.name;
      productElementImg.src = productItem.img;
      productElemementLikeButton.addEventListener('click', function () {
         productElemementLikeButton.classList.add('active');
      })
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
         missCountText.textContent = missingProducts.length + ' ' + declensionOfWord(missingProducts.length, 'товар', 'товара', 'товаров');
      });
      return productElement;
   }


   initialProducts.forEach(function (productItem) {
      const productElement = createElementActive(productItem);
      const productDelivery = createDeliveryProduct(productItem, deliveryTemplate56);
      productsListActive.append(productElement);

      productsListDelivery56.append(productDelivery);
      delivery56.querySelector('.delivery__date-key').textContent = '5—6 февраля'
      updateTotalPrice();
      updateCheckboxPrice();
   })


   function createTemplateDelivery78() {
      createArrayProducts78();
      if (products78.length > 0) {
         delivery78.querySelector('.delivery__date-key').textContent = '7—8 февраля'
         products78.forEach(function (productItem) {
            const productDelivery = createDeliveryProduct(productItem, deliveryTemplate78);
            productsListDelivery78.append(productDelivery);
            updateTotalPrice();
            updateCheckboxPrice();
         })
      }
      else {
         delivery78.querySelector('.delivery__date-key').textContent = ''
      }
   }
   createTemplateDelivery78();

   missingProducts.forEach(function (productItem) {
      const productElement = createElementInactive(productItem);
      productsListInactive.append(productElement)
   })
});

