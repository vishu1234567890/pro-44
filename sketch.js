var bat,bat1,bat2

var run


function preload(){
supraImg = loadImage("supra.png")
ballImg = loadImage("ball.png")
Run = loadImage ("runAnimation.gif")

batAnimation = loadAnimation ("bat.png","bat1.png","bat2.png")
boyRun = loadAnimation ("run1.png","run3.png","run4.png")


}

function setup() {
createCanvas(600,400)
bat = createSprite(130,250,20,20)
bat.addAnimation("fly",batAnimation)
bat.scale = 0.5

run = createSprite (250,200,20,20)
run.addAnimation("Run",boyRun)
run.scale = 0.5



supra = createSprite (200,200,20,20)
supra.addImage(supraImg)
supra.scale = 0.5

ball = createSprite (50,100,20,20)
ball.addImage(ballImg)
ball.scale = 0.5


}

function draw() {
background(180)



drawSprites()
}

