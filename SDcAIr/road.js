class Road{
    constructor(x,width,laneCount=3){
        this.x=x;
        this.w=width;
        this.laneCount=laneCount;

        this.left=this.x-width/2;
        this.right=this.x+width/2;

        const inf=100000;
        this.top=-inf;
        this.bottom=inf;

        }
    

    draw(ctx){

        ctx.lineWidth = 5;
        ctx.strokeStyle="white"

        ctx.beginPath();
        ctx.moveTo(this.left,this.top);
        ctx.lineTo(this.left,this.bottom);
        ctx.stroke()

        ctx.beginPath();
        ctx.moveTo(this.right,this.top);
        ctx.lineTo(this.right,this.bottom);
        ctx.stroke()
    }
}
