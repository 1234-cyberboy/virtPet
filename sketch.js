var dog, happyDog, foodS, foodStock, normal;
var dataBase;

function preload()
{
	
  happyDog = loadImage("images/dogImg1.png");
  normal = loadImage("images/dogImg.png");  
}

function setup() {
	createCanvas(500, 500);

 dog = createSprite(200,200,20,20);
 dog.addImage(normal);
 dataBase = firebase.database();
 foodStock = dataBase.ref('Food');
 foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139,87); 
  if(keyCode === 32){
    writeStock(foodS);
    dog.addImage(happyDog);
  }
  drawSprites();
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  dataBase.ref('/').update({
  Food:x
  })
}


