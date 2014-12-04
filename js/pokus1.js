var pokus1 = {
	done: 0,

	update : function(number,action)
		{
			//alert(action);
			if(jadernak.Knowledge>50 && this.done==0)
			{
				this.done=1;
				var message='<h1><center> Jsi Šprt! Dosáhl jsi 50 Znalostí </center></h1> <br>';
				message+='<iframe src="http://www.facebook.com/plugins/share_button.php?href=http://kmlinux.fjfi.cvut.cz/~hanouvit/fjfi-tamagochi/FB/alert1.html&layout=button" frameborder="0"width="50%" height="50px" margin-top="20px"></iframe>';
				jadernak.ShowAlert(message,number, action);
				//setTimeout("jadernak.Update("+number+",'"+action+"')", timeout);	
			}
			else
				setTimeout("jadernak.Update("+number+",'"+action+"')", 5);
		}
};
