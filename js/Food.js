class Food{
 constructor(){
        var foodStock;
        var lastFed,feedTime
       
        

        this.image=loadImage("images/Milk.png")
    }

    display(){
        imageMode(CENTER)
        image(this.image,720,220,70,70)
        

        var x=80;
        var y=110;

        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
               // i=i+80
               if(i%10==0){
                 x=80
                 y=y+50
                }
                imageMode(CENTER)
                image(this.image,x,y,70,70)
                x=x+30
            }
        }


        
        var feeddog=createButton('feed your LEO');   
        feeddog.position(550,200);
        feeddog.mousePressed(feedDog())

        var addfood=createButton('add Food');
        addfood.position(700,200);
        addfood.mousePressed(addFood)
    }


    getFoodStock(){
        foodStock=database.ref('Food')
        foodStock.on("value",function(data){
            foods=data.val();
        })
    }

    updateFoodStock(x){
        database.ref('/').update({
            Food:x
        })
    }

    
}