//객체 초기자
//객체 초기자는 중괄호로 묶인 0개 이상의 객체의 프로퍼티명과 관련된
//값의 쌍을 콤마로 구분한 목록 입니다.
console.log('1');
let i = 3
console.log(i);
{
  //컴파일을 하지 않는다 >> 문법을 체크하지 않는다.
  //변수 선언시 타입을 작성하지 않는다. >> 타입을 알 수 없다.
  //런타임(실행할때) 시에 타입을 알 수 있다.
  const x = 1
  console.log(x); //원시형 타입은 호출시 값이 나온다!

  const emp = {
    ename: "scott",
    job: "clerk",
    sal : 500,
  } 
  const ename = "tiger"
  const job = "bhp"

  const emp2 = {
    ename: ename,
    job: job
  }
  console.log(emp2);

  //key와 value가 동일할 때는 생략이 가능함
  const emp3 ={
    ename,
    job
  }
  console.log(emp3);
}
//실행방법
//node 객체초기자.js
//nodemon 객체초기자.js