class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.Paper=Bodies.circle(100,0,20,options)
      
        World.add(world,this.Paper)
    }
    display(){
     var pos=this.Paper.position
     ellipseMode(CENTER) 
     fill ("pink")
     ellipse(pos.x,pos.y,20,20)
    }

    

}
