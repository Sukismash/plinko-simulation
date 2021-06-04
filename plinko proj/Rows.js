class Rows{
    constructor(x,y,w,h){
        var options = {
            isStatic : true,
        }

        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h; 
        this.color=color(random(0, 1200), random(0, 150), random(0, 255));
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(this.color);
        rect(pos.x,pos.y,this.w,this.h);
    }
};