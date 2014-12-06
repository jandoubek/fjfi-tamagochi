var first_beer = {
	done: 0,

	update : function(number,action)
		{		
			//alert(action);
			if(this.done==0 && action==="Pívo")
			{
				this.done=1;
				var message='<h1><center> Pívo</center></h1>';
				message+="<h5>Zašel sis do hospody na jedno. Díky tomu se zlepšila tvá příčetnost a zdraví, ale klesli ti znalosti<h5>";
				jadernak.ShowAlert(message,number, action);
				setTimeout("jadernak.Update("+number+",'"+action+"')", 10000);	
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
