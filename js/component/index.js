//// data
// project data
const project = [
  {
    text: [
      '주식회사 더이룬',
      '약 2주',
      'mo.js / multirange.js / AOS.js',
      'https://e-roon.com',
    ],
    images: [
      './image/content/eroon_cont1.png',
      './image/content/eroon_cont2.png',
      './image/content/eroon_cont3.png',
      './image/content/eroon_cont4.png',
      './image/content/eroon_cont5.png',
    ],
    contribute: [
      100,
      100,
      100,
      80,
    ],
  },
  {
    text: [
      '톤즈 클리닉 & 톤 스파앤리조트',
      '약 1개월',
      'swiper.js / AOS.js / Datepicker / Kakao 지도 API / YouTube Data API',
      'http://tones-clinic.com',
    ],
    images: [
      './image/content/tones_cont1.png',
      './image/content/tones_cont2.png',
      './image/content/tones_cont3.png',
      './image/content/tones_cont4.png',
      './image/content/tones_cont5.png',
    ],
    contribute: [
      100,
      100,
      80,
      30,
    ],
  },
  {
    text: [
      '그로서리펍 스낵얌',
      '약 1개월',
      'AOS.js / swiper.js / 네이버 지도 API v3',
      'https://snackyam.kr',
    ],
    images: [
      './image/content/snackyam_cont1.png',
      './image/content/snackyam_cont2.png',
      './image/content/snackyam_cont3.png',
      './image/content/snackyam_cont4.png',
      './image/content/snackyam_cont5.png',
    ],
    contribute: [
      100,
      100,
      80,
      10,
    ],
  },
  {
    text: [
      '버추얼 유튜버 플랫폼 VLYFT',
      '약 1개월',
      'swiper.js / FullCalendar / Quill',
      'https://vlyft.com',
    ],
    images: [
      './image/content/vlyft_cont1.png',
      './image/content/vlyft_cont2.png',
      './image/content/vlyft_cont3.png',
      './image/content/vlyft_cont4.png',
      './image/content/vlyft_cont5.png',
    ],
    contribute: [
      100,
      100,
      90,
      100,
    ],
  },
  {
    text: [
      '메타버스 플랫폼 AUMSSA',
      '약 1주',
      'swiper.js',
      'https://aumssa.com',
    ],
    images: [
      './image/content/aumssa_cont1.png',
      './image/content/aumssa_cont2.png',
      './image/content/aumssa_cont3.png',
      './image/content/aumssa_cont4.png',
      './image/content/aumssa_cont5.png',
    ],
    contribute: [
      100,
      100,
      90,
      0,
    ],
  },
];

// 실행
window.addEventListener('DOMContentLoaded', () => {
  // event
  document.querySelectorAll('.project_list li > a').forEach(item => {
    item.addEventListener('click', openProjectPopup);
  });
});


// 프로젝트 팝업 열기 :: main
const openProjectPopup = e => {
  const $projectPop = document.querySelector('.project_pop');
  const idx = [...document.querySelectorAll('.project_list li')].indexOf(e.currentTarget.parentNode);

  const openFn = () => {
    $projectPop.classList.add('active');
    lockBodyScroll(); // body 스크롤 잠금
  }

  changePopText(idx); // 팝업 내부 텍스트 변경
  changePopImage(idx, openFn); // 팝업 이미지 교체
}

// 프로젝트 팝업 열기 :: sub func :: start

// 팝업 내부 텍스트 변경
function changePopText(idx) {
  const $projectCont = document.querySelectorAll('[data-project-cont]');
  const $gage = document.querySelectorAll('[data-graph-name]');

  for(let i = 0; i < $gage.length; i++) {
    $projectCont[i].innerText = project[idx].text[i];
    $projectCont[i].href = project[idx].text[3];
    $gage[i].querySelector('.gage').style.width = project[idx].contribute[i] + '%';
    $gage[i].setAttribute('data-percent', project[idx].contribute[i] + '%');
  };
}

// 팝업 이미지 교체
function changePopImage(idx, callback) {
  let $projectImageBox = document.querySelectorAll('[data-swiper-slide-index]');
  let imgCount = $projectImageBox.length - 1;
  let loadCount = 0;

  Array.from($projectImageBox).forEach(item => {
    const $img = item.querySelector('img');
    const boxIdx = item.getAttribute('data-swiper-slide-index');

    const imgLoadFunc = () => {
      if(imgCount == loadCount) {
        // 교체된 이미지가 모두 로드된 후 실행될 함수
        callback();
      } else {
        loadCount++;
      }

      $img.removeEventListener('load', imgLoadFunc);
    }

    $img.src = project[idx].images[boxIdx];
    $img.addEventListener('load', imgLoadFunc);
  });
}
// 프로젝트 팝업 열기 :: sub func :: end
