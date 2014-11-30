
var jadernak = {
	Health:20,
	Knowledge:0,
	Sanity:30,
	state:1, //0-vycerpaný, 1-normální, 2-stastný
	newstate:1,
	Week:1,
	Hours:168,
	Credits:0,

	init : function(){

		this.ShowActivites();

		this.Draw();

	
	},

	
	onActivity: function(Name){

		//find Activity index
		for (var id=0; id<Activites.length; id++) {
 			if(Activites[id].Name === Name) {
				break;
	  		}
		}
	
		//update inner values
		this.Health+=Activites[id].Health;
		this.Knowledge+=Activites[id].Knowledge;
		this.Sanity+=Activites[id].Sanity;

		//update time info
		this.Hours-=4;

		this.Draw();

		//render activity animation (between current state and new state), and show beground for activity
		document.getElementById("jadernak_id").src="image/"+Activites[id].Animation[this.state][this.newstate];
		document.body.style.backgroundImage="url('image/"+Activites[id].Background+"')";
	
		//delay time of activity, than call update, which show normal jadernak
		setTimeout("jadernak.Update()", Activites[id].AnimationTime);
	
	},

	Draw:function()
	{
		if(this.Hours<=0)
		{
			this.Week++;
			this.Hours=168;
			this.ShowSubjects();
		}

		//check consistent
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

		//find new state of jadernak
		if(this.Sanity+this.Health<60)
			this.newstate=0;//vycerpaný
		if(this.Sanity+this.Health>60)
			this.newstate=1;//normalní
		if(this.Sanity+this.Health>140)
			this.newstate=2;//stastný

		//fill progress bars
		document.getElementById("health_id2").innerHTML= this.Health+'%';
		document.getElementById("health_id").style.width= this.Health+'%';
		document.getElementById("knowledge_id2").innerHTML= this.Knowledge;
		document.getElementById("knowledge_id").style.width = this.Knowledge +'%';
		document.getElementById("sanity_id2").innerHTML= this.Sanity+ '%';
		document.getElementById("sanity_id").style.width = this.Sanity+ '%';
		//render Time and week
		document.getElementById("credits_id").innerHTML= this.Credits;
		document.getElementById("week_id").innerHTML= this.Week;
		document.getElementById("hours_id").innerHTML= this.Hours;

		//is current activities available?			
		this.ShowActivites();
	},

	Update:function()
	{
		this.state=this.newstate;
		document.getElementById("message_id").innerHTML="";
		document.getElementById("jadernak_id").src="image/jadro_"+this.state+".png";
		document.body.style.backgroundImage="url('image/pozadi.jpg')";
	},

	ShowActivites: function()
	{
		document.getElementById("activites_id").innerHTML="";
		//show activites
		for (var i=0; i<Activites.length; i++) {
			if(Activites[i].week_start<=this.Week && this.Week <=Activites[i].week_end )
				if(Activites[i].minstate<=this.newstate)
				{
					document.getElementById("activites_id").innerHTML+='<div class="col-xs-4"><button type="button" class="btn btn-default navbar-btn btn-block" onClick="jadernak.onActivity(\''+Activites[i].Name+'\')" >'+Activites[i].Name+'</button> </div>';
				}
				else
				{
					document.getElementById("activites_id").innerHTML+='<div class="col-xs-4"><button type="button" class="btn btn-default navbar-btn btn-block disabled="disabled"" >'+Activites[i].Name+'</button> </div>';
				}
			};
	},
	
	ShowSubjects: function()
	{
		document.getElementById("subjects_id").innerHTML="";
		var count=0;
		var shown=0;
		for (var i=0; i<Subjects.length; i++) 
		{
			shown=0;
			if(Subjects[i].done==0)
			{
				//search for req is done
				for (var j=0; j<Subjects[i].req.length; j++) 
				{
					for(var k=0;k<Subjects.length;k++)
					{
						if(Subjects[k].id===Subjects[i].req[j])
							break;
					}
			
					if(k==Subjects.length)
						Alert("Error finding req"+Subjects[i].req[j]);
					if(Subjects[k].done==0)
						break;
				}
			
				if(Subjects[i].week_start<=this.Week && this.Week <=Subjects[i].week_end )
				{
					if(j==Subjects[i].req.length)
					{
						document.getElementById("subjects_id").innerHTML+='<div class="col-xs-4"><button type="button" class=class="btn btn-primary btn-lg" onClick="jadernak.onSubject(\''+Subjects[i].name+'\')" ><b>'+Subjects[i].name+'</b></button> </div>';
					}
					else
					{
						document.getElementById("subjects_id").innerHTML+='<div class="col-xs-4"><button type="button" class=class="btn btn-primary btn-lg disabled="disabled""><b>'+Subjects[i].name+'</b> nedostupný-nesplněné požadavky'+'</button> </div>';			
					}					
					count++;
					shown=1;	
				}

				if(count<5 && shown==0 && this.Week <=Subjects[i].week_end)
				{
					document.getElementById("subjects_id").innerHTML+='<div class="col-xs-4"><button type="button" class=class="btn btn-primary btn-lg disabled="disabled"" ><b>'+Subjects[i].name+'</b> dostupný od: '+Subjects[i].week_start+' týdne'+'</button> </div>';
					count++;
				}
			};
		
		};

	},

	onSubject: function(Name)
	{
		//find id of subject
		for (var id=0; id<Subjects.length; id++) {
 			if(Subjects[id].name === Name) {
				break;
	  		}
		}

		//check if subject can be done
		if(Subjects[id].know<this.Knowledge)
		{
			//succes!
			//update inner values
			this.Credits+=Subjects[id].credits;
			this.Sanity+=Subjects[id].sanity;
			this.Knowledge-=Subjects[id].know;
			this.Hours-=4;
			Subjects[id].done=1;			

			//draw it!
			this.Draw();

			//show animation, background, message, etc.
			document.getElementById("jadernak_id").src="image/"+Subjects[id].succes_animation;
			document.body.style.backgroundImage="url('image/"+Subjects[id].background+"')";
			document.getElementById("message_id").innerHTML=Subjects[id].succes_message;

			//delay time of activity, than call update, which show normal jadernak
			setTimeout("jadernak.Update()", Subjects[id].animation_time);	
					
		}
		else
		{
			//failed
			//update inner values
			this.Sanity-=Subjects[id].sanity;
			this.Knowledge-=Subjects[id].know;
			this.Hours-=4;

			//draw it!
			this.Draw();

			//show animation, background, message, etc.
			document.getElementById("jadernak_id").src="image/"+Subjects[id].fail_animation;
			document.body.style.backgroundImage="url('image/"+Subjects[id].background+"')";
			document.getElementById("message_id").innerHTML=Subjects[id].fail_message;

			//delay time of activity, than call update, which show normal jadernak
			setTimeout("jadernak.Update()", Subjects[id].animation_time);
		}		

		this.ShowSubjects();
		
	}

};
