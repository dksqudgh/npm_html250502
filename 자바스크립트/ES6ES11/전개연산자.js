//Spread syntax >> 주소의 참조값만 복사해 온다.
const emp = { key: 'empno'} // 사원번호 사원집합의 primary key(기본키)
const dept = { key: 'deptno'} // 부서번호 부서집합의 primary key(기본키)
const array = [emp,dept]
console.log(array);

//배열을 복사 해야 한다면..
//Spread syntax를 활용하여 복사할 수 있다.

const array2 = [...array]
console.log(array2);
console.log(array === array2);

console.log(array2);
console.log(...array2,{key:'guestno'});

const array3 = [...array2,{key:'guestno'}]

console.log(array2 == array3);

/*
얕은복사(Shallow Copy)
  객체를 복사할 때 해당 객체만 복사하여 새 객체를 생성한다.
  복사된 객체의 인스턴스 변수는 원본 객체의 인스턴스 변수와 같은 메모리 주소를 참조한다.
  따라서, 해당 메모리의 주소값이 변경되면 원본 객체 및 본사 객체의 인스턴스 변수값이 변경된다.


깊은복사(Deep Copy)
객체를 복사할 때 해당 객체와 인스턴스 변수까지 복사하는 방식
전부를 복사하여 새 주소에 담기 때문에 참조를 공유하지 않는다.

*/