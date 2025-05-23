


function calcValue2(a,b,cd){
  setTimeout(() => {
    cd(a+b);
  }, 2000);
}

const r1 = calcValue2(50,30,(result)=>{
console.log(result);
return result
})
const y1 = r1
console.log(y1);


//아래 함수는 setTimeout이 없어도 위의 함수에서 setTimeout이 있어
//결과값을 받지 못하여 기다리다가 실행되는걸 볼 수 있음
//이것이 동기 코드.


