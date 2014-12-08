var first_learn = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && action==="Učení")
			{
				this.done=1;
				var message='<h1><center> Učení</center></h1>';
				message+="<h5>Je to neuvěřitelné, ale učíš se. Sice Ti přibývají znalosti závratným tempem, ale má to neblahý vliv na tvé zdraví.<h5>";
				jadernak.ShowAlert(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 10000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
