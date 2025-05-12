const Hello = () =>{
  console.log("인사 함수 호출 성공"); //로그(공통된 관심사 : AOP)
  const d_root = document.querySelector("#root")
  d_root.innerText = "id내용변경"
  console.log(d_root);

  const d_home = document.querySelector(".home")
  d_home.innerText = "class내용변경"
  console.log(d_home);


}