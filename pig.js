class Pig{
    constructor(x,y){
       var options = {
           restitution : 0.8
       }
       this.width = 50;
       this.height = 50;
       this.body = Bodies.rectangle(x,y,50,50,options);

       World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        rectMode(CENTER);
        //translate(pos.x, pos.y);
       // rotate(angle);
        strokeWeight(9);
        stroke("Blue");
        rect(pos.x, pos.y, 50,50);
        pop();

    }
}