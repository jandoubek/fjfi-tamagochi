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

		//zobrazení panacka, zatím jen obrazek smajlika
		document.write('<img style="position: absolute; top: 100px; left: 100px" id="jadernak_img" src=img/smile_zluty.png>');

		//zobrazeni aktivit
		document.write('<div style="position: absolute; top: 100px; left: 50px">');
		for (var i=0; i<this.aktivity.length; i++) {
			document.write('<div id="'+this.aktivity[i].nazev+'"> <button type="button" class="btn btn-lg btn-success" onClick="jadernak.onClick(\''+this.aktivity[i].nazev+'\')">'+this.aktivity[i].nazev +'</button> </div>');
			};
		document.write('</div>');

		//zobrazeni Zdraví Znalostí
			document.write('<div style="position: absolute; top: 100px; left: 200px" id="zdravi">Zdravi:' +this.zdravi+'</div>');
			document.write('<div style="position: absolute; top: 100px; left: 400px" id="znalosti">Znalosti:'+this.znalosti+'</div>');

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
			setTimeout("jadernak.update(0,0)", 500);
		}
	},
	
	update: function(zdravi, znalosti){	

		//update vnitrich hodnot
		this.zdravi+=zdravi;
		this.znalosti+=znalosti;

		//překresleni
		document.getElementById("zdravi").innerHTML = 'Zdravi: '+this.zdravi;
		document.getElementById("znalosti").innerHTML = 'Znalosti: '+this.znalosti;

		if(this.zdravi>0){
			document.getElementById("jadernak_img").src="img/smile_zluty.png";
		}
		else
		{
			document.getElementById("jadernak_img").src="img/smile_zeleny.png";
		}
	
	}

}; 


