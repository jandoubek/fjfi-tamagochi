var mam = {
	done: 0,

	update : function(action)
		{		
			//alert(action);
			if(this.done==0 && jadernak.week==12 )
			{

				MA1_Z2
				MA1_Z1
				this.done=1;
				var message='<h3><center> Teče Ti do bot</center></h3>';
				message+="<h5>Analýza se Ti nepovedla, Zkus ZLO(mky)!<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 1);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
