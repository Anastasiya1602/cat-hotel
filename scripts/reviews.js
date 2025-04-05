// const reviewBox = document.querySelector ('.reviews__box')
// const reviewNav =document.querySelector('.reviews__nav')
// const reviewIndicator = document.querySelectorAll('.reviews__indicator');
// const reviewsPrev =document.activeElement('.reviews__prev')
// const reviewsNext =document.activeElement('.reviews__next')

// let currentReview =0;

// const slideReview = document.querySelector('.reviews__box-item').offsetWidth;

// reviewsNext.addEventListener('click', () => {
//   currentReview = (currentReview + 1) % reviewIndicator.length;
//   updateReview()
// });

// reviewsPrev.addEventListener('click', () => {
//   currentReview = (currentReview - 1 + reviewIndicator.length) % reviewIndicator.length;
//   updateReview()
// });

// reviewIndicator.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     currentReview = index;
//     updateReview()
//   });
// });

// function updateReview() {
//   const translateX = currentReview * slideReview;
//   slideReview.style.transform = `translateX(${translateX}px)`;
//   reviewIndicator.forEach((indicator, index) => {
//       indicator.classList.toggle('active', index === currentReview);
//   });
// }


// const reviewsBox = document.querySelector('.reviews__box-item'); 
// const reviewsPrev = document.querySelector('.reviews__prev'); 
// const reviewsNext = document.querySelector('.reviews__next'); 
// const reviewIndicators = document.querySelectorAll('.reviews__indicator'); 

// let currentReview = 0;
// const itemWidth = reviewsBox.children[0]; 

// function updateReview() {
//   const translateX = -currentReview * itemWidth; // Знак минус для правильного направления
//   reviewsBox.style.transform = `translateX(${translateX}px)`; // Применяем transform к reviewsBox
//   reviewIndicators.forEach((indicator, index) => {
//     indicator.classList.toggle('active', index === currentReview);
//   });
// }

// reviewsNext.addEventListener('click', () => {
//   if (currentReview < reviewsBox.children.length - 1) {
//     currentReview++;
//     updateReview();
//   }
// });

// reviewsPrev.addEventListener('click', () => {
//   if (currentReview > 0) {
//     currentReview--;
//     updateReview();
//   }
// });

// reviewIndicators.forEach((indicator, index) => {
//   indicator.addEventListener('click', () => {
//     currentReview = index;
//     updateReview();
//   });
// });

// updateReview(); // Инициализируем слайдер при загрузке
