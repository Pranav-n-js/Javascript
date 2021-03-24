function nature(type){
  this.type=type;
}
let human=new nature("ominivorus");
console.log("Objects of fuction can be accessed using . ",human.type);
let cow=new nature("herbivorus");
console.log();
// prototype is recipe for creating objects

nature.prototype.requires="Environment"
console.log(human.requires,cow.requires); //once prototype is created for the functions it reflects all objects created through that function
let lion=new nature("carnivours")
console.log(lion.requires);
nature.prototype={
hunt:function(){
  console.log("they can Hunters");
}
}
nature.prototype.constructor=nature
console.log(lion.hunt);
let forestHabbitant = function(obj){
  obj.lives=function(){
    console.log("These creature lives in jungle");
  }
}
let kingLion ={
  type:"Hunter",
  eats:"meat"
}
let deer={
  type:"innocent",
  eats:"grass"
}
forestHabbitant(lion);
forestHabbitant(deer);
deer.lives()
