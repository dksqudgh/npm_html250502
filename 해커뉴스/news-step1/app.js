//브라우저에 내장된 표준 비동기통신객체 생성하기
// const - 상수선언할 때 - ECMAScript6(2015)
// let - 변수선언할 때
// XMLHttpRequest는 객체이름으로 new 다음에 작성하면 객체생성됨.
const xhr = new XMLHttpRequest()
// 상수라서 대문자로 표시함 -- 눈에 잘 보이라고
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json"
// xhr은 XMLHttpRequest 객체를 참조하는 변수
// open함수는 XMLHttpRequest 에 선언되어 있다
// 재사용성을 높이는 코드를 작성하는 첫단추는 함수 중심의 고딩을 전개하는 것
// open은 XMLHttpRequest가 정의하고 있는 함수
// 파라미터 갯수는 3개
// param1 - GET 전송방식(Rest API)
// param2 - URL 해커뉴스의 최신목록을 가져오는 URL
// param3 - true(동기)  or  false(비동기)  false가 디폴값임
// . = 닷트연산자 함수를 호출할때 사용함

// ex) xhr.open(param1, param2, param3)
xhr.open('GET', NEWS_URL,false)
//send도 XMLHttpRequest가 제공하는 함수
xhr.send() // send가 호출되면 서버에 요청을 보냄

console.log(xhr.response)
console.log(xhr.responseText)
// console.log(xhr.responseXML) >> null 응답결과가 json이었음

const newsList = JSON.parse(xhr.response)
console.log(newsList[0].title);
console.log(newsList[1].title);
console.log(newsList[2].title);


