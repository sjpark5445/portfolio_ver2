/**
 * 전역변수
 */
const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
const isAndroid = /Android/i.test(window.navigator.userAgent);
const isApple = /iPhone|iPad|iPod/i.test(window.navigator.userAgent);
const isKakao = /KAKAOTALK/i.test(window.navigator.userAgent);
const isSamsung = /SAMSUNG/i.test(window.navigator.userAgent);
const isNaver = /NAVER/i.test(window.navigator.userAgent);
const EMAIL_KEY = "A2cE-NCa-WUFwLURD";

const moBrowserMap = [
  { logic: isAndroid, className: 'android-browser' },
  { logic: isApple, className: 'safari-browser' },
  { logic: isKakao, className: 'kakao-browser' },
  { logic: isSamsung, className: 'samsung-browser' },
  { logic: isNaver, className: 'naver-browser' },
];

/**
 * 실행
 */
window.addEventListener('DOMContentLoaded', () => {
  doNotCall();
  detectMobileBrowser();
  emailjs.init(EMAIL_KEY);

  // event
  document.body.addEventListener('click', clickAnimation);
});

/**
 * 기능 구현
 */

// 모바일 환경이 아닌 경우 전화하기 비활성화
function doNotCall() {
  if(!isMobile) {
    const $callBtn = document.querySelector('.call_btn');

    $callBtn.href = "javascript:sweetAlert('warning', '모바일 환경에서 이용하실 수 있습니다.')";
  }
}

// mojs 라이브러리 클릭애니메이션
const CIRCLE_RADIUS = 20;
const RADIUS = 32;
const circle = new mojs.Shape({
  left: 0, top: 0,
  stroke:   { '#ff0081' : '#8b03ff' },
  strokeWidth: { [2 * CIRCLE_RADIUS] : 0 },
  fill:       'none',
  scale:      { 0: 1 },
  radius:     CIRCLE_RADIUS,
  duration:   400,
  easing:     'cubic.out'
});

const burst = new mojs.Burst({
  left: 0, top: 0,
  radius:   { 4: RADIUS },
  angle:    45,
  count:    14,
  timeline: { delay: 300 },
  children: {
    radius:       2.5,
    fill:         [
      { '#ff0081' : '#ff0081' },
      { '#8b03ff' : '#8b03ff' },

      { '#ff0081' : '#ff0081' },
      { '#faeb2c' : '#faeb2c' },
      
      { '#faeb2c' : '#faeb2c' },
      { '#27d4b6' : '#27d4b6' },
      
      { '#8b03ff' : '#8b03ff' },
      { '#ff0081' : '#ff0081' },
      
      { '#faeb2c' : '#faeb2c' },
      { '#27d4b6' : '#27d4b6' },
      
      { '#27d4b6' : '#27d4b6' },
      { '#ff0081' : '#ff0081' },

      { '#faeb2c' : '#faeb2c' },
      { '#27d4b6' : '#27d4b6' },
    ],
    scale:        { 1: 0, easing: 'quad.in' },
    pathScale:    [ .8, null ],
    degreeShift:  [ 13, null ],
    duration:     [ 500, 700 ],
    easing:       'quint.out',
    // speed: .1
  }
});

// 클릭 애니메이션
const clickAnimation = e => {
  const effectNone = e.target.getAttribute('data-mo-effect');

  // 만약 data-mo-effect가 none이라면 실행하지 않음
  if(effectNone == 'none') {
    return false;
  }

	const coords = { x: e.pageX, y: e.pageY };

	burst.tune(coords).replay();  
  circle.tune(coords).replay();
}

// 이메일 팝업 열기
function openEmailForm() {
  const $emailPop = document.querySelector('.email_pop');
  $emailPop.style.display = 'flex';
  lockBodyScroll();

  setTimeout(() => {
    $emailPop.querySelector('.inner_wrap').classList.add('active');
  }, 100);
}

// 이메일 팝업 닫기
const closeEmailForm = () => {
  const $emailPop = document.querySelector('.email_pop');
  $emailPop.style.display = 'none';
  $emailPop.querySelector('.inner_wrap').classList.remove('active');
  runBodyScroll();
}

// 이메일 보내기
function sendEmail(obj) {
  // form data 검증
  const confirm = confirmEmailForm();

  if(confirm?.callback) {
    // 필수값이 모두 들어있지 않은 경우
    confirm.callback();
    return false;
  } else {
    // 검증 완료된 폼을 전송
    const $loadingPop = document.querySelector('.loading_pop');
    // email js key값
    const SERVICE_ID = 'service_y1f5vfg';
    const TEMPLATE_ID = 'template_feu0pkq';

    // 중복 전송 방지 & 로딩중 팝업 띄우기
    obj.classList.add('loading');
    obj.innerText = '전송중';
    $loadingPop.classList.add('active');

    emailjs.send(SERVICE_ID, TEMPLATE_ID, confirm.formData, EMAIL_KEY)
    .then(res => {
        sweetAlert('success', '메일이 발송되었습니다.', closeEmailForm);

        // form 초기화
        const $formArr = [...document.querySelectorAll('.email_pop input'), ...document.querySelectorAll('.email_pop textarea')];

        $formArr.forEach(item => {
          item.value = '';
        });

        // 버튼 초기화
        obj.classList.remove('loading');
        obj.innerText = '발송';
        $loadingPop.classList.remove('active');
      },
      error => {
        sweetAlert('error', '메일 발송에 실패했습니다.');
        console.log(error);

        // 버튼 초기화
        obj.classList.remove('loading');
        obj.innerText = '발송';
        $loadingPop.classList.remove('active');
      });
    }
}

// 이메일 양식 확인
function confirmEmailForm() {
  const confirmMap = getConfirmMap(); // 조건식 가져오기
  let result = {}; // 조건에 맞지 않을 시 경고창 띄우는 함수 & return 여부를 반환

  for(let i = 0; i < confirmMap.length; i++) {
    if(confirmMap[i].logic) {
      // 검증을 통과하지 못한 경우 사용할 함수를 result에 담아주기
      result.callback = () => { 

        // alert메시지를 띄워주는 함수
        sweetAlert('error', confirmMap[i].alertMsg, () => {

          // alert창의 확인버튼을 클릭하면 delay 이후 포커스 함수 실행
          setTimeout(() => {
            confirmMap[i].focus?.focus();
          }, 500);

        })
      };

      return result;
    }
  };

  // 검증에 통과한 경우 email 내용 담아주기
  result.formData = {
    name : document.querySelector('[name="name"]').value,
    phone : document.querySelector('[name="phone"]').value,
    email : document.querySelector('[name="email"]').value,
    text : document.querySelector('[name="text"]').value,
  };
  
  return result;
}

// 이메일 양식 확인할 map 가져오기
function getConfirmMap() {
  // 정규식
  const regTelPhone= /^\d{2,3}-\d{3,4}-\d{4}$/;
  const regPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;
  const regEmail= /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;

  // {메시지, 포커스할 element, 조건식}
  const confirmMap = [
    { 
      // 이름이 공백일 때
      alertMsg: '기업명을 입력해 주세요.',
      focus: document.querySelector('[name="name"]'),
      logic : document.querySelector('[name="name"]').value == ""
    },
    { 
      // 전화번호가 공백일 때
      alertMsg: '전화번호를 입력해 주세요.',
      focus: document.querySelector('[name="phone"]'),
      logic : document.querySelector('[name="phone"]').value == ""
    },
    { 
      // 전화번호 양식이 맞지 않을 때
      alertMsg: '전화번호 양식을 확인해 주세요.',
      focus: document.querySelector('[name="phone"]'),
      logic : !regTelPhone.test(document.querySelector('[name="phone"]').value) && !regPhone.test(document.querySelector('[name="phone"]').value) && isNaN(Number(document.querySelector('[name="phone"]').value))
    },
    { 
      // 이메일 양식이 맞지 않을 때
      alertMsg: '이메일 양식을 확인해 주세요.',
      focus: document.querySelector('[name="email"]'),
      logic : !regEmail.test(document.querySelector('[name="email"]').value) && document.querySelector('[name="email"]').value != ''
    },
    { 
      // 문의 내용이 없을 때
      alertMsg: '내용을 입력해 주세요.',
      focus: document.querySelector('[name="text"]'),
      logic : document.querySelector('[name="text"]').value == ""
    },
  ];

  return confirmMap;
}


// === 기본 함수 ================================================================================================================================================================

// 함수가 너무 자주 실행되지 않도록 제한(마지막으로 실행된 함수만)
function debounce(callback, limit = 100) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
          callback.apply(this, args);
      }, limit);
  }
}

// 함수가 너무 자주 실행되지 않도록 제한(처음 실행된 함수만)
function debounce_leading(callback, limit = 100) {
  let timeout;
  return (...args) => {
    if (!timeout) {
      callback.apply(this, args);
    }
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = undefined;
    }, limit);
  };
}

// 함수가 너무 자주 실행되지 않도록 제한(횟수 조절)
function throttle(callback, limit = 100) {
  let waiting = false;
  return function() {
    if(!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  }
}

// sweetalert2
function sweetAlert(icon, title, callback) {
	Swal.fire({
		title: title,
		icon: icon,
		customClass: {
			confirmButton: 'btn btn-type-round alert_btn'
		},
		buttonsStyling: false
	})
    .then((res) => {
      callback && callback();
    });

}

// body 잠금
function lockBodyScroll() {
  document.body.style.overflowY = 'hidden';
}

// body 잠금해제
function runBodyScroll() {
  document.body.style.overflowY = 'auto';
}

// 팝업창 닫기 함수
function closePopup(obj) {
  const popName = obj.getAttribute('data-pop-name');
  document.querySelector(`.${popName}`).classList.remove('active');
  document.querySelector(`.${popName}`).querySelectorAll('.gage')?.forEach(item => {
    item.style.width = 0;
  });
  runBodyScroll();
}

// 브라우저 구분 후 모바일 브라우저인 경우 css클래스 부여
function detectMobileBrowser() {
  if(isMobile) document.body.classList.add('mo-browser'); // 모바일인 경우 body에 클래스 부여
  else return false; // 모바일이 아닌 경우 return

  // 브라우저에 따라 클래스 부여
  moBrowserMap.forEach(item => {
    item.logic && document.body.classList.add(item.className);
  });
}

// 부모요소 삭제
function removeParent(el) {
  const parent = el.parentNode;
  parent.insertAdjacentElement('beforebegin', el);
  parent.remove();
}

/**
 * 조상요소 삭제
 * @param {Object} HTML Element
 * @param {String} classname
 * @returns break
 */
function removeParentAll(el, breakPoint) {
  const parent = el.parentNode;
  parent.insertAdjacentElement('beforebegin', el); // 원하는 element 꺼내기
  parent.remove(); // 부모요소 삭제

  // element를 꺼낸 후에도 부모요소가 있다면
  if(el.parentNode) {
    const isBreak = breakPoint && el.parentNode.classList.value.includes(breakPoint);
    if(isBreak) {
      // breakPoint가 존재하고, 부모요소가 breakPoint라면 return
      return true;
    } else {
      // 아닌 경우 스스로를 재귀적으로 호출
      removeParentAll(el, breakPoint);
    }
  } 
}

// object, array자료형 deep copy
function cloneObject(obj) {
  const isArr = Array.isArray(obj);
  let clone;
  isArr ? clone = [] : clone = {}; // obj type 구분하여 빈 array or object 생성

  for (let key in obj) {
    if (typeof obj[key] == "object" && obj[key] != null) {
      // value의 type이 object인 경우 cloneObject함수 재귀적 호출
      clone[key] = cloneObject(obj[key]);
    } else {
      // value의 type이 object가 아닌 경우 그대로 복사
      clone[key] = obj[key];
    }
  }

  return clone;
}

// 날짜 차이를 구해주는 함수
function getDateGap(startDate, endDate) {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  let result = (end - start) / (1000 * 60 * 60 * 24);

  return result;
}

/**
 * 디데이를 구해주는 함수
 * @param {String} 마감일 '2023-01-01'
 * @param {Int} 기준시간 0 ~ 23
 * @returns 결과를 담은 object자료
 */
function D_DayCount(endDate, openTime = 0) {
  // 변수 선언
  let obj = { origin : 0, day : 0, hour : 0, min : 0, sec : 0, ms : 0 }
  // open시간 설정
  let open = 60 * 60 * 1000;
  open = (9 - openTime) * open;

  const start = new Date();
  const end = new Date(endDate); 
  const origin = (end.getTime() - start.getTime() - open); // 날짜 차이 계산 (ms)
  // 날짜 차이가 음수인 경우 에러처리
  if(origin < 0) {
    return obj;
  } else {
    // endDate까지 남은 시간(ms)를 단위에 맞게 변환하고 나머지 값은 더 작은 단위로 변환
    // ex) 9.5일 => 9일 12시간
    const day = origin / (1000 * 60 * 60 * 24);
    const hour = (day - Math.floor(day)) * 24;
    const min = (hour - Math.floor(hour)) * 60;
    const sec = (min - Math.floor(min)) * 60;
    const ms = (sec - Math.floor(sec)) * 1000;

    // 나머지가 0인 상태에서 계산 시 결과값이 NaN이 되는 현상발생
    // 결과값이 NaN인 경우 0으로 치환
    const arr = [day, hour, min, sec, ms].map((item) => {
      isNaN(item) ? item = 0 : null;
      return item;
    });

    // 빈 object에 계산된 결과값 채우기
    arr.forEach((item, idx) => {
      // object key값 list
      const objKey = ['day', 'hour', 'min', 'sec', 'ms'];
      // value는 소수점 제거 후 채워준다
      obj[objKey[idx]] = Math.floor(item);
    });

    obj.origin = origin;
    return obj;
  }
}