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
// param3 - true(비동기)  or  false(동기)  false가 디폴값임
// . = 닷트연산자 함수를 호출할때 사용함

// ex) xhr.open(param1, param2, param3)
xhr.open('GET', NEWS_URL,false)
//send도 XMLHttpRequest가 제공하는 함수

xhr.send() // send가 호출되면 서버에 요청을 보냄


const newsList = JSON.parse(xhr.responseText);
const top10 = newsList.slice(0, 10); // 앞에서 10개만 추출

    const v_root = document.querySelector('#root');
    let listHTML = "<h2>해커뉴스 TOP 10</h2><ul>";

    top10.forEach(item => {
      listHTML += `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`;
    });

    listHTML += "</ul>";
    v_root.innerHTML = listHTML;
//console.log(v_root);






const ul = document.createElement('ul') // ul 태그 생성


for(let i = 0; i < 10; i++){
const li = document.createElement('li') // li 태그 생성
li.innerHTML = newsList[i].title // li 태그에 제목 추가 
ul.appendChild(li) // ul 태그에 li 태그 추가  appendChild는 자식으로 추가하는 것
}

console.log(newsList[0]) // 0번째 뉴스 제목;
// root는 div태그 >> ul 태그를 div 태그에 추가








