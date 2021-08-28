
class Ground {
    constructor(x,y,width,height){
        var option = {
            isStatic: true,
            "restitution":0,
            "friction":0,
            "destiny":1
        }
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;

World.add(world,this.body);
    }
display(){
    rectMode(CENTRE);

    fill(255);

    rect(this.body.position.x,this.body.position.y,this.width,tis.height);
}

}