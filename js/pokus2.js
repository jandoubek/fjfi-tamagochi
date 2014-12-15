var pokus2 = {
	done: 0,

	update : function(action)
		{
			//alert(action);
			if(jadernak.Knowledge>70 && this.done==0)
			{
				this.done=1;
				jadernak.ShowAlert("<h1><center> Super Šprt!</center></h1>");
				jadernak.Timer=setTimeout("jadernak.Update()", 5000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
