const user = new Object()
user.name = '이순신'
user.age = 60

console.log(user);

function Person(){
  this.name = '강감'
  this.age = 50

}

let p = new Person
console.log(p);
p.age = 10
console.log(p);
p = new Person
console.log(p);
p.age = 10
console.log(p);

const people = ()=>{
  this.name = '연개'
  this.age = 55
  return this
}

console.log(people());