class UltraArray {
  constructor() {
    this.data = {};
    this.length = 0;
  }

  push(item) {
    // obj[1] = 'hello';
    this.data[this.length] = item; // {0:item, 1:item, 2:item}
    this.length += 1; //++
    return this.length;
  }

  pop() {
    const lastState = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1; //--
    return lastState;
  }

  // 인덱스 숫자로 속성을 제거합니다.
  deleteWithIndex(index) {
    const removedItem = this.data[index];
    // delete this.data[index];
    this.changeOrderOfItems(index);
    return removedItem;
  }

  // 인덱스를 정리하고 속성을 제거합니다.
  changeOrderOfItems(index) {
    // 받아오는 인덱스부터 시작해 정리를 해봅니다.
    // 3
    // 길이를 하나 줄입니다.
    this.length--;
    for (let i = index; i < this.length; i++) {
      // 뒤에 있는 인덱스를 앞으로 당겨야합니다.
      // [0,1,2] ==> [0, 2]
      this.data[i] = this.data[i + 1];
    }
    // 대상을 제거합니다.
    delete this.data[this.length];
  }
}

const myArray = new UltraArray();

myArray.push(1);
myArray.push(2);
myArray.push(3);
myArray.push(4);
myArray.push(5);