const carouselTrack = document.querySelector('.carousel-track');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');
const roomsBox = document.querySelector('.rooms__box');
const roomsBoxTitle = roomsBox.querySelector('.rooms__box-title');
const roomsBoxList = roomsBox.querySelector('.rooms__box-list');


let currentIndex = 0;

const slideWidth = document.querySelector('.carousel-item').offsetWidth;

const slideData = [
    {
      title: "Эконом плюс",
      listItems: [
        "Площадь - 0.90 м2",
        "Размеры (ШхГхВ) — 90х100х180 см",
        "Цена за сутки: 200₽"
      ]
    },
    {
      title: "Комфорт",
      listItems: [
        "Площадь - 1,13 м2",
        "Размеры (ШхГхВ) - 100х125х180 см",
        "Цена за сутки: 250₽"
      ]
    },
    {
      title: "Сьют",
      listItems: [
        "Площадь - 1,56 м2",
        "Размеры (ШхГхВ) - 125х125х180 см",
        "Цена за сутки: 350₽"
      ]
    },
    {
      title: "Эконом плюс",
      listItems: [
        "Площадь - 0.90 м2",
        "Размеры (ШхГхВ) — 90х100х180 см",
        "Цена за сутки: 200₽"
      ]
    },
    {
      title: "Комфорт",
      listItems: [
        "Площадь - 1,13 м2",
        "Размеры (ШхГхВ) - 100х125х180 см",
        "Цена за сутки: 250₽"
      ]
    },
    {
      title: "Сьют",
      listItems: [
        "Площадь - 1,56 м2",
        "Размеры (ШхГхВ) - 125х125х180 см",
        "Цена за сутки: 350₽"
      ]
    }
    
  ];

carouselNext.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselIndicators.length;
  updateCarousel();
});

carouselPrev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselIndicators.length) % carouselIndicators.length;
  updateCarousel();
});

carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      currentIndex = index;
      updateCarousel();
    });
  });


function updateCarousel() {
    const translateX = -currentIndex * slideWidth;
    carouselTrack.style.transform = `translateX(${translateX}px)`;

    const currentSlideData = slideData[currentIndex];    
    roomsBoxTitle.textContent = currentSlideData.title;
    roomsBoxList.innerHTML = ""; // Очищаем список
    currentSlideData.listItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;      
      roomsBoxList.appendChild(li);
    });

    carouselIndicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}
updateCarousel();
