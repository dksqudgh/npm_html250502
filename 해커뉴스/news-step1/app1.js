const xhr = new XMLHttpRequest()

const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"

xhr.open('GET', NEWS_URL,false)
xhr.send() 

const newsList = JSON.parse(xhr.responseText) //NodeList
const ul = document.createElement('ul') // ul 태그 생성


for(let i = 0; i < 10; i++){
const li = document.createElement('li') // li 태그 생성
li.innerHTML = newsList[i].title // li 태그에 제목 추가 
ul.appendChild(li) // ul 태그에 li 태그 추가  appendChild는 자식으로 추가하는 것
}

console.log(newsList[0]) // 0번째 뉴스 제목;

const v_root = document.querySelector('#root').appendChild(ul) // root는 div태그 >> ul 태그를 div 태그에 추가






