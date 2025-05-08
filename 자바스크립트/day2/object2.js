function User(){
   this.name = 'John';
   this.age = 30;
}

const user = new User();
console.log(user);
console.log(user['name']);

console.log("나는 " + user.name + "이고 나이는 " +user.age + "세 입니다.");
console.log("나는 "+ user['name']+"이고 나이는 " + user["age"] +"세 입니다."); // []를 사용하면 ""안에서 변수사용 가능하고 ""과 ''를 혼합해서 사용가능
console.log(`나는 ${user.name}이고 나이는 ${user.age}세 입니다.`); //``을 사용하면 ``안에서 변수사용 가능