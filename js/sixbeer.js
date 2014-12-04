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
				jadernak.ShowAlert("<h1><center> OPILČE! </center></h1>",number, action);
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5000);	
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
