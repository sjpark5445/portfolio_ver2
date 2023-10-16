const validationMap = {
  // URL
  regOnlyNumber(string) {
    return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!-\/]))?/.test(string);
  },
  // 숫자만
  regOnlyNumber(integer) {
    return /^[0-9]*$/.test(integer);
  },
  // 한글만
  regOnlyKorean(string) {
    return /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(string);
  },
  // 한글 + 공백
  regOnlyKorean(string) {
    return /^[가-힣\s]+$/.test(string);
  },
  // 영어만
  regOnlyEnglish(string) {
    return /^[a-zA-Z]*$/.test(string);
  },
  // 영어 + 숫자
  regEngWithNum(string) {
    return /^[a-zA-Z0-9]*$/.test(string);
  },
  // 영어 + 공백
  regEngWithSpace(string) {
    return /^[a-zA-Z\s]+$/.test(string);
  },
  // 이메일
  regEmail(string) {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+$/.test(string);
  },
  // 전화번호
  regPhone(string) {
    return /^\d{2,3}-\d{3,4}-\d{4}$/.test(string);
  },
  // 영어, 숫자, 특수문자 포함 8-15자리 암호
  regPassword(string) {
    return /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/.test(string);
  },
  // 주민등록번호
  regPersonalNumber(string) {
    return /\d{6} - [1-4]\d{6}/.test(string);
  },
};

// validation 추상화 클래스
class Validation {
  constructor(options) {
    this.options = options.options;
    this.validationFuncMap = options.validationFuncMap;
    this.nullMessageMap = options.nullMessageMap;
    this.regexMessageMap = options.regexMessageMap;
  }
  // 검증을 통과했을 때 실행할 함수 세팅 (ajax요청 등)
  set pass(callback) {
    this.pass = callback;
  }
  // 검증을 통과하지 못했을 때 실행할 함수 세팅 (alert함수 등)
  set fail(callback) {
    this.fail = callback;
  }
  // 검증을 통과했을 때 실행할 함수 기본값 (ajax요청 등)
  pass() {
    console.log("pass");
  }
  // 검증을 통과하지 못했을 때 실행할 함수 기본값 (alert함수 등)
  fail(message) {
    alert(message);
  }
  // options에 담긴 값이 조건(필수유무, 정규식)을 통과하지 못한다면 실패 메시지를, 통과한다면 false를 return해주는 함수
  errorCheck() {
    for (let key in this.options) {
      const inputValue = this.options[key].value;
      const isRequired = this.options[key].required;
      const isEmpty = inputValue === "" || inputValue === null || inputValue === undefined;
      const isPassed = this.validationFuncMap[key](inputValue);

      if (isRequired && isEmpty) return { message: this.nullMessageMap[key] };
      if (!isPassed) return { message: this.regexMessageMap[key] };
    }

    return false;
  }
  // errorCheck함수 실행 후 에러가 발생하지 않은 경우 pass함수를, 에러가 발생한 경우 fail함수를 실행하고, fail함수의 매개변수로는 에러 메시지를 넣어준다.
  submit() {
    const isError = this.errorCheck();
    return !isError ? this.pass() : this.fail(isError?.message);
  }
}

// 인스턴스 생성
const joinVal = new Validation({
  options: {
    id: document.querySelector('[name="id"]'),
    pw: document.querySelector('[name="pw"]'),
  },
  nullMessageMap: {
    id: "아이디를 작성해 주세요.",
    pw: "비밀번호를 작성해 주세요.",
  },
  regexMessageMap: {
    id: "사용 불가능한 아이디입니다.",
    pw: "사용 불가능한 비밀번호입니다.",
  },
  validationFuncMap: {
    id: validationMap.regOnlyEnglish,
    pw: validationMap.regPassword,
  },
});

// pass, fail시 사용할 함수 설정
joinVal.pass = valPass;
joinVal.fail = valFail;
// validation 실행
document.querySelector("button").addEventListener("click", joinVal.submit());

// 함수
function valPass() {
  console.log("pass");
}
function valFail(message) {
  console.log(message);
}
