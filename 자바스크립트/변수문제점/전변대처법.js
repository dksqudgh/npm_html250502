//즉시 실행함수
(function(){
  var i = 1
console.log('here');
return i
})();

// console.log(i); i is not defined

const dept = {}
dept.deptno = 10
dept.dname = '개발부'
dept.loc = '제주'

console.log(dept.dname);
console.log(dept['dname']);

//3.모듈패턴
{
  var Counter = (function(){
    console.log('Counter');
    var num = 0
    return{
      increase(){
        return ++num
      },
      decrease(){
        return --num
      }
    }
    
  })();

console.log(Counter.num);
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.increase());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());
console.log(Counter.decrease());
}

// 4.ES6 모듈
// 더는 전변을 사용할 수 없다 - let, const
// ES6모듈은 파일 자체의 독자적인 모듈 스코프 제공한다.
//script태그에 type=module을 추가해서 로드된 자바스크립트는 모듈로서 동작함
// Webpack이나 Babel활용한 프로젝트 구성할 때