 <script>

     
/*Reverse String*/
function myFunction(){
    var str = "My name is pallavi";
    var text = "";
    var len = str.length - 1;
  
    for(i = len; i > -1; i--){
        var res = str.charAt(i); 
        text += str[i];
      
    }
    document.getElementById("result").innerHTML = text;
    
}
 
</script>