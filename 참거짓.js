//참 거짓
//false
//0
//null
//undefined
//NaN(Not A Number)
//''빈 문자열

//if문은 조건문이다 그래서 ()안에 조건식이 일치하지 않는다면 실행되지 않는다.
//실행문 한 줄이라면 좌줄괄호와 우중괄호는 생략 할 수 있다.
if(true) console.log('참');

if(123) console.log('참');

if(0) {
  console.log('참');
}
else{
  console.log('거짓');
}

if(NaN){
  console.log('참');
}
else{
  console.log('거짓');
}

console.log(1+'1');
console.log(1+parseInt('2')); // parseInt() 파라미터에 문자타입을 넣으면 숫자타입으로 바꿔줌
console.log(1+parseInt('하나')); // '하나' 는 숫자가 아님 그래서 숫자타입으로 바꿀수가 없기에 NaN이 나온다

console.log(null);
console.log(typeof null);

if(null){

}
else{
  console.log('여기가 출력되면 null은 false');
}

if(undefined){
  
}
else{
  console.log('여기가 출력되면 undefined는 false');
}

if(''){
  
}
else{
  console.log('여기가 출력되면 ""은 false');
}