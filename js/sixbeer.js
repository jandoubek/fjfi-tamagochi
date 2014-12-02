var sixbeer = {
	count:0,
	update : function(number,action)
		{
			if(action==="Pívo")
			{
				this.count=this.count+1;
			}
			else
			{
				this.count=0;
			}

			if(this.count>=6)
			{
				document.getElementById("message_id").innerHTML="<h1><center> OPILČE!</center></h1>";
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5000);
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
