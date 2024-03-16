class GraphEditor{
constructor(canvas,graph){
    this.canvas=canvas;
    this.graph=graph

    this.ctx=this.canvas.getContext("2d");
    this.selected=null;
    this.hovered=null;
    this.dragging=false;

    //private event
    this.#addEventListeners();

}

#addEventListeners(){

    ///mouse down add point
    this.canvas.addEventListener("mousedown",(evt)=>{
        if(evt.button==2){ //right click
            if(this.hovered){
                this.#removePoi(this.hovered);
            }
        }
        if(evt.button==0){ //left click
            const mouse = new Point(evt.offsetX, evt.offsetY);
            if(this.hovered){
                this.selected=this.hovered;
                this.dragging=true;
                return;
            }

        this.graph.addPoint(mouse);
        this.selected=mouse;
        this.hovered=mouse;
    }
});
        this.canvas.addEventListener("mousemove",(evt)=>{
        const mouse = new Point(evt.offsetX, evt.offsetY);
        this.hovered=getNearestPoint(mouse, this.graph.points,10);//pass 10 to threshold in utils.js
        if(this.dragging==true){
            this.selected.x=mouse.x;
            this.selected.y=mouse.y;
        }

    });
    //avoid context menu to visualize
    this.canvas.addEventListener("contextmenu", (evt)=>evt.preventDefault());


    //release the mouse
    this.canvas.addEventListener("mouseup", ()=>this.dragging=false);

}

#removePoi(point){
    this.graph.removePoi(point);
    this.hovered=null;
    if(this.selected==point){
        this.selected=null;
    }
    

}

display(){
    this.graph.draw(this.ctx);
    if(this.hovered){
        this.hovered.draw(this.ctx, {fill:true}); //define fill in point.js
    }
    if(this.selected){
        this.selected.draw(this.ctx, {outline:true}); //define outiline in point.js
    }
}

}