const sampleTodos = [
  {id:1,text:'학교가기',complete:true},
  {id:2,text:'친구만나기',complete:true},
  {id:3,text:'과제제출',complete:false},
]
//얕은복사 & 깊은복사
//현재 할일 목록 배열 복사하기
let todos = [...sampleTodos] // ... 이게 복사임
//함수를 설계하기 - 기초는 아니다.
//배열에 있는 일정을 삭제하기 -> 삭제된 내용은 목록에 보이지 않아야 한다.
//배열에 있는 일정 중 수정하기 -> 수정한 내용은 목록에서 바뀌어 있어야 한다.
//새로고침을 담당하는 함수를 구현해 보세요.

const items = document.querySelector(".items") 

const input = document.querySelector(".footer_input") 

const addBtn = document.querySelector(".footer_button") 

const loadSampleBtn = document.querySelector(".load_sample_button")

const resetBtn = document.querySelector(".reset_button")


function replacedAll(){
  todos.forEach(todo =>{
    const item = createItem(todo)
    items.appendChild(item)
  })
}

const onAdd = () => {
    const itemName = input.value
    if(itemName.trim() == 0) 
      { 
        input.focus()
        input.value = ''
        return 
      }
      const item = createItem(itemName)
      items.appendChild(item)
      item.scrollIntoView({block: "center"})
      input.focus()
      input.value = ''
      
      replacedAll()

}

const createItem = (itemName) => {
  const itemRow = document.createElement("li")
  console.log(itemName);
  itemRow.innerHTML = `
        <div class="item">
          <span class="item_name">${itemName}</span>
          <button class="item_delete">
            <i class="fas fa-trash"></i>
          </button>
        </div>

    <div class="item_divider"></div>
    `

  const deleteBtn = itemRow.querySelector('.item_delete')
  deleteBtn.addEventListener('click',()=>{
    items.removeChild(itemRow)
    console.log(itemRow);
  })


  return itemRow 

}


addBtn.addEventListener('click',()=>{
  console.log("plus");
  onAdd();
})

input.addEventListener('keydown',(e)=>{
  if (e.key === 'Enter') {
    console.log("enter");
    onAdd();
  }
})

const getTodoList = () => {
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }

  sampleTodos.forEach(todo => {
    const item = createItem(todo.text)
    items.appendChild(item)
  })
}
loadSampleBtn.addEventListener('click', getTodoList)

const deleteAll = () => {
  while(items.firstChild){
    items.removeChild(items.firstChild)
  }
}
resetBtn.addEventListener('click',deleteAll)

