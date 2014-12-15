var sixbeer = {
	count:0,
	update : function(action)
		{
			if(action==="Pívo")
			{
				this.count=this.count+1;
			}
			else
			{
				this.count=0;
			}

			if(this.count>=6)
			{
				jadernak.ShowMessage("<h2><center> OPILČE! </center></h2>");
				jadernak.Health=0;
				jadernak.Knowledge=0;
				document.getElementById("body_id").style.backgroundImage="url('image/pivo.JPG')";
				document.getElementById("jadernak_id").src="image/Opity1.png";
				jadernak.Timer=setTimeout("jadernak.Update()", 10000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
