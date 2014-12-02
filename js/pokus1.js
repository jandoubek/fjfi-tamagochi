var pokus1 = {
	done: 0,

	update : function(number,action)
		{
			//alert(action);
			if(jadernak.Knowledge>50 && this.done==0)
			{
				this.done=1;
				jadernak.ShowAlert("<h1><center> Šprt!</center></h1>",5000,number,action);
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
