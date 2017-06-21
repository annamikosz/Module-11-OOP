var iPhone6S = new Phone("Apple", 2250, "silver", "128GB"),
  SamsungGalaxyS6 = new Phone("Samsung", 2000, "black", "64GB"),
  OnePlusOne = new Phone("One", 1999, "gold", "16GB");

function Phone(brand, price, color, memory) {
  this.brand = brand; 
  this.price = price;
  this.color = color;
  this.memory = memory;
  
}
Phone.prototype.printInfo = function() {
  console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", memory is " + this.memory +".");
  alert("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", memory is " + this.memory +".");
}

var choosePhone = prompt("In our offer are three smartphones available: iPhone6S, SamsungGalaxyS6, OnePlusOne. Please,choose the model you are interested in.", "iPhone6S, SamsungGalaxyS6, OnePlusOne");



if (choosePhone === 'iPhone6S'){
  iPhone6S.printInfo();
} else if (choosePhone ==='SamsungGalaxyS6'){
  SamsungGalaxyS6.printInfo();
} else if (choosePhone ==='OnePlusOne'){
  OnePlusOne.printInfo();
} else {
  alert ("Sorry, you have not selected any options, please try again");
  var choosePhone = prompt("In our offer are three smartphones available: iPhone6S, SamsungGalaxyS6, OnePlusOne. Please,choose the model you are interested in.", "Phone6S, SamsungGalaxyS6, OnePlusOne");
}








