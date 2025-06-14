//파라미터의 기본값은 undefined임
//파라미터의 변수들은 언제 값이 결정 되나요?
//js에서는 같은 이름의 함수를 여러개 가질 수 없다.

const hap = (a,b)=>{
  
  console.log(a+','+b);
  return a + b
}

hap(1,2)

const hap2 = (a=2,b=2)=>{
console.log(a+','+b);
}

hap2(3,)

const hap3 = (...numbers)=>{
  console.log(numbers);
}

hap3(1,2,3,4,5)

const hap4 = (a,b,...numbers)=>{
console.log(numbers);
}

hap4(1,2,3,4,5,6,7)

const print2 = (num) => {
  if(num<0)return
  console.log(num);
}

const print3 = (num) => {
  if(num<0)return
  return num
}

print2(5)
print2(-5)
const a = print2(3)
console.log(a);
const b = print3(3)
console.log(b);

//App
//입력 - 전처리 - 처리 - 후처리 - 출력

//처리 >> 함수로 선언/구현
//함수 - 특정한 일을 수행하는 코드 집합
//유지보수, 재사용성, 가독성
//함수도 오브젝트임 주소번지를 가지게 되고 함수가 있는곳은 다른 곳이다.
//원시형은 호출하면 값이 출력되지만 참조형은 주소번지가 출력된다.
//배열도 오브젝트임
//함수가 오브젝트이므로 함수의 이름은 함수를 참조한다
//리액트 컴포넌트란 함수이다.



