function predmet(nazev,kredity,zdravi,znalosti){
	this.nazev=nazev;
	this.kredity=kredity;
	this.zdravi=zdravi;
	this.znalosti=znalosti;
}


var semestr = {
	hodiny:168,
	kredity:0,
	predmety:Array(),

	init : function(){

		//nacteni predmetu - zatim fake - jinak by melo byt ze souboru
		this.predmety[0]=new predmet("Analyza",10,-20,-10);
		this.predmety[1]=new predmet("ZPRO",2,-10,-5);

		//zobrazeni predmetu
		document.write('<div class="col-xs-4"><div>');
		for (var i=0; i<this.predmety.length; i++) {
			document.write('<div id="'+this.predmety[i].nazev+'"> <button type="button" class="btn btn-lg btn-default btn-block" onClick="semestr.onClick(\''+this.predmety[i].nazev+'\')">'+this.predmety[i].nazev +'</button> </div>');
			};
		document.write('</div></div></div>');
		//zobrazeni kreditu a hodin
    	document.write('<div class="row top2"><div class="col-xs-4"></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="kredity">Kreditů: '+this.kredity+'</div></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="hodiny">Hodiny: '+this.hodiny+'</div></div><div class="col-xs-4"></div></div></div>');
		},

	onClick: function(nazev){
		//zatím se predmet vzdy povede udelat

		//najdi predmet
		for (var id=0; id<this.predmety.length; id++) {
 			if(this.predmety[id].nazev === nazev) {
				break;
	  		}
		}
						
		//update vnitrich hodnot
		this.kredity+=this.predmety[id].kredity;
		document.getElementById("kredity").innerHTML = 'Kreditů: '+this.kredity;
		

		//alert("zdravi: "+this.predmety[id].zdravi+" znalosti:"+this.predmety[id].znalosti); //oznameni dalsim objektum

		jadernak.update(this.predmety[id].zdravi,this.predmety[id].znalosti);

		//smaz jej ze seznamu predmetu ?? Nějakej error....
		//delete this.predmety[id];

		//smaz pedmet (automaticky udelany?) -- tohle mozna bude chtit nejakou update funkci, která zkontroluje prekresleni vseho
		var elem = document.getElementById(nazev);
	    	elem.parentNode.removeChild(elem);
	},

	updateHodiny: function(hodiny){
		this.hodiny+=hodiny;
		document.getElementById("hodiny").innerHTML ='Hodiny: '+this.hodiny;

	}

	

}; 


