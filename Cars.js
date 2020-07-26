class Cars{
    constructor(role){
        this.role = role;
        if(this.role == 0){
            rectMode(CENTER);
            this.x = 200;
            this.y = 360;
            this.color = "red";
            this.lane = 2;
        }
        else if(this.role == 1){
            this.color = "yellow";
            this.lane = ceil(random(0,3));
            this.y = -40;
        }
    }
    refresh(){
        fill(this.color);
        if(this.lane == 1){
            this.x = 70;
        }
        else if(this.lane == 2){
            this.x = 200;
        }
        else if(this.lane == 3){
            this.x = 330;
        }

        if(this.role == 0){
            rect(this.x,this.y,30,50);
        }
        else if(this.role == 1){
            fill(this.color);
            this.y += 5;
            rect(this.x,this.y,30,50);
        }
    }
    
}