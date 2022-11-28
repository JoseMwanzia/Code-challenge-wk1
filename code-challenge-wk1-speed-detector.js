//SPEED DETECTOR

//In this challenge we calculate the speed of a vehicle using functions and conditional statements

function speedOfVehicle(){
  //variable declaration to be used in determining the speed and demerits points
    let speedOfVehicle = 60;
    let demeritPoints = (speedOfVehicle - 70)/5;

    //if...else...if conditional statements to limit the speed
    if(speedOfVehicle <= 70){
        console.log("Ok");
      }

      else {
        console.log("demeritPoint:" + demeritPoints);
        //if the points exceed 12 the licence is suspended
       if (demeritPoints > 12 ){
      console.log("Licence Suspended");
      }
    }
    }
    //return value according to speed of vehicle
    speedOfVehicle();