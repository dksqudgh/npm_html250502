### 정리
### 브라우저 동작원리
  - Data Storage : 쿠키, LocalStorage , SessionStorage , Cache API 등


### 해커뉴스 실습 예제
1. 두 개의 화면을 가진 웹 구성하기

2. 문자열을 활요한 HTML 다루기 (document, DOM API소개)
  - 템플릿 엔진이 만들어진 과정에 대해 이해할 수 있다.
  - 그 사람의 아이디어를 추측해 볼 수 있다.

3. 라우터 화면 처리하기
  - 화면의 전환 처리하기

4. 페이징 처리
  - 부트스트랩, antd, material UI 등등..

5. 꾸미기(CSS, TailwindCSS) 


#### type = 'module' 있을 때와 없을때의 차이
 - 기본스크립트와 모듈스크립트의 차이점
 
1. 로딩 방식 & 실행 시점 
- 동기 vs 비동기 
기본 스크립트 일때 : module속성값이 없을 때
 동기 : 파서가 스크립트를 다운로드 후 실행 -> 이후에야 DOM파싱을 진행함.
       다시 말해서 module 스크립트는 비동기 처리를 한다.
 defer가 없더라도 자동으로 defer효과 적용 받는 것 -> 모듈 스크립트이다.

 ```html
 <!-- 아래가 기본 스크립트 -->
 <script src = "app.js"></script>

 
 <!-- 아래가 모듈 스크립트 -->
 <script src = "app.js" type = "module"></script>

 ```