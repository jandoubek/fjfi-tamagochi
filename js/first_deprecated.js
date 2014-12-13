var first_deprecated = {
	unaveny: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.unaveny==1 && jadernak.state>0)
				this.unaveny=0;

			if(this.unaveny==0 && jadernak.state==0)
			{
				this.unaveny=1;
				var message='<h3><center> Jsi unavený</center></h3>';
				message+="<h5>Tvůj Jaderňák je příliš unavený a smutný. V tomto stavu se není schopen učit!<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 7000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);

		}
};
