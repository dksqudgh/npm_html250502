const xhr = new XMLHttpRequest() // XMLHttpRequest >> 비동기로 데이터를 가져옴 이 친구를 xhr이라고 부르고 객체생성 한거임.
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json"


function getData(url) // 함수파라미터 자리에 선언된 변수는 지역변수이다.
{
  xhr.open('GET', url,false) // GET 방식으로 , url변수를  , 비동기로 가져와라 라는것   true는 동기
  xhr.send() 
  
  return JSON.parse(xhr.responseText)
}

const news = getData(NEWS_URL)
const newsList = []




newsList.push('<ul>')  // push는 배열에 추가하는 것


for(let i = 0; i < 10; i++){
newsList.push(
`
<li>
  <a href="#${news[i].id}">
    ${news[i].title} (❤${news[i].comments_count})
  </a>
</li>
`
) 
}
newsList.push('</ul>')
console.log(newsList);
document.querySelector('#root').innerHTML = newsList.join('') // join은 배열을 문자열로 바꿔주는 것 , ''는 구분자없이 쭉 나열해라 라는의미

/*

const id = location.hash.substring(1) // 0번째 자리에는 #이 들어가므로 1번째 자리부터 가져옴 
console.log(location.hash); // location.hash는 현재 URL의 해시 부분을 가져옴
const contents = getData(CONTENT_URL.replace('@id', id))
const contentsList = []
console.log(contentsList);


contentsList.push('<div>')
contentsList.push('<h1>')

window.addEventListener(
  "hashchange",
  () => {

    contentsList.push
    (`
     ${contents.innerText = contents.title}
    `)
    console.log(contentsList);
  });
  
  contentsList.push('</h1>')
  contentsList.push('</div>')
 

  */