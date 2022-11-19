addEventListener('load', function() {
  var newButton = document.createElement('button');
  newButton.className = 'btn';
  newButton.innerHTML = 'MyButton'; //replace with text of your button
  newButton.style.backgroundColor = 'seagreen';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  newButton.onclick = function() {
    //place the corrosponding function here
  };
  document.getElementById('Tasks').appendChild(newButton);
});

addEventListener('load', function() {
  var newButton = document.createElement('button');
  //////////Change properties below////////////////
  newButton.innerHTML = 'MyButton'; //replace with text of your button
  newButton.onclick = function() {
    //place the corrosponding function here

  };
  newButton.style.backgroundColor = 'seagreen';
  newButton.style.width = '30%';
  newButton.style.borderRadius = '50px';
  newButton.style.border = '5px outset gray';
  ///////////Change properties above///////////
  newButton.className = 'btn';
  document.getElementById('Tasks').appendChild(newButton);
});


//////////////wind turbine1

robotSocket.send('turbine1,windServo/0/0/0/0/0');
robotSocket.send('turbine1,dumpServo/0/0/0/0/0);
robotSocket.send('turbine1,pixel/0/60/0/0/0');

//////////////wind turbine2

turbine2,windServo/0/60/0/0/0
turbine2,dumpServo/0/60/0/0/0
turbine2,pixel/0/60/0/0/0
  
///////////////////motors////////

robotSocket.send('lineFollow,right,750,5000,0,0');//paramters:side of line, speed, time in ms
robotSocket.send('motorMove,0,1,800,0,0');
robotSocket.send('brake,0,0,0,0,0');
   

///neoPixels//////

robotSocket.send('pixelmulti,off,60,200,300,0');//parameters:color1,color2,color3.color 4. off turn that pixel off
robotSocket.send('pixel,0,60,0,0,0');//parameters:pixel number, color
robotSocket.send('pixelsOff,0,0,0,0,0');//turns all pixels off
