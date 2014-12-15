var mam = {//set MAM to undone if MA_Z1 a MA_Z2 failed
	done: 0,

	update : function(action)
		{		
			
			if(this.done==0 && jadernak.Week==12 )
			{
				
				this.done=1;
				//find id of subject
				for (var id1=0; id1<Subjects.length; id1++) {
					if(Subjects[id1].id === "MA1_Z1") {
						break;
			  		}
				}
				
				//find id of MA1_Z2
				for (var id2=0; id2<Subjects.length; id2++) {
					if(Subjects[id2].id === "MA1_Z2") {
						break;
			  		}
				}

				//find id of MA1_Z2
				for (var id3=0; id3<Subjects.length; id3++) {
					if(Subjects[id3].id === "MAM") {
						break;
			  		}
				}	
				
				if(Subjects[id1].done==0 || Subjects[id2].done==0)
				{
					Subjects[id3].done=0;				
					var message='<h3><center> Teče Ti do bot</center></h3>';
					message+="<h5>Analýza se Ti nepovedla, Zkus ZLO(mky), tedy MAM!<h5>";
					jadernak.ShowMessage(message);
					jadernak.Timer=setTimeout("jadernak.Update()", 5000);	
				}
				else
				{
					jadernak.Timer=setTimeout("jadernak.Update()", 1);
				}
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
