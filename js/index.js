/**
 * 변수
 */
let swiper = new Swiper("#mockupSlider", {
  pagination: {
    el: "#mockupSlider .swiper-pagination",
  },
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

/**
 * 실행부
 */
window.addEventListener('DOMContentLoaded', () => {
  
});

window.addEventListener('load', () => {
  viewPortfolioTitle();
});

/**
 * 기능구현
 */

// 포트폴리오 제목 노출
const viewPortfolioTitle = () => {
  const title = document.querySelectorAll('[data-main-visual="title"]');
  const titleColorTeal = title[0].classList.contains('point_teal');

  // 타이틀 색상 토글
  if(titleColorTeal) {
    title[0].classList.remove('point_teal');
    title[0].classList.add('point_magenta');
  }else {
    title[0].classList.remove('point_magenta');
    title[0].classList.add('point_teal');
  }

  Array.from(title).forEach(item => {
    item.classList.add('active');
  });

  setTimeout(() => {
    Array.from(title).forEach(item => {
      item.classList.remove('active');
    });

    setTimeout(() => {
      viewPortfolioTitle();
    }, 2000);
  }, 3500);
}