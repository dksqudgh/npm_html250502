let items = [
  {id:1, name:"item1", count:0},
  {id:2, name:"item2", count:0},
  {id:3, name:"item3", count:0}
]

//운동제목 추가하기 
const handleAdd = () => {
  const workouts = [...items,{id:items.length + 1, name:`item${items.length + 1}`, count:0}];
  
  console.log(workouts);
  console.log(items[3]);
  items = workouts;
  console.log(items[3]);


  };

  handleAdd();
  
  //운동제목 삭제하기
const handleDelete = (id) => {
  const result = items.filter(item => item.id !== id); // filter는 조건에 맞는 아이템만 남김
  console.log(result);
  console.log(items);
  return result
}
handleDelete(1)
console.log(items);
console.log(handleDelete(1));

//items 와 result는 다른 변수이므로 items는 그대로 남아있음