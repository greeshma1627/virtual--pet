class food {
  constructor(x, y) {
  var options = {
  restitution: 1,
  friction: 0,
 isStatic:true
     }
this.lastFed
this.foodStock
     }

 display(){
fill(255,255,254);
textSize(15);
if(lastfed>12){
  text("Last Feed :"+ lastFed%12 + "PM",350,30);
}else if (lastFeeed === 0){
  text("Last Feed: 12AM",350,30 );
}else{
  text("Last Feed :"+ lastFed+ "AM",350,30);
}

var x =80,y=100;
imageMode(CENTER);
image(this.image,720,220,70,70);
if(this.foodStock!==0){
  for(var i=0; i <this.foodStock;i++){
    if(1%10===0){
      x=80;
      y=y+50;
    }
    image(this.image,x,y,50,50);
    x=x+30;
  }
  }

  getCount(){
    var getFoodStock = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }
 }

 update(){
  var getFoodStock = "players/player" + this.index;
  database.ref(playerIndex).set({
    name:this.name,
    distance:this.distance
  });
}

decutFood(){
  database.ref('deduct Food').on("value",(data)=>{
    this.rank = data.val();
  })
}



}

 function preload(){
  Milkimage = loadImage("Milk.png");
  }


    
