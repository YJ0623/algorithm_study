/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // str1 + str2가 str2 + str1와 같지 않다면 공통된 문자열이 존재하지 않음. 따라서 함수 종료
    if(str1 + str2 !== str2 + str1) return "";

    return str1.slice(0, gcd(str1.length, str2.length)); // str1과 str2의 길이의 최대공약수만큼 str1의 앞부분을 잘라서 반환
};

const gcd = (num1, num2) => {
    let i = num2;
    let gcd = 0;
    while(i > 0) {
        if(num1 % i === 0 && num2 % i === 0) {
            gcd++;
            break;
        }
        i--;
    }
    return i;
}