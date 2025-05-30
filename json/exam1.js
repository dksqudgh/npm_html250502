let myCar = {
  "carName": "Toyota",
  "wheelNumber": 4,
  "Speed": 120,
}



const methodA=(object)=>{
  console.log(object.carName);
}

function methodB(myCar){ //JSON.stringify(myCar)얘를 파라미터로 받음 stringify로 문자열로 바뀌어서 변수를 읽어오지 못함
  console.log(typeof myCar);
  console.log(myCar.wheelNumber);
  console.log(myCar.carName);
  console.log(myCar.Speed);
  let imsi = JSON.parse(myCar); //다시 오브젝트로 변환하니 다시 읽어올 수 있음
  console.log(typeof imsi);
  console.log(imsi.wheelNumber);
  console.log(imsi.carName);
  console.log(imsi.Speed);
}

methodA(myCar);
methodB(JSON.stringify(myCar));