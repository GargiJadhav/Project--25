class Ground
{
constructor(x,y,width,height){
var options={isStatic:true};
    this.body = Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
    this.width=width;
    this.height=height;

}
display(){
var posa = this.body.position;
fill("yellow");
    rect(posa.x,posa.y,this.width,this.height);


}

}