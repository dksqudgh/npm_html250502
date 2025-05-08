const xhr = new XMLHttpRequest() // XMLHttpRequest >> 비동기로 데이터를 가져옴 이 친구를 xhr이라고 부르고 객체생성 한거임.
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"


function getData(url) // 함수파라미터 자리에 선언된 변수는 지역변수이다.
{
  xhr.open('GET', url,false) // GET 방식으로 , url변수를  , 비동기로 가져와라 라는것   true는 동기
  xhr.send() 
  
  return JSON.parse(xhr.responseText)
}

const newsList = getData(NEWS_URL)

const content = document.createElement('div') // div 태그 생성
const ul = document.createElement('ul') // ul 태그 생성
const title = document.createElement('h1') // h1 태그 생성 <h1></h1>

window.addEventListener(
  "hashchange",
  () => {
    const id = location.hash.substring(1) // 0번째 자리에는 #이 들어가므로 1번째 자리부터 가져옴 
    console.log(location.hash); // location.hash는 현재 URL의 해시 부분을 가져옴

    const newsContent = getData(CONTENT_URL.replace('@id', id)) // @id를 id로 바꿔서 가져옴
    
    title.innerText = newsContent.title // <h1>뉴스제목</h1>
    content.appendChild(title) // div 태그에 h1 태그 끼워넣는것
    
    
  });

  

for(let i = 0; i < 10; i++){
  const li = document.createElement('li') // li 태그 생성
  const a = document.createElement('a') // a 태그 생성
  a.href =  `#${newsList[i].id}` // a 태그에 href 속성 추가
  a.innerText = `${newsList[i].title} (❤${newsList[i].comments_count})` // a 태그에 뉴스 제목 추가
li.appendChild(a) // li 태그에 a 태그 추가
ul.appendChild(li) // ul 태그에 li 태그 추가  appendChild는 자식으로 추가하는 것



}

console.log(newsList[0]) // 0번째 뉴스 제목;

const v_root = document.querySelector('#root').appendChild(ul) // root는 div태그 >> ul 태그를 div 태그에 추가
document.querySelector('#root').appendChild(content)  // root 태그에 content 추가





