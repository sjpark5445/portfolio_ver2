/**
 * 변수
 */
let headerColor = 'white';

/**
 * 실행
 */
window.addEventListener('DOMContentLoaded', () => {
  setNavScrollPoint();
  setNavTextColor();
  scrollHeaderColor();

  // event
  window.addEventListener('scroll', scrollHeaderColor);
  window.addEventListener('scroll', debounce(() => {
    setNavTextColor();
  }, 30));

  document.querySelector('#mo_toggle').addEventListener('change', setMobileNavCheck);
});

/**
 * 기능 구현
 */

// 스크롤 시 nav 텍스트 색상을 변경해주는 함수
const setNavTextColor = () => {
  const $scrollPoint = document.querySelectorAll('[data-scroll="point"]');
  const winTop = document.scrollingElement.scrollTop; // 현재 스크롤 높이
  const headerHeight = document.querySelector('header').getBoundingClientRect().height + 2; // header로 인해 가려지는 높이만큼 빼주기 위함
  let navIdx = 0; // 색상이 변경될 텍스트의 index번호

  if(winTop < $scrollPoint[0].offsetHeight - headerHeight) {
    // 현재 스크롤 위치가 첫 번째 섹션인 경우
    navIdx = 0;
  } else {

    if(winTop > document.body.scrollHeight - visualViewport.height - headerHeight || winTop >= $scrollPoint[$scrollPoint.length - 1].offsetTop - headerHeight) {
      // 현재 스크롤 위치가 마지막 섹션인 경우
      navIdx = $scrollPoint.length - 1;
    } else {
      // 그 외의 경우 현재 스크롤 위치 구하기
      // 현재 위치한 섹션의 index를 구하기 위해 반복문을 사용한다
      let count = 0;

      for(let i = 1; i < $scrollPoint.length - 1; i++) {
        const isNextPoint = $scrollPoint[i].offsetTop >= winTop + headerHeight;

        if(!isNextPoint) {
          // 현재 스크롤 위치와 섹션 시작점의 높이를 비교하여 이미 지나간 섹션의 숫자만큼 카운트한다
          count++;
        }
      }
      
      navIdx = count;
    }
  }

  changeNavTextColor(navIdx); // 해당하는 nav 리스트의 텍스트 색상 변경
}

// 해당하는 nav 리스트의 텍스트 색상 변경
function changeNavTextColor(navIdx) {
  // pc
  const $navList = document.querySelectorAll('header nav ul li');
  const $navListActive = document.querySelector('header nav ul li.active');

  $navListActive?.classList.remove('active');
  $navList[navIdx].classList.add('active');

  // mobile
  const $navListMo = document.querySelectorAll('.mo_nav nav ul li');
  const $navListActiveMo = document.querySelector('.mo_nav nav ul li.active');

  $navListActiveMo?.classList.remove('active');
  $navListMo[navIdx].classList.add('active');
}


// 선택한 위치로 스크롤 이동
const goScrollPoint = (sectionNum = 0) => {
  const $scrollPoint = document.querySelectorAll('[data-scroll="point"]');
  let movePoint;

  if(sectionNum !== 0) {
    movePoint = $scrollPoint[sectionNum].offsetTop - document.querySelector('header').getBoundingClientRect().height;
  }else {
    movePoint = 0;
  }

  window.scrollTo({
    top: movePoint,
    behavior: 'smooth',
  });

  closeMobileNav(() => {
    document.getElementById('mo_toggle').checked = false;
  });
}

// nav에 스크롤 이동 함수 세팅
const setNavScrollPoint = () => {
  const $navList = document.querySelectorAll('header nav ul li');
  const $navListMo = document.querySelectorAll('.mo_nav nav ul li');
  const arr = [$navList, $navListMo];

  arr.forEach(list => {
    Array.from(list).forEach((item, idx) => {
      item.addEventListener('click', () => {
        goScrollPoint(idx);
      });
    });  
  });
}

// 스크롤 이동 시 헤더 색상 변경
const scrollHeaderColor = () => {
  const $scrollPoint = document.querySelectorAll('[data-scroll="point"]');

  Array.from($scrollPoint).forEach((item, idx) => {
    const winTop = document.scrollingElement.scrollTop; // 현재 스크롤 높이
    const top = item.offsetTop;
    const bot = top + item.offsetHeight;
    
    if(top < winTop && bot > winTop) {
      $scrollPoint[idx].getAttribute('data-bg-color') ? headerColor = 'black' : headerColor = 'white';
    }
  });

  setHeaderColor();
}

// 헤더 색상 변경 함수
function setHeaderColor() {
  const $header = document.querySelector('header');
  const moNavChecked = document.getElementById('mo_toggle').checked;

  if(headerColor == 'black' && !moNavChecked) {
    $header.classList.add('black');
  }else {
    $header.classList.remove('black');
  }
}

// 헤더 모바일 nav toggle
const setMobileNavCheck = () => {
  const moNavChecked = document.getElementById('mo_toggle').checked;
  moNavChecked ? openMobileNav() : closeMobileNav();
}

// 헤더 모바일 nav open
function openMobileNav() {
  const $moNav = document.querySelector('.mo_nav');
  const $header = document.querySelector('header');

  lockBodyScroll();
  $moNav.classList.add('active');
  $header.classList.remove('black');
}

// 헤더 모바일 nav close
function closeMobileNav(callback) {
  const $moNav = document.querySelector('.mo_nav');

  runBodyScroll(); // body scroll잠금 해제
  setHeaderColor(); // 헤더 컬러 원상복구
  $moNav.classList.remove('active'); // 모바일 nav 숨기기
  callback && callback();
}