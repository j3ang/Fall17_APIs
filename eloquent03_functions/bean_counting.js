// Your code here.
function countBs(string){
  var counter = 0;
	 for(x=0;x<string.length;x++){
     	if (string.charAt(x) == 'B' || string.charAt(x) == 'b'){
        	counter++;
        }
     }
  return counter;
}

function countChar(Stra,Strb){
	var counter2 = 0;
  	for(x=0;x<Stra.length;x++){
    if (Stra.charAt(x) == Strb){
   	    	counter2++;
    	}
    }
  	return counter2++;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4