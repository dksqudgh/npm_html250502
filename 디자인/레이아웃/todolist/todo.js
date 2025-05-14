//사용자가 입력하는 컴포넌트 >> input태그
const items = document.querySelector(".items") // ul태그

const input = document.querySelector(".footer_input") // input태그

const addBtn = document.querySelector(".footer_button") // home버튼


const onAdd = () => {
  //사용자가 입력한 친구만나기를 읽어와서 createItem함수를 호출할 때
  //파라미터로 넘긴다
  const itemName = input.value

  if(itemName.trim() == 0) // trim() 공백의 개수가 0 이면 true를 리턴함. 문자가 있으면 false 리턴
  { 
    input.focus()
    input.value = ''
    return //함수 안에서 if문 에서 return을 만나면 함수를 빠져나감
  }
  const item = createItem(itemName)
  items.appendChild(item)
  item.scrollIntoView({block: "center"})
  input.focus()
  input.value = ''

}

//입력한 itemName을 ul태그아래 li태그에 삽입한다
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
  })

  return itemRow // return 뒤에는 무엇도 작성해서는 안됨

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