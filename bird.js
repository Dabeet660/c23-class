class Bird{
    constructor(x,y){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.5
        }
        this.body = Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x = mouse.x;
        pos.y = mouse.y;

        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(9);
        stroke("Blue");
        fill("Green");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}