// Code goes here

 
 var roboturl="ws://23.94.36.254/"+ robotNumber;
 var robotSocket = new WebSocket(roboturl);
 var msg = '';  

    
    robotSocket.onmessage =  function(event) {
     
      msg = event.data;
      var robotmsg =  msg.split(':');
      temp=robotmsg[1];
      hum=robotmsg[3];
      var binaryType = robotSocket.binaryType;
       console.log(binaryType);
      console.log(msg);
      document.getElementById("footer").innerHTML ="Robot "+robotNumber+" says: "+ msg ;
    };
    
    // exampleSocket.onopen = function (event) {
    //   exampleSocket.send("reallyreally");
    //   console.log("Open succesfully");
    // };
    
    robotSocket.onclose = function(event) {
      // By the server/me or both?
      console.log("Connection closed");
    };