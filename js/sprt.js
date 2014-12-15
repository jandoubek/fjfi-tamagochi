var sprt = {
	done: 0,

	update : function(action)
		{
			//alert(action);
			if(jadernak.Knowledge>90 && this.done==0)
			{
				this.done=1;
				var message='<h1><center> Jsi Šprt! Dosáhl jsi 90 Znalostí </center></h1> <br>';
				message+='<iframe src="http://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fkmlinux.fjfi.cvut.cz%2F%7Ehanouvit%2Fdev%2Ffjfi-tamagochi%2FFB%2Fsprt.html&amp;layout=button" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>';
				jadernak.ShowAlert(message);
				//jadernak.Timer=setTimeout("jadernak.Update()", timeout);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
