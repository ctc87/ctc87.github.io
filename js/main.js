
var MAX = 4;
var selector = '#c'
var pointer = 1;
var auxSel = "";
$(document).ready(function(){
		// ocultando cursores
 		$("body").ready(function(){
 		    for(var i = 2; i < MAX; i++) {
			    auxSel = selector + i;
			    $(auxSel).css('visibility','hidden');
 		    }
 		 });	 
 		 
	});
	
 $(document).keydown(function(e){
      if(e.keyCode == 87) { // w
      	//ocultamos el puntero
      	 auxSel = selector + pointer;
		 $(auxSel).css('visibility','hidden')
      	// indicamos donde esta el nuevo puntero
      	if(pointer == 1)
      		pointer = MAX - 1;
      	else 
      		pointer--;
      	// mostramos el nuevo puntero
      	 auxSel = selector + pointer;
		 $(auxSel).css('visibility','visible');
      } else if (e.keyCode == 83) { // s
      	//ocultamos el puntero
      	 auxSel = selector + pointer;
		 $(auxSel).css('visibility','hidden');
      	if(pointer == MAX - 1)
      		pointer = 1;
      	else 
      		pointer++;
      	// mostramos el nuevo puntero
      	 auxSel = selector + pointer;
		 $(auxSel).css('visibility','visible');
      } else if(e.keyCode == 13) { // enter
	  	switch(pointer) {
    		case 1:
      			window.open("http://ctc87.github.io/Practicas_PL/", '_blank')
    		break;
    		case 2:
      			window.open("https://practicas-ayedda-ctc87.c9users.io", '_blank')
        	break;
    		case 3:
      			window.open("#", '_blank')
        	break;
}      
      }
      
      
 });
