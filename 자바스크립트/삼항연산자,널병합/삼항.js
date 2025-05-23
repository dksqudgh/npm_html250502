//삼항 연산자
//조건 ? 참 : 거짓

let msg

function getAlert(message){
  return message ? message : 'No Message'
}

msg = getAlert()
console.log(msg);
msg = getAlert(null)
console.log(msg);
msg = getAlert('undefined')
console.log(msg);
msg = getAlert("undefined")
console.log(msg);
msg = getAlert(undefined)
console.log(msg);