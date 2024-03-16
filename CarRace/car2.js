    /*
the object for the car
Starttin with the class Car and the constructor with 4 param (car properties): pos and dim

*/


class Car2{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        
        //add control mavigation for the car
        //this.controls= new Controls();


    }
    //add update method to move the car

    update2(){
                  
        this.speed-=this.acceleration
        
        

        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed;
        }
        if(this.speed<-this.maxSpeed){
            this.speed=-this.maxSpeed;
        }
        //the friction stop the car after a while unless you press back/fw again (hit the accelerator)
        if(this.speed>0){
            this.speed-=this.friction
        }
        if(this.speed<0){
            this.speed+=this.friction
        }
        if(Math.abs(this.speed)<this.friction){
            this.speed=0;
        }

        this.y-=this.speed;
        if(this.y>canvas.height){
            this.y=0;
            this.maxSpeed+=1;
            if(this.maxSpeed>10){
                this.maxSpeed=10;
            }
            this.x=Math.random()*(canvas.width-50);
        }
    
    }
    

    //add the method draw() to the context ctx
    draw2(ctx){
           
            ctx.drawImage(image2,this.x,this.y,this.width,this.height);
          
    
    }

}
