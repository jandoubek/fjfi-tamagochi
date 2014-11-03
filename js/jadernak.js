function activity(Name,Time,Health,Knowledge,Sanity){
	this.Name=Name;
	this.Time=Time;
	this.Health=Health;
	this.Knowledge=Knowledge;
	this.Sanity=Sanity;
}

function subject(Name,Credits,Health,Knowledge){
	this.Name=Name;
	this.Credits=Credits;
	this.Health=Health;
	this.Knowledge=Knowledge;
	this.Done=0;
}

var jadernak = {
	Health:20,
	Knowledge:0,
	Sanity:30,
	Hours:168,
	Credits:0,
	Subjects:Array(),
	run:1,
		
	init : function(){

		//zatím fuj implementace přemětů
		this.Subjects[0]=new subject("Analyza",10,-20,-10);
		this.Subjects[1]=new subject("ZPRO",2,-10,-5);

		//zajimavjejsi cast
		document.write('<div id="whole_game_id">');
		document.write('</div>');
		jadernak.render();		
		},

	render : function(){
		var game='<div style="position: absolute; top: 100px; left: 20px" id="activites_id">';

//--------------Render Activites----------------------------------
		game=game+example_activity.render();
		game=game+example_activity2.render();
//----------------------------------------------------------------
		game=game+'</div>';
		game=game+'<div style="position: absolute; top: 120px; left: 400px" id="smile_id">';

		if(this.Health<20 || this.Sanity<20){
			game=game+'<img id="jadernak_img_id" src=img/smile_zeleny1.png>';
		}
		else
		{
			game=game+'<img id="jadernak_img_id" src=img/smile_zluty1.png>';
		}

		

		game=game+'</div>';

		game=game+'<div style="position: absolute; top: 95px; left: 400px" id="knowledge_id"> Znalosti: '+this.Knowledge+'</div>';
		game=game+'<div style="position: absolute; top: 95px; left: 600px" id="sanity_id"> Příčetnost: '+this.Sanity+'</div>';
		game=game+'<div style="position: absolute; top: 95px; left: 800px" id="health_id"> Zdraví:' +this.Health+'</div>';
		game=game+'<div style="position: absolute; top: 600px; left: 400px" id="hours_id"> Cas:'+this.Hours+'</div>';
		game=game+'<div style="position: absolute; top: 600px; left: 800px"id="credits_id"> Kredity: '+this.Credits+'</div>';

		game=game+'<div style="position: absolute; top: 100px; left: 1000px" id="subjects_id">';

//--------------Render Subjects-----------------------------------
		for (var i=0; i<this.Subjects.length; i++) {
			if(this.Subjects[i].Done==0)
				game=game+'<div id="'+this.Subjects[i].Name+'"> <button type="button" class="btn btn-lg btn-danger" onClick="jadernak.onSubjectClick(\''+this.Subjects[i].Name+'\')">'+this.Subjects[i].Name +'</button> </div>';
			};
//---------------------------------------------------------------
		
		document.getElementById("whole_game_id").innerHTML=game;		
		},
	
	update: function(Health,Knowledge,Sanity,Hours, Credits){
			//update vnitrich hodnot
			this.Health+=Health;
			this.Knowledge+=Knowledge;
			this.Sanity+=Sanity;
			this.Hours+=Hours;
			this.Credits+=Credits;
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


//--------------Check Challenges----------------------------------
		example_challenge.update(); //momentálně tvoří challenge "spojový seznam"
//---------------------------------------------------------------
		},

	onSubjectClick: function(Name){	
		//najdi predmet
		for (var id=0; id<this.Subjects.length; id++) {
 			if(this.Subjects[id].Name === Name) {
				break;
	  		}
		}

		if(this.Health>=-this.Subjects[id].Health && this.Knowledge>=-this.Subjects[id].Knowledge)
		{
			alert("Udělal jsi zkoušku z předmětu:"+this.Subjects[id].Name);

			//smaz pedmet
			this.Subjects[id].Done=1;

			jadernak.update(this.Subjects[id].Health,this.Subjects[id].Knowledge,20,0,this.Subjects[id].Credits);
		}
		else
		{
			alert("Neudělal jsi zkoušku z předmětu:"+this.Subjects[id].Name);
			jadernak.update(this.Subjects[id].Health,this.Subjects[id].Knowledge,-20,0,0);
		}
	}
	

}; 


