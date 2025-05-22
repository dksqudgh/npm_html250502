const container = document.querySelector('#root')
//조건 검색 결과를 화면에 출력하기

//input type text에서 입력 후 엔터를 쳤을 때
const keyword = document.querySelector(".input")
keyword.addEventListener('keypress',(event)=>{
  if(event.keyCode == 13){
    console.log('Enter');
    let word = keyword.value
    search(word)
  }
})
const search = (query) => {
  console.log('입력한 키워드 ' + query);

}

container.innerHTML = '조회결과'

/*
키워드를 입력한 뒤 엔터를 치거나 검색이미지 버튼을 클릭했을 때
유튜브 서버에 요청을 한다.
const xhr = new XMLHttpRequest
xhr.open()
xhr.send()

function onKeyPress(e){
if(e,keycode)}
이벤트 소스가 두 가지 경우 이므로 함수를 설게한다
- search(키워드),조회결과처리,결과를 가지고 화면 처리한다.
그냥 하나로 하면 안되나? 두 개로 하는것과 하나로 하는것 중
어떤 쪽이 더 나은선택인가?

조건검색을 해야 하므로 사용자로 부터 키워드를 입력받는다
*/ 