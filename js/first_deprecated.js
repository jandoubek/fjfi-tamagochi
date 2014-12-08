var first_deprecated = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && jadernak.state==0)
			{
				this.done=1;
				var message='<h1><center> Jsi unavený</center></h1>';
				message+="<h5>Tvůj Jaderňák je příliš unavený a smutný. V tomto stavu se není schopen učit!<h5>";
				jadernak.ShowAlert(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 10000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
