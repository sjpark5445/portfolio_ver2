// 숫자만
let regOnlyNumber= /[^0-9]/g
// 한글만
let regOnlyKorean= /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
// 이메일
let regEmail= /^[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[@]{1}[-A-Za-z0-9_]+[-A-Za-z0-9_.]*[.]{1}[A-Za-z]{1,5}$/;
// 핸드폰 번호
let regTelPhone= /^\d{2,3}-\d{3,4}-\d{4}$/;
// 일반 전화번호
let regPhone = /^\d{2,3}-\d{3,4}-\d{4}$/;
// 영어, 숫자, 특수문자 포함 8-15자리 암호
let regPassword = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;