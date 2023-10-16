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
window.addEventListener("DOMContentLoaded", () => {});

window.addEventListener("load", () => {
  viewPortfolioTitle();
});

/**
 * 기능구현
 */

// 포트폴리오 제목 노출
const viewPortfolioTitle = () => {
  const title = document.querySelectorAll('[data-main-visual="title"]');
  const titleColorTeal = title[0].classList.contains("point_teal");

  // 타이틀 색상 토글
  if (titleColorTeal) {
    title[0].classList.remove("point_teal");
    title[0].classList.add("point_magenta");
  } else {
    title[0].classList.remove("point_magenta");
    title[0].classList.add("point_teal");
  }

  Array.from(title).forEach((item) => {
    item.classList.add("active");
  });

  setTimeout(() => {
    Array.from(title).forEach((item) => {
      item.classList.remove("active");
    });

    setTimeout(() => {
      viewPortfolioTitle();
    }, 2000);
  }, 3500);
};

function tabChange(obj = 0) {
  const $tabHeaderAll = document.querySelectorAll(`.tab_header [data-tab-num]`);
  const $tabBodyAll = document.querySelectorAll(`.tab_body[data-tab-num]`);
  let tabNum;

  obj ? (tabNum = obj.dataset.tabNum) : (tabNum = 0);

  Array.from($tabBodyAll).forEach((item, idx) => {
    if (item.dataset.tabNum == tabNum) {
      item.style.display = "block"; // 활성화된 탭 보여주기
      $tabHeaderAll[idx].classList.add("active"); // 활성화된 탭 색상 변경
    } else {
      item.style.display = "none"; // 활성화된 탭이 아니면 가려주기
      $tabHeaderAll[idx].classList.remove("active"); // 활성화된 탭이 아니면 색상 제거
    }
  });
}
