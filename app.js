// Rover Object Goes Here
// ======================
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: "(0, 0)"
}
// ======================
function turnLeft(){  
  switch (rover.direction){
    case "N": rover.direction = "W"; break;   
    case "S": rover.direction = "E"; break;   
    case "E": rover.direction = "N"; break;   
    case "W": rover.direction = "S"; break;   
  }
  console.log("turnLeft was called!");
}

function turnRight(){
  switch (rover.direction){
    case "N": rover.direction = "E";break;             
    case "S": rover.direction = "W"; break;   
    case "E": rover.direction = "S"; break;   
    case "W": rover.direction = "N"; break;   
  }  
  console.log("turnRight was called!");
}

function moveForward()
{
  var error = 0;
  switch (rover.direction)
  {
    case "N": 
      if (rover.y > 0)
        rover.y = rover.y - 1; 
      else
        error = 1;      
      break;
    case "S":
      if (rover.y < 9)
        rover.y = rover.y + 1; 
      else
        error = 1;    
      break;
    case "E": 
      if (rover.x < 9)
         rover.x = rover.x + 1;
      else
        error = 1;          
      break;
    case "W": 
      if (rover.x > 0)
        rover.x = rover.x - 1; 
      else
        error = 1;        
      break;
  }  
  if (error == 1)
    console.log("error, no puedes sacar a rover de su cuadricula de movimiento"); 
  rover.travelLog = rover.travelLog + " (" + rover.x + ", " + rover.y + ")";
  console.log("moveForward was called");
}

function moveBackward()
{
  var error = 0;
  switch (rover.direction)
  {
    case "N": 
      if (rover.y < 9)
        rover.y = rover.y + 1; 
      else
         error = 1;          
      break;
    case "S":
      if (rover.y > 0)
        rover.y = rover.y - 1; 
      else
         error = 1;     
      break;
    case "E": 
      if (rover.x > 0)
         rover.x = rover.x - 1;
      else
        error = 1;          
      break;
    case "W": 
      if (rover.x < 9)
        rover.x = rover.x + 1; 
      else
         error = 1;          
      break;
  }  
  if (error == 1)
    console.log("error, no puedes sacar a rover de su cuadricula de movimiento"); 
  rover.travelLog = rover.travelLog + " (" + rover.x + ", " + rover.y + ")";
  console.log("moveForward was called");
}

function comando(ordenes){
  for (i= 0; i <=ordenes.length; i++)
  {
    switch (ordenes[i])
    {
      case "f": moveForward(); break;
      case "b": moveBackward(); break;
      case "r": turnRight(); break;
      case "l": turnLeft(); break;
      default: break;  
    }
  }

}



var misOrdenes ="rffrttbflfrbf";
//var misOrdenes ="ffrfflfrff";
comando(misOrdenes);
console.log("travellog " + rover.travelLog);