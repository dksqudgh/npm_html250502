const items = [
  {id:1, name: "벤치프레스",count:5},
  {id:2, name: "렛풀다운",count:3},
  {id:3, name: "스쿼트",count:7},
]
let workouts = []

//운동 제목 추가하기
const handleAdd = (myname,count)=>{
console.log("handleAdd : " +myname);
workouts = [...items,{id:items.length+1, name: myname, count: count+1}]
return workouts
}

//운동 제목 삭제하기
const handleDelete = (id)=>{
const insi = workouts.filter((item) => item.id != id)
console.log(insi);
}
handleDelete(2)

//자바스크립트에서는 어떤 이름에
//싱글 또는 더블 쿼테이션이 없으면 변수취급

handleAdd("론지",5)
//추가한 다음에도 추가된 내용을 확인하고 싶고,
//또 삭제한 다음에도 삭제가 잘 되었는지 확인하고 싶다~
//하면 함수를 설계해야 한다.

const check = ()=>{
  
  for(let i=0; i<workouts.length; i++)
    {
      console.log(`id : ${workouts[i].id}, name : ${workouts[i].name}, count : ${workouts[i].count}`);
    }
  }
check()