function FoodPicker(arr) {
  this.뭐먹을까 = function () {
    let index = parseInt(Math.random() * arr.length);
    console.log(arr[index]);
  };
}

let food1 = new FoodPicker(['짜장면', '청국장', '김치찌개']);
food1.뭐먹을까();
