var memory = 0;
var price = 0;
var message = "";
var color = "";
var colimg = "";
var priceArr = [300, 500, 800];
var colorArr = ['<img src="img/black1.png">', '<img src="img/gold.png">', '<img src="img/silver.png">'];

while(true) {
 memory = +prompt("memory?");
 if(memory === 64) {
  price = priceArr[0];
  break;
 } else if(memory === 128) {
  price = priceArr[1];
  break;
 } else if(memory === 256) {
  price = priceArr[2];
  break;
 } else if(memory === 0){
  message = "Пока!";
  break;
 } else {
  alert("Поробуйте снова");
 }
}

while(memory) {
 color = prompt("color?");
 if(color === "black") {
  colimg = colorArr[0];
  break;
 } else if(color === "gold") {
  colimg = colorArr[1];
  break;
 } else if(color === "silver") {
  colimg = colorArr[2];
  break;
 } else if(color === null) {
  message = "Пока!";
  break;
 } else {
  alert("Поробуйте снова");
 }
}

if(price && color) {
  document.write("price" + price + "$" + "<br>" + colimg);
}
if (message) {
  document.write(message);
}
