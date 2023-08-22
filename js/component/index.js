//// data
// project data
const project = [
  {
    text: [
      '주식회사 더이룬',
      '약 2주',
      'mo.js / multirange.js / AOS.js',
      'https://e-roon.com',
      '밝고 청량한 느낌을 줄 수 있는 디자인을 채택',
      '청량함을 더해줄 흰색 바탕에 푸른 포인트 색상을 사용',
      '이전 회사인 "하늘씨앤아이"의 홈페이지를 리뉴얼하였습니다. 사이트 구성, 와이어프레임, 디자인 전반, 퍼블리싱까지 전반적인 제작에 참여하였습니다. 메인 비주얼에 SVG를 이용한 글자 필기 애니메이션을 적용해 너무 밋밋하지 않으면서도 단조로워보이지 않게 작업하였습니다.',
      '',
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
    color : ['#0189ff', '#00a4e5', '#fff'],
  },
  {
    text: [
      '톤즈 클리닉 & 톤 스파앤리조트',
      '약 1개월',
      'swiper.js / AOS.js / Datepicker / Kakao 지도 API / YouTube Data API',
      'http://tones-clinic.com',
      '단순한 오픈과 확장이 아닌, 지속적인 관리와 꾸준한 도움을 중점으로 하는 톤즈 클리닉의 반응형 웹사이트와 관리자 전용 페이지. 톤즈 클리닉의 운영방침에 맞는 청결하고 신뢰감 있는 이미지를 표현',
      '청결함을 표현할 수 있는 흰색 바탕과 로고 색상을 이용한 포인트',
      '이벤트, 사랑나눔 등 몇몇 서브페이지를 디자인하였고 관리자를 제외한 전체 페이지 퍼블리싱을 맡았습니다. 지점 수가 많아짐에 따라 반복되는 코드를 효율적으로 정리하는 법을 익힐 수 있었고, API를 이용한 기능구현 역량을 키울 수 있었던 프로젝트였습니다.',
      '사이트가 지속적으로 리뉴얼되며 더 이상 사용되지 않는 페이지가 늘어 많은 부분을 보여드리지 못하는 점이 아쉽습니다.',
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
    color : ['#E40031', '#A7213E', '#fff'],
  },
  {
    text: [
      '버추얼 유튜버 플랫폼 VLYFT',
      '약 1개월',
      'swiper.js / FullCalendar / Quill',
      'https://vlyft.com',
      'VLYFY의 밝고 화려한 특성은 살리고 가독성은 좋은 레이아웃을 위해 사용자의 시선의 흐름에 맞춘 디자인 구성',
      '채도가 높은 컬러를 통해 크리에이터 세계의 창의적이고 생동적인 느낌 표현',
      '달력 라이브러리 커스텀 작업을 경험해 볼 수 있는 프로젝트였습니다.',
      '고용량의 이미지가 많아 사이트가 느려지는 부분이 있는데, 이미지 압축 라이브러리를 적용했으면 어땠을까 하는 아쉬움이 남는 프로젝트입니다.',
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
    color : ['#348bfc', '#b78afc', '#b78afc'],
  },
  {
    text: [
      '메타버스 플랫폼 AUMSSA',
      '약 1주',
      'swiper.js',
      'https://aumssa.com',
      '고대 징표 ‘함사’를 현대적으로 재해석하며 힐링 커뮤니티를 구축하는 옴사의 다양성과 우주의 신비함 표현',
      '고대의 기운, ‘함사’를 상징하는 신비로운 보라색 컬러 사용',
      '처음으로 외부 디자이너의 작업물을 받아서 진행했던 프로젝트입니다. 소통이 힘든 상황에서 작업하는 요령을 익힐 수 있었습니다.',
      '',
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
    color : ['#6d4aa3', '#00c7c8', '#010221'],
  },
  {
    text: [
      '그로서리펍 스낵얌',
      '약 1개월',
      'AOS.js / swiper.js / 네이버 지도 API v3',
      'https://snackyam.kr',
      '그로서리펍 스낵얌의 로고에 어울리는 통통튀는 분위기를 표현',
      '대조되는 색상을 이용해 펍, 푸드영역을 구분하고자 함',
      '자바스크립트 위치 계산, 메타태그를 사용한 SEO작업, youtube iframe api 사용에 대한 이해력을 높일 수 있는 프로젝트였습니다.',
      '잦은 기획 변경과 일정 압박으로 인해 유지보수 최적화 관점에서 아쉬움이 남습니다.',
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
    color : ['#cc2127', '#7433cb', '#FFCA48'],
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
  const $loadingPop = document.querySelector('.loading_pop');
  const idx = [...document.querySelectorAll('.project_list li')].indexOf(e.currentTarget.parentNode);
  const isLoaded = e.currentTarget.dataset.loaded;

  // 이미 로드된 적 없는 프로젝트인 경우 로딩 이미지 띄워주기
  !isLoaded ? $loadingPop.classList.add('active') : e.currentTarget.dataset.loaded = 'loaded';
  
  const openFn = () => {
    $projectPop.classList.add('active');
    $loadingPop.classList.remove('active'); // 로딩 이미지 닫기
    lockBodyScroll(); // body 스크롤 잠금
  }

  changePopText(idx); // 팝업 내부 텍스트 변경
  changePopImage(idx, openFn); // 팝업 이미지 교체
  tabChange(); // 활성화 탭 초기화
  $projectPop.scrollTo({top: 0}); // 스크롤 초기화
}

// 프로젝트 팝업 열기 :: sub func :: start

// 팝업 내부 텍스트 변경
function changePopText(idx) {
  const $projectCont = document.querySelectorAll('[data-project-cont]');
  const $gage = document.querySelectorAll('[data-graph-name]');
  const $colorDot = document.querySelectorAll('.color_dot');

  for(let i = 0; i < $projectCont.length; i++) {
    $projectCont[i].innerText = project[idx].text[i];
    $projectCont[i].href = project[idx].text[3];
  };

  for(let i = 0; i < $gage.length; i++) {
    $gage[i].querySelector('.gage').style.width = project[idx].contribute[i] + '%';
    $gage[i].setAttribute('data-percent', project[idx].contribute[i] + '%');
  };

  for(let i = 0; i < $colorDot.length; i++) {
    $colorDot[i].style.backgroundColor = project[idx].color[i];
  }
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
