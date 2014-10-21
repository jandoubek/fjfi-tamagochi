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
		
    		//zobrazeni Zdraví Znalostí
        	document.write('<div class="container"><div class="row top2"><div class="col-xs-4"><p class="text-center"><strong>Aktivity</strong></p></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="zdravi">Zdravi:' +this.zdravi+'</div></div><div class="col-xs-2"');
			document.write('<div class="text-center" id="znalosti">Znalosti:'+this.znalosti+'</div><div class="col-xs-4"><p class="text-center"><strong>Udalosti</strong></p></div></div></div>');
      
		document.write('<div class="container"><div class="row top1" style="background: rgba(220,220,220,0.4); border-radius:5px;"><div class="col-xs-4">');
		
			//zobrazeni aktivit
		document.write('<div>');
		for (var i=0; i<this.aktivity.length; i++) {
			document.write('<div id="'+this.aktivity[i].nazev+'"> <button type="button" class="btn btn-lg btn-default btn-block" onClick="jadernak.onClick(\''+this.aktivity[i].nazev+'\')">'+this.aktivity[i].nazev +'</button> </div>');
			};
		document.write('</div>');
		document.write('</div>');
  		document.write('<div class="col-xs-4">');
		//zobrazení panacka, zatím jen obrazek smajlika
		document.write('<div class="product-img "><img  class="img-responsive" id="jadernak_img" src=img/smile_zluty.png>');
		document.write('</div></div>');
		

		



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


