class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.path=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    var pos=this.body.position;
    if(this.body.velocity.x>10&&this.body.position.x>200){
    var xy=[pos.x,pos.y]
    this.path.push(xy)
  }
  
    for(var i=0;i<this.path.length;i++){
      image(this.image1,this.path[i][0],this.path[i][1]);  
    }
  }
}
