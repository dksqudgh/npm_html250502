#### position 속성
- CSS의 position속성은 엘리멘트가 브라우저 화면에 어떻게 배치가 되는가를 결정
  - relative, absolute, fixed
  - 위의 3가지와 함께 사용할 수 있는 포지셔닝 관련 속성(top, left, bottom, right)

- absolute position - 자유로운 엘리먼트 배치
  - 부모 엘리먼트에 구애받지 않고 엘리먼트를 자유롭게 배치 가능
  - 브라우저 화면(viewport) 상에서 어디든지 원하는 위치 배치 가능 
    - 심지어 부모 엘리먼트 위에 겹쳐서 배치할 수도 있다.
  - 가장 가까운 엘리먼트의 내부에서 자유 배치 가능함
    - 만일 가까운 엘리먼트에 position 속성이 없다면 body를 부모로 하여 배치가 된다.