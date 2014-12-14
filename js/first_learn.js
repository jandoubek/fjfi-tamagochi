var first_learn = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && action==="Učení")
			{
				this.done=1;
				var message='<h3><center> Učení</center></h3>';
				message+="<h5>Je to neuvěřitelné, ale učím se. Sice mi přibývají znalosti závratným tempem, ale má to neblahý vliv na mé zdraví.<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 7000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
