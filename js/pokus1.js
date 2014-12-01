var pokus1 = {
	done: 0,

	update : function(number,action)
		{
			//alert(action);
			if(jadernak.Knowledge>50 && this.done==0)
			{
				this.done=1;
				document.getElementById("message_id").innerHTML="<h1><center> Šprt!</center></h1>";
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5000);
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
