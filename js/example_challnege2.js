var example_challenge2 = {
	done:0,

	update : function(){
		if(jadernak.Health>75 && this.done==0)
		{	
			this.done=1;				
			document.getElementById("whole_game_id").innerHTML="<h1><center> Pokusný challenge 2 -Dosáhl jsi zdraví 75!</center></h1>";
			setTimeout("jadernak.render()", 3000);
		}
		else
			jadernak.render();	
		
	}

};
