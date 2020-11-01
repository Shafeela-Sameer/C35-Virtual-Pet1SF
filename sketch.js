//Create variables here
var dog, dogImg, happyDog, database, foodS, foodStock;


function preload()
{

  dogImg=loadImage ("images/dogImg.png");
  happyDog= loadImage ("images/dogImg1.png");
	//load images here
}

function setup() {
  createCanvas(500, 500);
  database =firebase.database();

  foodStock=database.ref("food");
  foodStock.on("value",readStock);

  dog =createSprite(250,300,20,20);
  dog.addImage(dogImg);
  dog.scale=0.3;


}


function draw() {  
  background(46,139,87);

  if (foodS!== undefined){
  if (keyDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDog);

  }//else {
    //dog.addImage(dogImg);
  // }

  drawSprites();
}
  //add styles here
textSize(20);
stroke("green");
fill("red");
  text("Food Stock: "+ foodS, 200, 120);
  textSize(20);
  stroke("black");
  fill("red");
  text("Press Up arrow key to feed Drago Milk",90, 40);


}
//function to read values from database
function readStock(data){

  foodS=data.val();
console.log("reading")

}

function writeStock(x){

  if (x<=0){
    x=0;
  }else{
    x=x-1;
  }
database.ref("/").set({
  food:x
})
//console.log(foodS)

}