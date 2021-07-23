   
         
      function show(num){
        
    
        var output= document.getElementById("outputfield"); 
        output.value+= num;

         }
         function equal(){
           var exp= document.getElementById("outputfield").value;
           
          
            var result=  eval(exp);
          
      
            document.getElementById("outputfield").value=result;
           
      
         }
         function backspace(){
           var exp= document.getElementById("outputfield").value;
           
           length= exp.length;
           
          modified= exp.slice(0, (length-1));
           document.getElementById("outputfield").value=modified;
           
         }
         function clearall(){
          document.getElementById("outputfield").value=" ";
         }
 
