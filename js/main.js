
var MAX = 4;
var selector = '#c'
var pointer = 1;
var auxSel = "";
$(document).ready(function(){
		// ocultando cursores
 		$("body").ready(function(){
 		    for(var i = 2; i < MAX; i++) {
			    auxSel = selector + i;
			    $(auxSel).hide();
 		    }
 		 });	 
 		 
	});
	
 $(document).keydown(function(e){
      if(e.keyCode==87) { // w
      	//ocultamos el puntero
      	 auxSel = selector + pointer;
		 $(auxSel).hide();
      	// indicamos donde esta el nuevo puntero
      	if(pointer == 1)
      		pointer = MAX - 1;
      	else 
      		pointer--;
      	// mostramos el nuevo puntero
      	 auxSel = selector + pointer;
		 $(auxSel).show();
      	
      	
      	
      	
      	console.log(pointer);
      } else if (e.keyCode==83) { // s
      	//ocultamos el puntero
      	 auxSel = selector + pointer;
		 $(auxSel).hide();
      	if(pointer == MAX - 1)
      		pointer = 1;
      	else 
      		pointer++;
      	// mostramos el nuevo puntero
      	 auxSel = selector + pointer;
		 $(auxSel).show();
      	console.log(pointer);    
      }
 });
