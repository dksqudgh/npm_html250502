//콜백 패턴
//쇼핑몰

//마치 배송시간이 걸리는 것처럼 처리해 본다. - setTimeout()
//파라미터에 함수를 사용하기 - 일급함수
//변수에 함수를 치환할 수 있다.
//함수를 리턴타입으로도 사용할 수 있다.
//함수는 객체이다.

const goodSearch =(callback)=> {
  setTimeout(()=>{
    callback()
    console.log("상품조회")
  },3000)
};
const cart =(callback)=> {
  setTimeout(()=>{
    callback()
    console.log("카트담기")
  },2000)
};
const account =(callback)=> {
  setTimeout(()=>{
    callback()
    console.log("결제하기")
  },2000)
};
const delivery =(callback)=> {
  setTimeout(()=>{
    callback()
    console.log("배송하기")
  },5000)
};
const result =(callback)=> {
  setTimeout(()=>{
    console.log("배송완료")
  },2000)
};

goodSearch(()=>{
  cart(()=>{
    account(()=>{
      delivery(()=>{
        result()
      })
    })
  })
})