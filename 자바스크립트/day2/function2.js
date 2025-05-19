// 주문을 한다. >> 등록 >> INSERT >> POST(REST API)
// 뭘 주문할거냐
const 주문 = (f1,f2) => {
  console.log('주문',f1,f2);

} // 선언 >> ()에 받을 파라미터를 넣어줘야 함

주문('딸기','바나나') //호출 >> 파라미터주의

// 70, 80 ,90 평균을 구하시오.


let hap = 0;



function funcAvg(a1,a2,a3){
  const jumsu = [a1,a2,a3]
  for(let i = 0; i<jumsu.length; i++)
    {
      hap = hap+jumsu[i]
    }
    let avg = hap/3.0

    return avg
  }

console.log(funcAvg(10,20,30));