class Paper
{
constructor(x,y,radius){
    var options = {restitution:0.3,isStatic:false,friction:0.05,density:1.2};

    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("Images/paper.png");
    this.radius = radius;
 
    World.add(world,this.body);


}
display(){
var pos = this.body.position;

ellipse(this.image,pos.x,pos.y,this.radius);
image(this.image,pos.x,pos.y,this.radius);

}

}
