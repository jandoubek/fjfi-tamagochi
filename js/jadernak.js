function activity(Name,Time,Health,Knowledge,Sanity){
	this.Name=Name;
	this.Time=Time;
	this.Health=Health;
	this.Knowledge=Knowledge;
	this.Sanity=Sanity;
}


var jadernak = {
	Health:20,
	Knowledge:0,
	Sanity:30,
	Activites:Array(),
		
	init : function(){

		//nacteni aktivit - mohlo by byt ze souboru
		//activites loading
		this.Activites[0]=new activity("Spánek",4,25,0,20);
		this.Activites[1]=new activity("Učení",4,-10,40,-20);
		this.Activites[2]=new activity("Pivo",4,20,-10,40);
		
    		//printing Knowledges and Health
        	document.write('<div class="container"><div class="row top2"><div class="col-xs-3"><p class="text-center"><strong>Aktivity</strong></p></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="zdravi">Zdravi:' +this.Health+'</div></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="znalosti">Znalosti:'+this.Knowledge+'</div></div><div class="col-xs-2"><div class="text-center" id="pricetnost">Příčetnost:' +this.Sanity+'</div></div><div class="col-xs-3"><p class="text-center"><strong>Udalosti</strong></p></div></div></div>');
			
     
//
		document.write('<div class="container"><div class="row top1" style="background: rgba(220,220,220,0.4); border-radius:5px;"><div class="col-xs-3">');
		
		//printing activites
		document.write('<div>');
		for (var i=0; i<this.Activites.length; i++) {
			document.write('<div id="'+this.Activites[i].Name+'"> <button type="button" class="btn btn-lg btn-default btn-block" onClick="jadernak.onClick(\''+this.Activites[i].Name+'\')">'+this.Activites[i].Name +'</button> </div>');
			};
		document.write('</div>');
		document.write('</div>');
  		document.write('<div class="col-xs-6">');

		//Printing Smile, 
		document.write('<div class="product-img "><img  class="img-responsive" id="jadernak_img" src=img/smile_zluty1.png>');
		document.write('</div></div>');
		

		



		},

	onClick: function(Name){

		
		//find Activity index
		for (var id=0; id<this.Activites.length; id++) {
 			if(this.Activites[id].Name === Name) {
				break;
	  		}
		}
						
		if(jadernak.Health>=-this.Activites[id].Health && jadernak.Knowledge>=-this.Activites[id].Knowledge && jadernak.Sanity>=-this.Activites[id].Sanity)
		{
			//uprate ostatnich objektu
			semestr.update(-this.Activites[id].Time);

			//update sam sebe
			this.update(this.Activites[id].Health,this.Activites[id].Knowledge,this.Activites[id].Sanity);

			if(Name=="Pivo")
			{
				document.getElementById("jadernak_img").src="img/smile_cerveny1.png";		
				setTimeout("jadernak.update(0,0,0)", 500);
			}

		}
		else
		{
			alert("Nelze");
		}

	},
	
	update: function(Health, Knowledge,Sanity){	

		//update vnitrich hodnot
		this.Health+=Health;
		this.Knowledge+=Knowledge;
		this.Sanity+=Sanity;

		if(this.Health<0)
			this.Health=0;

		if(this.Health>100)
			this.Health=100;

		if(this.Sanity<0)
			this.Sanity=0;
		
		if(this.Sanity>100)
			this.Sanity=100;

		if(this.Knowledge<0)
			this.Knowledge=0;

		//překresleni
		document.getElementById("zdravi").innerHTML = 'Zdravi: '+this.Health;
		document.getElementById("znalosti").innerHTML = 'Znalosti: '+this.Knowledge;
		document.getElementById("pricetnost").innerHTML = 'Příčetnost: '+this.Sanity;

		if(this.Health<20 || this.Sanity<20){
			document.getElementById("jadernak_img").src="img/smile_zeleny1.png";
		}
		else
		{
			document.getElementById("jadernak_img").src="img/smile_zluty1.png";
		}
	
	}

}; 


