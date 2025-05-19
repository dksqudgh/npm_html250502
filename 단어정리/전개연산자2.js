let dept = {
  deptNo: 10,
  dname: "개발부",
  loc: "제주"
}

let depts = [
  {deptNo:10, dname:"총무부",loc:"인천"},
  {deptNo:20, dname:"인사부",loc:"서울"},
  {deptNo:30, dname:"기획부",loc:"부산"},
]

let deptsAdd = [...depts,{deptno:40,dname:"개발부",loc:"제주"}]

depts.forEach(item =>{
  console.log(item);
})
console.log(depts[0]);
console.log(deptsAdd.length);
console.log(deptsAdd[3]);
