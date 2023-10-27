//// data
// project data
const project = [
  {
    text: [
      "주식회사 더이룬",
      "약 2주",
      "mo.js / multirange.js / AOS.js / sweetAlert2",
      "https://e-roon.com",
      "밝고 청량한 느낌을 줄 수 있는 디자인을 채택",
      "청량함을 더해줄 흰색 바탕에 푸른 포인트 색상을 사용",
      '제가 근무했던 회사인 하늘씨앤아이의 홈페이지를 리뉴얼 하였습니다. 사이트 기획, 와이어프레임, 디자인부터 퍼블리싱까지 모두 직접 구현하였으며 "번잡하지 않으면서도 밋밋하지는 않은 디자인으로 만들어달라"는 요청이 있었기 때문에 벡터이미지와 css, js를 이용해 글자가 쓰여지는 애니메이션을 구현하여 메인비주얼에 포인트로 사용하고 pc화면의 footer에는 파도가 치는듯한 애니메이션을 삽입하였습니다. 추가로 mo.js를 도입하여 contact페이지의 체크박스 애니메이션을 구현하였습니다.',
      "",
    ],
    images: [
      "./image/content/eroon_cont1.png",
      "./image/content/eroon_cont2.png",
      "./image/content/eroon_cont3.png",
      "./image/content/eroon_cont4.png",
      "./image/content/eroon_cont5.png",
    ],
    contribute: [100, 100, 100, 80],
    color: ["#0189ff", "#00a4e5", "#fff"],
  },
  {
    text: [
      "톤즈 클리닉 & 톤 스파앤리조트",
      "약 1개월",
      "swiper.js / AOS.js / Datepicker / Kakao Map API / YouTube Data API / sweetAlert2",
      "http://tonesclinic.com/incheon",
      "단순한 오픈과 확장이 아닌, 지속적인 관리와 꾸준한 도움을 중점으로 하는 톤즈 클리닉의 반응형 웹사이트와 관리자 전용 페이지. 톤즈 클리닉의 운영방침에 맞는 청결하고 신뢰감 있는 이미지를 표현",
      "청결함을 표현할 수 있는 흰색 바탕과 로고 색상을 이용한 포인트",
      "이벤트, 사랑나눔 등 일부 서브페이지 및 모바일 UI를 디자인하였고, 관리자를 제외한 전체 페이지를 퍼블리싱 하였습니다. swiper, aos, datepicker등 여러 라이브러리 사용 경험과 kakao지도 api, youtube iframe api, 자체 예약 서비스api 등 다양한 api사용 경험을 얻을 수 있었습니다.",
      "",
    ],
    images: [
      "./image/content/tones_cont1.png",
      "./image/content/tones_cont2.png",
      "./image/content/tones_cont3.png",
      "./image/content/tones_cont4.png",
      "./image/content/tones_cont5.png",
    ],
    contribute: [100, 100, 80, 30],
    color: ["#E40031", "#A7213E", "#fff"],
  },
  {
    text: [
      "버추얼 유튜버 플랫폼 VLYFT",
      "약 1개월",
      "swiper.js / FullCalendar / Quill / sweetAlert2",
      "https://vlyft.com",
      "VLYFY의 밝고 화려한 특성은 살리고 가독성은 좋은 레이아웃을 위해 사용자의 시선의 흐름에 맞춘 디자인 구성",
      "채도가 높은 컬러를 통해 크리에이터 세계의 창의적이고 생동적인 느낌 표현",
      "외주 프로젝트에서 디자인 시안을 맡게 된 첫 프로젝트입니다. 관리자페이지를 통한 뉴스레터 및 이미지삽입, 멤버 일정관리가 가능한 사이트로 만들어졌습니다. 게시판기능 및 라이브러리, 관련 UI에 대한 이해도를 높일 수 있던 좋은 경험이 되었습니다.",
      "관리자페이지에서 고용량의 이미지 첨부를 하는 경우 사이트 로딩속도가 느려지는 경우가 있어, 해당 문제에 대한 솔루션을 추가할 수 있었다면 더 좋지 않았을까 하는 아쉬움이 남는 프로젝트입니다.",
    ],
    images: [
      "./image/content/vlyft_cont1.png",
      "./image/content/vlyft_cont2.png",
      "./image/content/vlyft_cont3.png",
      "./image/content/vlyft_cont4.png",
      "./image/content/vlyft_cont5.png",
    ],
    contribute: [100, 100, 90, 100],
    color: ["#348bfc", "#b78afc", "#b78afc"],
  },
  {
    text: [
      "메타버스 플랫폼 AUMSSA",
      "약 1주",
      "swiper.js",
      "현재 사용 가능한 URL이 없습니다.",
      "고대 징표 ‘함사’를 현대적으로 재해석하며 힐링 커뮤니티를 구축하는 옴사의 다양성과 우주의 신비함 표현",
      "고대의 기운, ‘함사’를 상징하는 신비로운 보라색 컬러 사용",
      "처음으로 외부 디자이너에게 시안을 전달받아 작업했던 프로젝트입니다. 제작 일정이 짧고 해당 디자이너와 소통할 수 있는 방법이 제한되어 다소 어려움이 많았던 프로젝트였습니다.",
      "ios에서의 video태그 관련 문제, gradient위주의 테이블 디자인, 모바일 브라우저에서의 폰트 가독성의 문제, swiper 라이브러리 응용 등 여러 문제를 겪었고, 소통이 힘든 상황에서 발생한 문제들에 대한 해결능력과 임기응변을 키울 수 있는 좋은 기회가 되었습니다.",
    ],
    images: [
      "./image/content/aumssa_cont1.png",
      "./image/content/aumssa_cont2.png",
      "./image/content/aumssa_cont3.png",
      "./image/content/aumssa_cont4.png",
      "./image/content/aumssa_cont5.png",
    ],
    contribute: [100, 100, 90, 0],
    color: ["#6d4aa3", "#00c7c8", "#010221"],
  },
  {
    text: [
      "그로서리펍 스낵얌",
      "약 1개월",
      "AOS.js / swiper.js / Naver Map API v3 / sweetAlert2",
      "https://snackyam.kr",
      "그로서리펍 스낵얌의 로고에 어울리는 통통튀는 분위기를 표현",
      "대조되는 색상을 이용해 펍, 푸드영역을 구분하고자 함",
      "이 프로젝트는 웹디자이너가 아닌 디자이너의 작업물을 받아 제작했습니다. 웹에 적합하지 않은 디자인 작업 방식 때문에 작업에 있어 많은 어려움이 있었으나 작업물을 하루 내지 이틀마다 공유해가며 적극적으로 소통과 의견수렴을 하여 기한 내에 사이트를 완성할 수 있었습니다.",
      "해당 프로젝트를 진행하며 작업자 간 적극적인 소통이 얼마나 중요한지에 대해 깨달을 수 있었습니다.",
    ],
    images: [
      "./image/content/snackyam_cont1.png",
      "./image/content/snackyam_cont2.png",
      "./image/content/snackyam_cont3.png",
      "./image/content/snackyam_cont4.png",
      "./image/content/snackyam_cont5.png",
    ],
    contribute: [100, 100, 80, 10],
    color: ["#cc2127", "#7433cb", "#FFCA48"],
  },
  {
    text: [
      "WATRO 포토카드",
      "약 6개월",
      "browser-image-compression / swiper.js / sweetAlert2",
      "현재 사용 가능한 URL이 없습니다.",
      "심플한 디자인을 원하는 고객의 요청 반영",
      "무채색 기반의 디자인에 포인트컬러는 관리자 페이지에서 색상을 직접 설정할 수 있도록 작업됨",
      "해당 프로젝트는 이미지를 업로드하고 인증번호를 부여받을 수 있는 모바일 웹과, 이미지를 꾸미고 카드를 출력 가능한 키오스크, 출력한 카드의 QR코드를 통해 접근 가능한 다이어리 페이지로 이루어진 프로젝트였습니다. html canvas, js를 이용해 카드 뒷면을 꾸밀 수 있는 그림판 기능을 구현하고, 첨부한 이미지를 이용해 동적인 UI를 생성하며 이미지 전송간 발생하는 딜레이 문제를 js이미지 압축 라이브러리를 이용하여 용량제어를 통해 해결하는 등 프로젝트 진행 간 자바스크립트 실력을 향상시킬 수 있는 다양한 경험을 할 수 있었습니다.",
      "",
    ],
    images: ["./image/content/watro1.jpg", "./image/content/watro2.jpg", "./image/content/watro3.jpg", "./image/content/watro4.jpg"],
    contribute: [100, 100, 50, 0],
    color: ["#ffffff", "#cccccc", "#000000"],
  },
  {
    text: [
      "N15 스타트업 이노베이션",
      "약 2개월",
      "AOS.js",
      "현재 사용 가능한 URL이 없습니다.",
      "고객이 전달한 이미지 및 영상, 아이콘 위주의 디자인",
      "무채색과 무거운 느낌의 컬러를 주로 사용",
      "기업 N15과 협업할 스타트업을 찾고, 해당 스타트업을 소개하는 랜딩형 페이지를 제작했습니다. 아이콘과 로고를 이용한 표현이 많았고, 간단한 효과와 홍보영상이 포함된 페이지로 작업하였습니다.",
      "",
    ],
    images: ["./image/content/dl1.jpg", "./image/content/dl2.jpg", "./image/content/dl3.jpg"],
    contribute: [100, 100, 20, 0],
    color: ["#ffffff", "#eeeeee", "#0b233f"],
  },
  {
    text: [
      "대한민국 전자 여행 허가 신청 K-ETA",
      "약 3개월",
      "AOS.js, swiper.js",
      "현재 사용 가능한 URL이 없습니다.",
      "서비스 이용 방법을 강조할 수 있게 디자인",
      "신뢰감을 줄 수 있는 무게감 있는 푸른색 사용",
      "외국인을 타켓으로 한 전자 여행 허가 신청 서비스 K-ETA의 반응형 홈페이지를 제작했습니다. 디자인의 경우 메인페이지 일부, 주로 서브페이지를 진행하였으며 다국어 지원이 필요한 사이트였기 때문에, 사용 언어가 바뀔 때 폰트나 UI가 깨지지 않는 것에 중점을 두고 작업하였습니다.",
      "",
    ],
    images: ["./image/content/keta1.jpg"],
    contribute: [100, 100, 80, 0],
    color: ["#ffffff", "#e6efff", "#17469e"],
  },
  {
    text: [
      "내 주변 병원찾기 서비스 MEDIC",
      "약 3개월",
      "Kakao Map API",
      "현재 사용 가능한 URL이 없습니다.",
      "하이브리드 앱으로 기획되어 pc보다는 모바일에 최적화된 디자인",
      "병원의 이미지를 연상할 수 있는 흰색 베이스로 작업",
      "주변 병원 정보를 찾아주는 앱 서비스 MEDIC의 프로토타입을 작업했습니다. 로그인과 병원 세부정보 페이지를 작업했으며, 이후 보수작업과 디자인 수정작업, 그리고 앱스토어 허가를 위해 추가적으로 들어가야 할 요소들을 작업했습니다.",
      "",
    ],
    images: ["./image/content/medic4.jpg", "./image/content/medic2.jpg", "./image/content/medic3.jpg", "./image/content/medic1.jpg"],
    contribute: [30, 30, 30, 0],
    color: ["#ffffff", "#eff8ff", "#005291"],
  },
  {
    text: [
      "글로벌 성형 비교 견적 플랫폼 wooah(prototype)",
      "약 1주",
      "swiper.js",
      "현재 사용 가능한 URL이 없습니다.",
      "시술 전,후를 비교하기 좋은 UI로 구성",
      "브랜드 컬러를 적극 활용하여 작업",
      "국내 사용자가 아닌 해외 관광객을 타겟으로 한 성형비교견적 플랫폼 wooah입니다. 해당프로젝트는 투자유치를 위한 프로토타입으로, 웹뷰를 이용한 하이브리드 앱으로 제작되었습니다. 제작 기한이 넉넉하지 않았기 때문에 공통으로 사용할 UI를 다수 만들며 작업효율을 끌어올릴 수 있었습니다.",
      "",
    ],
    images: ["./image/content/wooah1.jpg", "./image/content/wooah2.jpg", "./image/content/wooah3.jpg", "./image/content/wooah4.jpg"],
    contribute: [100, 100, 100, 0],
    color: ["#ffffff", "#8f898a", "#ff6598"],
  },
  {
    text: [
      "EDWARD 사내 카페 시스템",
      "약 2주",
      "사용된 라이브러리가 없습니다.",
      "현재 사용 가능한 URL이 없습니다.",
      "카페를 연상하는 이미지와 체크박스 디자인, 키오스크 화면을 기반으로 작업",
      "브랜드 컬러를 적극 활용한 작업",
      "EDWARD 사내 카페 시스템의 화면단을 작업했습니다. JQuery를 사용하지 말아달라는 요청사항이 있어 순수 js로만 작업했기 때문에, js에 대한 이해도를 높이는 데 도움이 되었던 프로젝트입니다. PC ~ 노트북해상도, 키오스크를 지원하며, 키오스크 화면을 기반으로 UI를 제작하였습니다.",
      "",
    ],
    images: ["./image/content/cafe1.jpg", "./image/content/cafe2.jpg"],
    contribute: [100, 100, 100, 100],
    color: ["#ffffff", "#f2f2f2", "#d11e24"],
  },
];

// 실행
window.addEventListener("DOMContentLoaded", () => {
  // event
  document.querySelectorAll(".project_list li > a").forEach((item) => {
    item.addEventListener("click", openProjectPopup);
  });
});

// 프로젝트 팝업 열기 :: main
const openProjectPopup = (e) => {
  const $projectPop = document.querySelector(".project_pop");
  const idx = [...document.querySelectorAll(".project_list li")].indexOf(e.currentTarget.parentNode);

  lockBodyScroll();
  $projectPop.classList.add("active");
  $projectPop.scrollTo({ top: 0 }); // 스크롤 초기화
  tabChange(); // 활성화 탭 초기화
  changePopText(idx); // 팝업 내부 텍스트 변경
  changePopImage(idx); // 팝업 이미지 교체
};

// 프로젝트 팝업 열기 :: sub routine :: start

// 팝업 내부 텍스트 변경
function changePopText(idx) {
  const $projectCont = document.querySelectorAll("[data-project-cont]");
  const $projectLink = document.querySelector("[data-project-cont='link']");
  const $gage = document.querySelectorAll("[data-graph-name]");
  const $colorDot = document.querySelectorAll(".color_dot");

  for (let i = 0; i < $projectCont.length; i++) {
    $projectCont[i].innerText = project[idx].text[i];

    if (project[idx].text[3] == "현재 사용 가능한 URL이 없습니다.") {
      $projectCont[i].href = "javascript:void(0);";
      $projectCont[i].removeAttribute("target");
      $projectLink.classList.add("link_none");
    } else {
      $projectCont[i].href = project[idx].text[3];
      $projectCont[i].setAttribute("target", "_blank");
      $projectLink.classList.remove("link_none");
    }
  }

  for (let i = 0; i < $gage.length; i++) {
    $gage[i].querySelector(".gage").style.width = project[idx].contribute[i] + "%";
    $gage[i].setAttribute("data-percent", project[idx].contribute[i] + "%");
  }

  for (let i = 0; i < $colorDot.length; i++) {
    $colorDot[i].style.backgroundColor = project[idx].color[i];
  }
}

// 팝업 이미지 교체
function changePopImage(idx) {
  const images = project[idx].images;
  // swiper내부 이미지 초기화
  swiper.removeAllSlides();
  // swiper내부 이미지 생성
  images.forEach((image, i) => {
    swiper.appendSlide(`<div class="swiper-slide"><img src="${image}" alt="프로젝트 이미지${i}"></div>`);
  });
  // swiper update
  swiper.update();
  swiper.autoplay.start();
}
