var tricetkr = {
	done: 0,

	update : function(action)
		{
			//alert(action);
			if(jadernak.Credits>20 && this.done==0)
			{
				this.done=1;
				var message='<h1><center> Dokonči jsi první semestr </center></h1> <br>';
				message+='<h5>Odstudoval jsi 20 kreditů, takže postupuje do dalšího semsetru!</h5>';
				message+='<iframe src="http://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Fkmlinux.fjfi.cvut.cz%2F%7Ehanouvit%2Fjadernak%2FFB%2Ftricetkr.html&amp;layout=button" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" allowTransparency="true"></iframe>';
				jadernak.ShowAlert(message);
				//jadernak.Timer=setTimeout("jadernak.Update()", timeout);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
