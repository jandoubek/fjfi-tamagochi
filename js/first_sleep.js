var first_sleep = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && action==="Spánek")
			{
				this.done=1;
				var message='<h3><center> Spánek</center></h3>';
				message+="<h5>Spánek mi dodává zdraví!<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 7000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
