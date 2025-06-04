function Circle(radius){
  //아래서 this라는 수정자는 자기자신 객체를 가리키는 수정자다
  //this 는  Circle 을 가리킨다.
  this.radius = radius
}

Circle.prototype.getArea = function(){
  return Math.PI * this.radius**2
}

//c1과 c2를 활용하면 서로 다른 원의 면적을 구할 수 있다.
//
const c1 = new Circle(1)
const c2 = new Circle(3)

console.log(c1.getArea());
console.log(c2.getArea());

//Circle생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을
//하는 프로토타입 Circle.prototype으로 부터 getArea메서드를 상속 받는다.
//즉 Circle생성자 함수가 생성하는 모든 인스턴스는 하나의getArea메서드를 공유한다.

console.log(c1.getArea === c2.getArea);

//동일한 기능을 제공하는 함수를 매번  새로 생성하는게 맞나?
//그냥 하나로 쓰면 안되나?

//프로토타입이 등장하게된 배경을 말한다.
//Circle생성자 함수는 인스턴스를 생성할 때 마다 동일한 동작을 하는
//getArea메서드를 중복 생성하고 모든 중복 인스턴스가 중복 소유한다.
//getArea 하나만 생성하여 모든 인스턴스가 공유해서 사용하는 것이 바람직하다.