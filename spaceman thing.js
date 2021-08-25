var spaceman

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

function preload() {
  bg = loadImage("images/iss.png")
  sleep = loadAnimation("images/slepp.png")
  brush = loadAnimation("images/brush.png")
  gym = loadAnimation ("images/gym21.png","images/gym22.png")
 eat = loadAnimation("https://www.bing.com/images/search?view=detailV2&ccid=Z54Lg9s4&id=72EDBEBBBCDD491DF40308D2151F98D22DDE92A1&thid=OIP.Z54Lg9s4UuSE6V31jAd_zQHaHa&mediaurl=https%3a%2f%2fimg.ksl.com%2fslc%2f2524%2f252496%2f25249638.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.679e0b83db3852e484e95df58c077fcd%3frik%3doZLeLdKYHxXSCA%26pid%3dImgRaw%26r%3d0&exph=2048&expw=2048&q=Delicious+Burger&simid=608038709206784659&FORM=IRPRST&ck=CDFFFA9B83DCC00E5A2833B52C625360&selectedIndex=3&ajaxhist=0&ajaxserp=0")
 drink = loadAnimation("https://www.bing.com/images/search?view=detailV2&ccid=tiSMfeW6&id=12FCF027C3FD86084A1083317F726B81515712EF&thid=OIP.tiSMfeW6lr487wXVbrnxxAHaHa&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b6248c7de5ba96be3cef05d56eb9f1c4%3frik%3d7xJXUYFrcn8xgw%26riu%3dhttp%253a%252f%252fwww.bristol.bs%252fwp-content%252fuploads%252f2016%252f06%252fCaribbean_Bottling_Co._Sprite_Can.png%26ehk%3dkKwyMQUlMy%252f%252ffFIWzKuDVhj89xJdNTiuiMqPYx1%252faWY%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=900&expw=900&q=sprite+can&simid=608003202712020532&FORM=IRPRST&ck=1AFB38E16C8114BAFD4E40DF84EACA64&selectedIndex=2&ajaxhist=0&ajaxserp=0")
move = loadAnimation("https://www.bing.com/images/search?view=detailV2&ccid=v04rTBmS&id=30CEDF7D3E59A0B9FA289A41E445BDFAAF9F9F2E&thid=OIP.v04rTBmS9GfkAv-rlOGUXAHaFj&mediaurl=https%3a%2f%2fmedia.giphy.com%2fmedia%2f4wbQhRWjssoO4%2fgiphy.gif&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.bf4e2b4c1992f467e402ffab94e1945c%3frik%3dLp%252bfr%252fq9ReRBmg%26pid%3dImgRaw%26r%3d0&exph=360&expw=480&q=man+moving+animation&simid=608030488639523457&FORM=IRPRST&ck=25889AE5138FEBCE5EAD12C49357E9D7&selectedIndex=1&ajaxhist=0&ajaxserp=0")
background.png("https://www.bing.com/images/search?view=detailV2&ccid=UKBIfScM&id=3B037605A5439988C5D254F52DD2EC801D86523F&thid=OIP.UKBIfScMemwpjGajf0RjfgHaDt&mediaurl=https%3a%2f%2fimage.freepik.com%2ffree-vector%2ffuture-space-station_1441-2772.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.50a0487d270c7a6c298c66a37f44637e%3frik%3dP1KGHYDs0i31VA%26pid%3dImgRaw%26r%3d0&exph=313&expw=626&q=space+station+cartoon+inside&simid=608005053845683323&FORM=IRPRST&ck=0716BDC7D10D9FE3DDCB8EDFC3747EF9&selectedIndex=7&ajaxhist=0&ajaxserp=0")
}

spaceman = createSprite(300,230)
spaceman.addAnimation("sleepin",sleep)
spaceman.scale = 0.1
createEdgeSprites(topWall)
createEdgeSprites(rightWall)
createEdgeSprites(leftWall)
createEdgeSprites(bottomWall)

if(keyDown("UP_ARROW")) {
  spaceman.addAnimation("brushing",brush)
  spaceman.changeAnimation("brushing")
  spaceman.y=350
  astronaut.velocityX=0
  astronaut.velocityY=0
}

if(keyDown("DOWN_ARROW")) {
  spaceman.addAnimation("gymming",gym)
spaceman.changeAnimation("gymming")
spaceman.y=350
spaceman.velocityX=0
spaceman.velocityY=0
}

if(keyDown("LEFT_ARROW")) {
  spaceman.addAnimation("eating",eat)
  spaceman.changeAnimation("eating")
  spaceman.y=350
  spaceman.velocityX=0
  spaceman.velocityY=0
}

if(keyDown("RIGHT_ARROW")) {
  spaceman.addAnimation("bathing", bath)
  spaceman.changeAnimation("bathing")
 spaceman.y = 350
 spaceman.velocityX = 0
 spaceman.velocityY = 0
}

if(keyDown("M")) {
  spaceman.addAnimation("moving", move)
  spaceman.changeAnimation("moving")
  spaceman.y = 350
  spaceman.velocityX = 0
  spaceman.velocityY = 0
}