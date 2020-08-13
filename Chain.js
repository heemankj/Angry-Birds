class Chain{
constructor(objA,objB){
var options={
bodyA:objA,
bodyB:objB,
length:100,
stiffness:0.5
}
this.chain= Matter.Constraint.create(options);
World.add(world,this.chain)
}
display(){
var pointA=this.chain.bodyA.position;
var pointB=this.chain.bodyB.position;
push();
strokeWeight(5);


line(pointA.x,pointA.y,pointB.x,pointB.y)
pop();


}
}