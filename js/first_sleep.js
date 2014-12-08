var first_sleep = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && action==="Spánek")
			{
				this.done=1;
				var message='<h1><center> Spánek</center></h1>';
				message+="<h5>Unavený jsi padl na strahově do postele. Spánek Ti dodává zdraví!<h5>";
				jadernak.ShowAlert(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 10000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
