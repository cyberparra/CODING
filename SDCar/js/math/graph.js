class Graph{
    constructor (points = [], segments = []){
        this.points=points;
        this.segments=segments;
    }
    addPoint(point){
        this.points.push(point);
    }

    tryAddPoint(point){
        if(!this.containsPoint(point)){

            this.addPoint(point);
            return true;
        }
        
            return false;
        
    }
//check points at same coordinates
    //equals ha to be defined in point.js
    containsPoint(point){
        return this.points.find((p)=> p.equals(point));
    }

    removePoi(point){
        const segs=this.getSegmentsWithPoi(point);
        for(const seg of segs){
            this.removeSegments(seg);

        }
        this.points.splice(this.points.indexOf(point),1);
    }

    addSegment(seg){
        this.segments.push(seg);
    }
   

    containsSegment(seg){
        return this.segments.find((s)=> s.equals(seg));
    }

    tryAddSegment(seg){
        if(!this.containsSegment(seg) && !seg.p1.equals(seg.p2)){
            this.addSegment(seg);
            return true;
        }
        return false;
    }

    removeSegments(seg){
        this.segments.splice(this.segments.indexOf(seg),1);

    }
    getSegmentsWithPoi(point){
        const segs=[];
        for(const seg of this.segments){
            if(seg.includes(point)){
                segs.push(seg);
            }
        }
        return segs;    
    }

    dispose(){
    this.points.length=0;
    this.segments.length=0;
    }
    

   draw(ctx){
    for(const seg of this.segments){
    seg.draw(ctx)
    }
    for(const point of this.points){
        point.draw(ctx)
        }

   }
}

