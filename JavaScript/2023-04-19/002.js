class Robot {
  // 클래스의 생성자 함수입니다. 하나의 클래스는 하나의 생성자만 정의할 수 있습니다.
  // 그리고 생성자 함수는 new 키워드가 호출될때 자동으로 실행됩니다.
  constructor(name) {
    this.name = name;
  }

  // 메소드를 정의합니다. 메소드는 클래스가 생성한 인스턴스를 통해 사용할 수 있습니다.
  sayYourName() {
    console.log(`삐리비리. 제 이름은 ${this.name}입니다. 주인님.`);
  }
}

class BabyRobot extends Robot {
  constructor(name) {
    super(name);
    this.ownName = '아이크';
  }

  sayBabyName() {
    // 또한 상속을 받게되면 부모 클래스의 메소드를 사용할 수 있게 됩니다. 때문에 this로 접근 할 수 있습니다.
    // 부모의 sayYourName() 메서드 실행
    // this.sayYourName();
    console.log('Suceeding you, Father!');
  }
}

let robot = new BabyRobot('원영');

robot.sayBabyName();
robot.ownName;
robot.sayYourName();
robot.name;
