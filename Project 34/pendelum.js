class Bob{
    constructor(x,y,r){
        var  options={
            frictionAir:0.05,
            density:1
         }
         this.body=Bodies.circle(x,y,r,options)
         this.r=r
         World.add(world,this.body)
        }
         display(){
             fill("white")
             push()
      translate(this.body.position.x,this.body.position.y)
      rotate(this.body.angle)
      ellipse(0,0,100,100)
      pop()
         }
         
       }