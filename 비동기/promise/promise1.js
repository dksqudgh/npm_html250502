const p = new Promise((resolve,reject)=>{
  resolve('ok')
  setTimeout(()=>{
    reject('실패')
  },2000)
})

p.then(function(ok){ // ok를 수신 함수에서 성공을 했다면 .then 으로 들어오는것
  console.log(ok);
}).catch(function(error){ // catch에서 실패를 수신하고 있다는 것을 알 수 있다.
  console.log(error);
})