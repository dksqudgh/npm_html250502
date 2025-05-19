let hobby = ['게임','헬스','독서']
let hobby2 = ['코딩','스노우보드','댄스']

//화면과 로직은 분리한다.
//화면이 없이도 코딩(백엔드 - JS,Java,Python) 할 수 있다.
//백엔드 없이도 코딩(프론트엔드 - html,React,Vue,Angular2) 할 수 있다.
//데이터베이스 서버가 구축이 되지 않았어도 데이터를 처리할 수 있다.
let merge = [...hobby,...hobby2]
merge.forEach(item => {
  console.log(item);
})

merge.forEach((item,index) =>{
 console.log(`${item} ${index}`);
})