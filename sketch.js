//Create variables here
var dogImg;
var dog;

var happyDogImg;
var happyDog;

var database;

var food;

var foodS;
var foodStock;
function preload()
{
	//load images here
  dogImg = loadImage("Dog.png");
  happyDogImg = loadImage ("happydog.png");
  var x = 10;
  console.log(x);
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.5;



  database = firebase.database();
  database.ref("Food").on("value",readstock)

  
  
}


function draw() {  
  background(46,139,87);
// text needs to be written here
textSize(30);
text("food= "+ foodS, 300,30);
  drawSprites();
  //add styles here



  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDogImg);
  }

}

function readstock(data) {
console.log(data)
  foodS = data.val()
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  console.log(x);
  database.ref('/').update({
    Food:x
  })
}

