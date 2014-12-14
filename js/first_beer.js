var first_beer = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && action==="Pívo")
			{
				this.done=1;
				var message='<h3><center> Pívo</center></h3>';
				message+="<h5>Díky za pivo, hned se cítím klidnější!<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 7000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
