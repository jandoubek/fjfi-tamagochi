var example_challenge = {
	done:0,
	update : function(){
		if(jadernak.Knowledge>50 && this.done==0)
		{		
			this.done=1;			

			document.getElementById("activites_id").innerHTML="<h1><center> Šprt!</center></h1>";
			document.getElementById("subjects_id").innerHTML="<h1><center> Šprt!</center></h1>";
			document.getElementById("jadernak_img_id").src="img/smile_zeleny.png";
			setTimeout("example_challenge2.update()", 5000);
			
		}	
		else
			example_challenge2.update();		

	}

};
