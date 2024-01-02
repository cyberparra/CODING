
//select the canvas by id
const canvas=document.getElementById("myCanvas");
//set the canvas size like a road
//move this: canvas.height=window.innerHeight in animate() to clean the canvas

canvas.width=200;

//to draw on the canvas create a drawing 2d context
const ctx = canvas.getContext("2d");

const image = document.getElementById("car");

//create the road
const road = new Road(canvas.width/2,canvas.width*0.9);

//create a car(x,y,width, height)
const car = new Car(80,400,22*2,39*2);

//draw the car in the context
car.draw(ctx);

//NOTE: create the car object in a new car.js file to be set in index.html

//to move the car you need to call an animate function

animate()


function animate(){
    car.update();
    //clean the canvas every frame
    canvas.height=window.innerHeight;

    road.draw(ctx);

    //draw the car in the context
    car.draw(ctx,"black");

    requestAnimationFrame(animate); //repeat in infite loop like draw() in P5

}