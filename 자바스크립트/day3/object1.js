class DeptVO{
  //생성자 함수 구현
  constructor(deptno,dname,loc){
    this.deptno = deptno //this가 없는건 지역변수임
    this.dname = dname
    this.loc = loc
  }
}

//원본과 복사본 >> 참조형 변수
//객체 생성하기

const dvo1 = new DeptVO(10,'개발부','서울')

console.log(dvo1.deptno);
console.log(typeof null);
console.log(typeof undefined);

const dvo2 = dvo1
dvo2.deptno = 20

console.log(dvo1.deptno);
console.log(dvo2.deptno);

console.log(dvo1.deptno === dvo2.deptno);
