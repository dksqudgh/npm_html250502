function add(A, B) {
  
  let hap = 0
  hap = A + B
    return hap
}

function add1(A, B) {
  
  let hap = 0
  hap = A + B 
  //return 이 없기 때문에 undefined가 됨
  // 자바 스크립트에서 undefined 와 null은 천지차이
  // undefined는 값이 없다는 뜻이고 null은 아예 존재하지 않는 것
}
  
console.log(add(1, 3)) // 숫자 + 숫자 = 숫자 따라서 4
console.log(add('1', 3)) // 문자열 + 숫자 = 숫자 따라서 13
console.log(add('1', '3')) // 문자열 + 문자열 = 문자열 따라서 13

const return1 = add (1, 4) // return1에 add(1, 4)의 결과값을 저장 >> 이 값을 return이라고 함 
const return2 = add1 (1, 4) // return1에 add(1, 4)의 결과값을 저장 >> 이 값을 return이라고 함 

console.log(return2)
