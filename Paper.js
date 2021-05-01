class Paper
{
	constructor(x,y,r)
	{
		var options={
            restitution:0.3,			
            friction:0,
            density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("paper.png")
		this.body=Bodies.circle(x, y,r,options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var paperPos=this.body.position;
			var angle= this.body.angle;
			push()
			translate(paperPos.x,paperPos.y)
			rotate(angle)
            image(this.image,0,0,this.r,this.r)
            imageMode(CENTER)
			pop()
			
	}


}


