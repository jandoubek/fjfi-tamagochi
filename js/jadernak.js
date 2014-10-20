function aktivita(nazev,cas,zdravi,znalosti){
	this.nazev=nazev;
	this.cas=cas;
	this.zdravi=zdravi;
	this.znalosti=znalosti;
}


var jadernak = {
	zdravi:10,
	znalosti:0,
	aktivity:Array(),
		
	init : function(){

		//nacteni aktivit - mohlo by byt ze souboru
		this.aktivity[0]=new aktivita("Spánek",2,1,-5);
		this.aktivity[1]=new aktivita("Učení",2,-10,+10);
		this.aktivity[2]=new aktivita("Pivo",2,10,-5);

		//zobrazeni aktivit
		for (var i=0; i<this.aktivity.length; i++) {
			document.write('<div id="'+this.aktivity[i].nazev+'"> <button type="button" class="btn btn-lg btn-default" onClick="jadernak.onClick(\''+this.aktivity[i].nazev+'\')">'+this.aktivity[i].nazev +'</button> </div>');
			};

		//zobrazeni Zdraví Znalostí
			document.write('Zdravi: <div id="zdravi">'+this.zdravi+'</div>');
			document.write('Znalosti: <div id="znalosti">'+this.znalosti+'</div>');

		//zobrazení panacka, zatím jen obrazek smajlika
			document.write('<img id="jadernak_img" src=img/smile_zluty.png><br>');

		},

	onClick: function(nazev){

		
		//najdi predmet
		for (var id=0; id<this.aktivity.length; id++) {
 			if(this.aktivity[id].nazev === nazev) {
				break;
	  		}
		}
						
		//oznameni dalsim objektum
		semestr.updateHodiny(-this.aktivity[id].cas);

		//update sam sebe
		this.update(this.aktivity[id].zdravi,this.aktivity[id].znalosti);

		if(nazev=="Pivo")
		{
			document.getElementById("jadernak_img").src="img/smile_cerveny.png";		
			setTimeout("jadernak.update(0,0)", 3 * 1000);
		}
	},
	
	update: function(zdravi, znalosti){	

		//update vnitrich hodnot
		this.zdravi+=zdravi;
		this.znalosti+=znalosti;

		//překresleni
		document.getElementById("zdravi").innerHTML = this.zdravi;
		document.getElementById("znalosti").innerHTML = this.znalosti;

		if(this.zdravi>0){
			document.getElementById("jadernak_img").src="img/smile_zluty.png";
		}
		else
		{
			document.getElementById("jadernak_img").src="img/smile_zeleny.png";
		}
	
	}

}; 


