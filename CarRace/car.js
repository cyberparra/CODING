    /*
the object for the car
Starttin with the class Car and the constructor with 4 param (car properties): pos and dim

*/


class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.speed=2;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        
        //add control mavigation for the car
        this.controls= new Controls();


    }
    //add update method to move the car

    update(){
        if(this.controls.forward){
            this.y-=2; 
            //insteaad of static moving
            //this.speed+=this.acceleration
            
        }
        if(this.controls.back){
            this.y+=2;
            
            //this.speed-=this.acceleration
        }
        if(this.controls.left){
            this.x-=this.speed;
            if(this.x<road.left){
                this.x=road.left;
            }            
        }
        if(this.controls.right){
            this.x+=this.speed;
            if(this.x>road.right-45){
                this.x=road.right-45;
            }              
        }

        /*

        use speed acceleration and friction




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
        */
    }
    

    //add the method draw() to the context ctx
    draw(ctx){
           
            ctx.drawImage(image,this.x,this.y,this.width,this.height);
          
    
    }

}
