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

        this.speed=0;
        this.acceleration=0.2;
        this.maxSpeed=3;
        this.friction=0.05;
        
        //add control mavigation for the car
        this.controls= new Controls();


    }
    //add update method to move the car

    update(){
        if(this.controls.forward){
            //this.y-=2; insteaad of static moving
            this.speed+=this.acceleration
            
        }
        if(this.controls.back){
            //this.y+=2;
            this.speed-=this.acceleration
        }
        if(this.controls.left){
            this.x-=1;            
        }
        if(this.controls.right){
            this.x+=1;            
        }




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
    }

    //add the method draw() to the context ctx
    draw(ctx,col){
        const rad=3;

        ctx.beginPath();
        ctx.arc(this.x-this.width/2+rad*3, this.y-this.height/2, rad, 0, 2 * Math.PI, false);
        ctx.arc(this.x+this.width/2-rad*3, this.y-this.height/2, rad, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'yellow';
        ctx.lineStroke=2;
        ctx.strokeStyle="black";
        ctx.stroke();
       
        
        ctx.fill();



        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height,
        )
        ctx.fillStyle=col;
        ctx.fill();

        
        
    }

}
