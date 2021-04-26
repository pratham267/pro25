class box{
    constructor(x,y){

        
       this.x=x;
       this.y=y;
       this.width=170;
       this.height=20;

       this.image=loadImage("dustbin.png")

       this.bottom=Bodies.rectangle(this.x,this.y,this.width,this.height,{isStatic=true});
       this.left=Bodies.rectangle(this.x-90,this.y,this.width-150,this.height+80);
       this.right=Bodies.rectangle(this.x+90,this.y,this.width-150,this.height+80);
       
       World.add(world,this.bottom);
       World.add(world,this.left);
       World.add(world,this.right);
    }
    display(){
        var posbottom=this.bottom.position;
        var posleft=this.left.position;
        var posright=this.bottom.position;


        push();
        translate(posleft.x,posleft.y);
        
        rectMode(CENTER);
        angleMode(RADIUS)
        fill(255);
        rotate(this.angle);
        imageMode(CENTER);

        pop();


        push();
        translate(posright.x,posright.y);
        
        rectMode(CENTER);
        angleMode(RADIUS)
        fill(255);
        rotate(this.angle);
        imageMode(CENTER);

        pop();


        push();
        translate(posbottom.x,posbottom.y);
        
        rectMode(CENTER);
        angleMode(RADIUS)
        fill(255);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0,-this.height/2,this.width, this.height);
        pop();
    }
}