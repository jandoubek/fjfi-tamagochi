function activity(Name,Time,Health,Knowledge){
	this.Name=Name;
	this.Time=Time;
	this.Health=Health;
	this.Knowledge=Knowledge;
}


var jadernak = {
	Health:20,
	Knowledge:0,
	Activites:Array(),
		
	init : function(){

		//nacteni aktivit - mohlo by byt ze souboru
		//activites loading
		this.Activites[0]=new activity("Spánek",4,25,-5);
		this.Activites[1]=new activity("Učení",4,-10,40);
		this.Activites[2]=new activity("Pivo",4,20,0);
		
    		//printing Knowledges and Health
        	document.write('<div class="container"><div class="row top2"><div class="col-xs-4"><p class="text-center"><strong>Aktivity</strong></p></div><div class="col-xs-2">');
			document.write('<div class="text-center" id="zdravi">Zdravi:' +this.Health+'</div></div><div class="col-xs-2"');
			document.write('<div class="text-center" id="znalosti">Znalosti:'+this.Knowledge+'</div><div class="col-xs-4"><p class="text-center"><strong>Udalosti</strong></p></div></div></div>');
      
		document.write('<div class="container"><div class="row top1" style="background: rgba(220,220,220,0.4); border-radius:5px;"><div class="col-xs-4">');
		
		//printing activites
		document.write('<div>');
		for (var i=0; i<this.Activites.length; i++) {
			document.write('<div id="'+this.Activites[i].Name+'"> <button type="button" class="btn btn-lg btn-default btn-block" onClick="jadernak.onClick(\''+this.Activites[i].Name+'\')">'+this.Activites[i].Name +'</button> </div>');
			};
		document.write('</div>');
		document.write('</div>');
  		document.write('<div class="col-xs-4">');

		//Printing Smile, 
		document.write('<div class="product-img "><img  class="img-responsive" id="jadernak_img" src=img/smile_zluty.png>');
		document.write('</div></div>');
		

		



		},

	onClick: function(Name){

		
		//find Activity index
		for (var id=0; id<this.Activites.length; id++) {
 			if(this.Activites[id].Name === Name) {
				break;
	  		}
		}
						
		if(jadernak.Health>=-this.Activites[id].Health && jadernak.Knowledge>=-this.Activites[id].Knowledge)
		{
			//uprate ostatnich objektu
			semestr.update(-this.Activites[id].Time);

			//update sam sebe
			this.update(this.Activites[id].Health,this.Activites[id].Knowledge);

			if(Name=="Pivo")
			{
				document.getElementById("jadernak_img").src="img/smile_cerveny.png";		
				setTimeout("jadernak.update(0,0)", 500);
			}

		}
		else
		{
			alert("Nelze");
		}

	},
	
	update: function(Health, Knowledge){	

		//update vnitrich hodnot
		this.Health+=Health;
		this.Knowledge+=Knowledge;

		if(this.Health<0)
			this.Health=0;

		if(this.Knowledge<0)
			this.Knowledge=0;

		//překresleni
		document.getElementById("zdravi").innerHTML = 'Zdravi: '+this.Health;
		document.getElementById("znalosti").innerHTML = 'Znalosti: '+this.Knowledge;

		if(this.Health>15){
			document.getElementById("jadernak_img").src="img/smile_zluty.png";
		}
		else
		{
			document.getElementById("jadernak_img").src="img/smile_zeleny.png";
		}
	
	}

}; 


