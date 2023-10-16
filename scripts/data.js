
export let initialProducts = [
   {
      id: 1,
      checked:true,
      name: 'Футболка UZcotton мужская',
      color: 'белый',
      size: '56',
      img: '/images/item-1-img.svg',
      storage: 'Коледино WB',
      company: 'OOO Вайлдберриз',
      remains: 'Осталось 2 шт.',
      activePrice: '522',
      oldPrice: '1051',
      count: 1,
      maxCount: 2,
      minCount: 1,
      infoCompany: {
         name: 'OOO «ВАЙЛДБЕРРИЗ»',
         ogrn: 'ОГРН: 5167746237148',
         address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
      },
      sale: {
         percentDefault: 10,
         valueDefault: 300,
         percentBuyer: 5,
         valueBuyer: 200
      }
   },
   {
      id: 2,
      checked: true,
      name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
      color: 'прозрачный',
      size: '',
      img: '/images/item-2-img.svg',
      storage: 'Коледино WB',
      company: 'OOO Мегапрофстиль',
      remains: '',
      activePrice: '10500',
      oldPrice: '11500',
      count: 200,
      maxCount: 20000,
      minCount: 1,
      infoCompany: {
         name: 'OOO «МЕГАПРОФСТИЛЬ»',
         ogrn: 'ОГРН: 5167746237148',
         address:'129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
      },
      sale: {
         percentDefault: 55,
         valueDefault: 300,
         percentBuyer: 10,
         valueBuyer:30
      }
   },
   {
      id: 3,
      checked: true,
      name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
      color: '',
      size: '',
      img: '/images/item-3-img.svg',
      storage: 'Коледино WB',
      company: 'OOO Вайлдберриз',
      activePrice: '247',
      remains: 'Осталось 2 шт.',
      oldPrice: '475',
      count: 2,
      maxCount: 2,
      minCount: 1,
      infoCompany: {
         name: 'OOO «ВАЙЛДБЕРРИЗ»',
         ogrn: 'ОГРН: 5167746237148',
         address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
      },
      sale: {
         percentDefault: 5,
         valueDefault: 100,
         percentBuyer: 4,
         valueBuyer: 200
      }
   }
]

export let missingProducts = [
   {
      id: 1,
      name: 'Футболка UZcotton мужская',
      color: 'белый',
      size: '56',
      img: '/images/item-1-img.svg'
   },
   {
      id: 2,
      name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
      color: 'прозрачный',
      size: '',
      img: '/images/item-2-img.svg',
   },
   {
      id: 3,
      name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell ',
      color: '',
      size: '',
      img: '/images/item-3-img.svg',

   }
]

export let debets = [
   {
      id: 1,
      number: '1234 56•• •••• 1234',
      date: '01/30',
      img: '/images/card-mir.svg',
      checked:true
   },
   {
      id: 2,
      number: '5632 56•• •••• 1244',
      date: '02/31',
      img: '/images/visa.svg',
      checked: false
   },
   {
      id: 3,
      number: '8368 56•• •••• 1234',
      date: '03/28',
      img: '/images/mastercard.svg',
      checked: false
   },
   {
      id: 4,
      number: '6325 56•• •••• 1234',
      date: '06/29',
      img: '/images/maestro.svg',
      checked: false
   },
]
export let addressCourier = [
   {
      id: 1,
      name: 'Бишкек, улица Табышалиева, 57', 
      checked: true
   },
   {
      id: 2,
      name: 'Бишкек, улица Жукеева-Пудовкина, 77/1',
      checked: false
   },
   {
      id: 3,
      name: 'Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1',
      checked: false
   }
   
]
export let addressPoint = [
   {
      id: 1,
      name: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
      checked: true
   },
   {
      id: 2,
      name: 'г. Бишкек, микрорайон Джал, улица Ахунбаева Исы, д. 67/1',
      checked: false
   },
   {
      id: 3,
      name: 'г. Бишкек, улица Табышалиева, д. 57',
      checked: false
   }

]
