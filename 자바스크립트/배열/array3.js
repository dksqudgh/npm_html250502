// Array - 구조분해 할당 문법
// -> 95% AI짜준다. - 5%에러 해결하기
// -> 95%가 내 아이디어가 아니다. - 다른사람의 생각
// 다른 사람이 짜놓은 구조를 파악해서 내가 5% 채워넣을 수 있도록 연습해보자.

const fruits = new Array("apple","banana","kiwi")

console.log(fruits);

console.log(fruits[2]);
console.log(fruits[1]);

fruits[0] = "딸기"
fruits[1] = "수박"
fruits[2] = "사과"

console.log(fruits);

const { fruit1, fruit2, fruit3} = fruits
console.log(fruit1, fruit2, fruit3);

let colors = ["red", "green", "blue"]
const color1 = colors[0]
const color2 = colors[1]
const color3 = colors[2]
console.log(color1);
const {c1,c2,c3} = colors;
console.log(c1);

let copy = []
for(let i=0;i<colors.length;i++){
  copy.push(colors[i])
}
console.log(copy);
copy =[]
colors.forEach(color => {
  copy.push(color)
})
console.log(copy);
copy = []
/*
["red", "green", "blue"].forEach(item => {
  copy.push(item)
})
*/
console.log(colors);
for(color in colors){
  console.log(color);
  console.log(colors[color]);
}
for(let color in colors){
  console.log(color);
  console.log(colors[color]);
  console.log(colors[0]);
}

fruits.forEach(item => {
  copy.push(item)
})

console.log(copy);
copy = []
colors.forEach(color => {
  copy.push(color)
})
console.log(copy);

const dept = {
  deptno: 10,
  dname: '개발부',
  loc: '제주'
}

const { deptno, dname, loc} = dept
console.log(deptno, dname, loc);

console.log(colors);

const [c11, c12, c13] = colors
console.log(c11, c12, c13);