//Create variables here
var dog,HappyDog,dogimg,dogHappyimg
var database;
var foods,foodStock,lastFed,foodObj,fedTime;


function preload()
  {
  
  dogimg=loadImage("images/dogImg.png")
  
  dogHappyimg=loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
  
  database=firebase.database();
  console.log(database);
  createCanvas(2000, 1200);
  dog=createSprite(350,350,10,10);
  dog.scale=0.5; 
  dog.addImage(dogimg)
  
  foodObj=new Food();

  //getting the value of food remaining
  /*foodStock=database.ref('Food');
  foodStock.on("value",function(data){
   foods=data.val();
  })*/

}


function draw() {  
  background(46,139,87)
  textSize(30)
  fill("blue")
  text("Press UP_ARROW KEY to Feed LEO",50,50)

  foodObj.display();

  /*fedTime=database.ref('FeedTime')
  fedTime.on("value",function(data){
    lastFed=data.val()
  })*/
 
  //add styles here
 /* if(keyWentDown(UP_ARROW)){   
   // foods=foods-1
    writeStock(foods)
    dog.addImage(dogHappyimg)
    
  }

  if(keyWentDown(DOWN_ARROW)){
      foods=foods+1
      writeStock(foods)
  }*/

  drawSprites();
  textSize(25)
  fill("red")
  text("FoodStock  :"+ foods,200,100)
}
//function which reads value of food remaining from database
/*function readStock(data){
  foods=data.val();
}

//function which writes value of food remaining in database
function writeStock(x){
 if(x<=0 ){
 x=0
 }
 else{
   x=x-1;
 }
 database.ref('/').update({
 Food:x
 })
}*/

function addFood(){
  foods++
  database.ref('/').update({
    Food:foods
  })
}

function feedDog(){
  dog.addImage(dogHappyimg)
 // foodObj.updateFoodStock(foods-1)
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  //foodObj.getFoodStock(foods=foods-1)
 // foods=foods-1


  database.ref('/').update({
    Food:foodObj.getFoodStock()
  })
}  



