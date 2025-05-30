const btns = document.querySelectorAll('ul li');

for(j = 0; j < btns.length; j++){
    btns[j].addEventListener('click', ()=>{console.log(j);})
  }

for(j = 0; j < btns.length; j++){
  ((index) => {
    btns[j].addEventListener('click', ()=>{console.log(index);})
  }
)(j);
}

//호이스팅이란 
/*
  블록 안에서 선언된 지역변수가 코드블록 밖으로 끌어 올려지면서 
  강제로 전역변수화 되는 현상

  전역변수
  - 코드블록 밖에서 선언된 변수
  - 해당코드 전역에 걸쳐서 접근가능
  - 여러 개의 서로 다른 함수들이 같은 값을 공유해야 할 때 유용

  지역변수
  - 코드블록 안에서 선언된 변수
  - 코드블록 안에서만 유효한 변수
  - 코드블록 밖에서는 접근할 수 없는 변수
  - 코드블록 밖에서 선언된 변수는 지역변수로 선언할 수 없다.

*/ 