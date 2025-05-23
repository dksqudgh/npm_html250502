const n = 0

//OR연산자를 사용하는 경우

const num1 = 1 || 7
console.log(num1);

const num11 = n||7
console.log(num11);

const num2 = n|7
console.log(num2);


let i = 1
let j = 2
//OR연산자가 한개 든 두개 든 실행문이 실행이 되는것은 같다.
//그러나 한 개 일때는 앞에 조건이 참이더라도 뒤에 조건도 무조건 따진다.(비효율적)
if((++i >= j)||(i <= --j)){
  2>= 2
  2<= 1
  console.log('여기 if');
}
else{
  console.log('여기 else');
}
console.log(i,j);