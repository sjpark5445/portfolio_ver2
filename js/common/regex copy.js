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

class Validation {
  constructor(options) {
    this.optionCheck(options);

    this.regexFuncMap = {
      id: validationMap.regOnlyKorean,
      pw: validationMap.regOnlyNumber,
      nickname: validationMap.regOnlyKorean,
      phone: validationMap.regOnlyNumber,
    };

    this.nullMsgMap = {
      id: "아이디를 작성해 주세요.",
      pw: "비밀번호를 작성해 주세요.",
      nickname: "닉네임을 작성해 주세요.",
      phone: "전화번호를 작성해 주세요.",
    };

    this.regexMsgMap = {
      id: "사용 불가능한 아이디입니다.",
      pw: "사용 불가능한 비밀번호입니다.",
      nickname: "사용 불가능한 닉네임입니다.",
      phone: "전화번호 양식을 확인해 주세요.",
    };
  }
  // setter
  set nullMsg(obj) {
    this.nullMsgMap = obj;
  }

  set regexMsg(obj) {
    this.regexMsgMap = obj;
  }

  set pass(callback) {
    this.pass = callback;
  }

  set fail(callback) {
    this.fail = callback;
  }

  pass() {
    console.log("pass");
  }

  fail(message) {
    alert(message);
  }

  optionCheck(obj) {
    const isNotObj = !obj instanceof Object || Array.isArray(obj);

    if (isNotObj) throw new Error("매개변수로는 object만 들어올 수 있습니다.");
    this.options = obj;
  }

  errorCheck() {
    for (let key in this.options) {
      const inputValue = this.options[key].value;
      const isRequired = this.options[key].required;
      const isEmpty = inputValue === "" || inputValue === null || inputValue === undefined;
      const isPassed = this.regexFuncMap[key](inputValue);

      if (isRequired && isEmpty) return { message: this.nullMsgMap[key] };
      if (!isPassed) return { message: this.regexMsgMap[key] };
    }

    return false;
  }

  submit() {
    const isError = this.errorCheck();
    return !isError ? this.pass() : this.fail(isError?.message);
  }
}

// use validation
const memberVal = new Validation({
  id: document.querySelector('[name="id"]'),
  pw: document.querySelector('[name="pw"]'),
  phone: document.querySelector('[name="tel"]'),
  // nickname: document.querySelector('[name="nickname"]'),
});

memberVal.pass = () => console.log("pass");
memberVal.fail = (message) => console.log(message);

memberVal.submit();
