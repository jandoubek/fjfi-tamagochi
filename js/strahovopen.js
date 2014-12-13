var strahovopen = {//zmeni parametry strahov open air, aby nebylo radno ji znovu navstevovat
	done: 0,

	update : function(action)
		{
			//alert(action);
			if(this.done==0 && action==="Strahov Open Air")
			{
				this.done=1;
				//find Activity index
				for (var id=0; id<Activites.length; id++) {
		 			if(Activites[id].Name === action) {
						break;
			  		}
				}
				
				//demage bazantrikulace
				Activites[id].Health=-50;
				Activites[id].Knowledge=-50;
				Activites[id].Sanity=-50;
				
				Activites[id].Animation= [["Opity1.png", "Opity1.png","Opity1.png"],
		 					  ["Opity1.png", "Opity1.png","Opity1.png"],
							  ["Opity1.png", "Opity1.png","Opity1.png"]];

				var message='<h3><center> Strahov Open Air</center></h3>';
				message+="<h5>Tradiční zahájení semestru na strahově<h5>";
				jadernak.ShowMessage(message);
				jadernak.Timer=setTimeout("jadernak.Update()", 5000);	
			}
			else
				jadernak.Timer=setTimeout("jadernak.Update()", 1);
		}
};
