class Sausage {
  constructor(재료1, 재료2) {
    this.name1 = 재료1;
    this.name2 = 재료2;
  }
  taste() {
    console.log(`${this.name1}과 ${this.name2}맛이 난다!`);
  }
}

class FireSausage extends Sausage {
  taste() {
    console.log(`${this.name1}과 ${this.name2}맛과 불맛이 난다!`);
  }
}

let 소세지1 = new FireSausage('소고기', '파');
