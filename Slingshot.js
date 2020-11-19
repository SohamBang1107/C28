class slingshot {
       constructor(bodyA , pointB){
             var options = {
                       bodyA:bodyA,
                       pointB:pointB,
                       stiffness:0.04,
                       length:10,

             }
                 this.pointB = pointB;
             this.sling = Matter.Constraint.create(options)
             World.add(world ,this.sling)
       }
          display(){
            if(this.sling.bodyA){
    var p1 = this.sling.bodyA.position ;
    var p2 = this.pointB;
    line(p1.x ,p1.y ,p2.x, p2.y)
            }
          }
          
          Birdfly(){
  this.sling.bodyA = null ;

    }




}