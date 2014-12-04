var pokus2 = {
	done: 0,

	update : function(number,action)
		{
			//alert(action);
			if(jadernak.Knowledge>70 && this.done==0)
			{
				this.done=1;
				jadernak.ShowAlert("<h1><center> Super Šprt!</center></h1>",number, action);
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5000);	
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
