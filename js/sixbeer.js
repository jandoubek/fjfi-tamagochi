var sixbeer = {
	count:0,
	update : function(action)
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
				jadernak.ShowAlert("<h1><center> OPILČE! </center></h1>");
				jadernak.Timer=setTimeout("jadernak.Update()", 5000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
