// declaring the constants for the game .
const World = Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

//variables for the game
var player;

var ground;

var engine;
var world;



function setup(){

createCanvas(600,400);

engine = Engine.create();
world = engine.world;

ground = new Ground(200,390,800,20);
player = new Player(50,350);





}
function draw(){
background("lightblue");

ground.display();
player.display();

}