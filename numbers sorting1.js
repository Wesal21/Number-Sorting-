
  {
    let num1 = Number(prompt("Enter the first num"))||0;
    let num2 = Number(prompt("Enter the second num"))||0;
    let num3 = Number(prompt("Enter the third num"))||0;


  
   
    if ((num1<num3)&&(num2<num3)){
       if(num1<num2){
        alert(num1.toString() + "  "+ num2.toString() +" "+ num3.toString());
       }
       else{
       alert (num2.toString()+" "+num1.toString()+"  " +num3.toString());
       }
    }

    if((num2<num1)&&(num3<num1)){
       if(num2<num3){
      alert (num2.toString()+ "  "+num3.toString()+ "  "+num1.toString());
       }
       else {
         alert(num3.toString()+ "  " +num2.toString()+ "  " +num1.toString());
       }
    }
    
    if((num1<num2)&&(num3<num2)){
       if(num1<num3){
         alert(num1.toString()+"  " + num3.toString()+"  " +num2.toString());
       }
       else{
         alert(num3.toString()+  "   " + num1.toString()+  "   " + num2.toString());
       }

    }


    
    }



    
    
 








 

         
    
 
   
 
 
    