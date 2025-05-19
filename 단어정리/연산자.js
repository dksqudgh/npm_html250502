//증감연산자

let a = 0
console.log(a);

a = a + 1
console.log(a);

a++
console.log(a);
//대입을 먼저하고 1을 증가시킨다
//1을 증가시킨 다음에 대입한다
//++가 뒤에 있으면 후위연산자
//연산자가 여러개 있을 때 우선순위가 있다

let b = a++

console.log(`a:${a},b:${b}`);

b = ++a
console.log(`a:${a},b:${b}`);

//비교연산자
// == 값만 비교 === 값,타입 비교
console.log(2=='2');  //true
console.log(2==='2'); //false

//원시형 타입
//참조형 타입

const myCar = {
  name: '소나타',
  color: 'red',
  speed: 50
}

const youCar = {
  name: '소나타',
  color: 'red',
  speed: 50
}


//이건 주소번지의 값이 같냐 라는거여서 false가 나옴
console.log(myCar == youCar); //false
console.log(myCar === youCar); //false

let herCar = youCar
console.log(herCar == youCar);
console.log(herCar === youCar);

//+연산자 주의
let text;
text = 10 + '10'
console.log(text);

text = 10 + 10
console.log(text);

text = '10' + '10'
console.log(text);

let a1 = '10'
console.log(10+a1);
console.log(typeof a1);
a1 = parseInt(a1)
console.log(typeof a1);

//할당 연산자
let x = 1
x += 1 // 먼저 더하고 나중에 대입해라
console.log(x);

x *= 2
console.log(x);




