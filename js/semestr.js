function subject(Name,Credits,Health,Knowledge){
	this.Name=Name;
	this.Credits=Credits;
	this.Health=Health;
	this.Knowledge=Knowledge;
}


var semestr = {
	Hours:168,
	Credits:0,
	Subjects:Array(),

	init : function(){

		//nacteni predmetu - zatim fake - jinak by melo byt ze souboru
		this.Subjects[0]=new subject("Analyza",10,-20,-10);
		this.Subjects[1]=new subject("ZPRO",2,-10,-5);

		//zobrazeni predmetu
		document.write('<div class="col-xs-3"><div>');
		for (var i=0; i<this.Subjects.length; i++) {
			document.write('<div id="'+this.Subjects[i].Name+'"> <button type="button" class="btn btn-lg btn-default btn-block" onClick="semestr.onClick(\''+this.Subjects[i].Name+'\')">'+this.Subjects[i].Name +'</button> </div>');
			};
		document.write('</div></div></div>');
		//zobrazeni kreditu a hodin
    	document.write('<div class="row top2"><div class="col-xs-4"></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="kredity">Kreditů: '+this.Credits+'</div></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="hodiny">Hodiny: '+this.Hours+'</div></div><div class="col-xs-4"></div></div></div>');
		},

	onClick: function(Name){
		//zatím se predmet vzdy povede udelat

		//najdi predmet
		for (var id=0; id<this.Subjects.length; id++) {
 			if(this.Subjects[id].Name === Name) {
				break;
	  		}
		}
						
		//update vnitrich hodnot
		if(jadernak.Health>=-this.Subjects[id].Health && jadernak.Knowledge>=-this.Subjects[id].Knowledge)
		{
			this.Credits+=this.Subjects[id].Credits;
			document.getElementById("kredity").innerHTML = 'Kreditů: '+this.Credits;
			alert("Udělal jsi zkoušku z předmětu:"+this.Subjects[id].Name);
			jadernak.update(this.Subjects[id].Health,this.Subjects[id].Knowledge,20);

			//smaz pedmet
			var elem = document.getElementById(Name);
		    	elem.parentNode.removeChild(elem);
		}
		else
		{
			alert("Neudělal jsi zkoušku z předmětu:"+this.Subjects[id].Name);
			jadernak.update(this.Subjects[id].Health,this.Subjects[id].Knowledge,-20);
		}

	},

	update: function(Hours){
		this.Hours+=Hours;
		document.getElementById("hodiny").innerHTML ='Hodiny: '+this.Hours;

	}

	

}; 


