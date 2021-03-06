﻿
var jadernak = {
	Health:20,
	Knowledge:0,
	Sanity:20,
	state:1, //0-vycerpaný, 1-normální, 2-stastný
	newstate:1,
	Week:1,
	Hours:168,
	Credits:0,
	CleanBackgroundTimeout:10000,
	Timer:-1,
	CleanBackgroundTimer: -1,	
	number:0,
	action:" ",


//------------------------------------------------------------------------------------------------
	init : function(){

		Subjects.sort(function(a, b){return a.week_start-b.week_start})

		this.ShowActivites();

		this.ShowSubjects();		

		this.Draw();

	
	},

//------------------------------------------------------------------------------------------------	
	onActivity: function(Name){

		//cance background clean
		if(this.CleanBackgroundTimer!=-1)
		{
			clearTimeout(this.CleanBackgroundTimer);
			this.CleanBackgroundTimer=-1;
		}

		//cancel animation by click
		if(this.Timer!=-1)
		{
			clearTimeout(this.Timer);
			this.Timer=setTimeout("jadernak.Update()", 1);
			return;
		}

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
		this.Hours-=8;

		this.Draw();

		//render activity animation (between current state and new state), and show beground for activity
		document.getElementById("jadernak_id").src="image/"+Activites[id].Animation[this.state][this.newstate];
		document.getElementById("body_id").style.backgroundImage="url('image/"+Activites[id].Background+"')";
	
		//delay time of activity, than call update, which show normal jadernak
		this.action=Activites[id].Name;
		this.number=0;
		this.Timer=setTimeout("jadernak.Update()", Activites[id].AnimationTime);
	
	},

//---------------------------------------------------------------------------------------------------------------
	Draw:function()     //Called for redraw bars etc, called by every action which change inner variables
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
		if(this.Sanity+this.Health<50)
			this.newstate=0;//vycerpaný
		if(this.Sanity+this.Health>50)
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

//-------------------------------------------------------------------------------------------------------
	Update:function()//function setting base image, called by onFunc by Timeout, end of every animated action, called itself
	{
		this.number=this.number+1;
		this.state=this.newstate;
		this.CleanMessage();
		this.CleanAlert();

		switch(this.number)
		{
//======================ABSTRACT LAYER ENTRY POINT================================================
			case 1: sprt.update(this.action);
				break;	
			case 2: sixbeer.update(this.action);
				break;	
			case 3: first_beer.update(this.action);
				break;	
			case 4: first_sleep.update(this.action);
				break;	
			case 5: first_learn.update(this.action);
				break;		
			case 6: first_deprecated.update(this.action);
				break;	
			case 7: tricetkr.update(this.action);
				break;	
			case 8: mam.update(this.action);
				break;	
//================================================================================================
			default: 
				 document.getElementById("jadernak_id").src="image/jadro_"+this.state+".png";
				 this.CleanBackgroundTimer=setTimeout("jadernak.CleanBackground()", this.CleanBackgroundTimeout);
				 this.Timer=-1;
				 this.action=" ";
				 break;
		}

	},
//-----------------------------------------------------------------------------------------------------------------------
	CleanBackground: function()
	{
		this.CleanBackgroundTimer=-1;
		document.getElementById("body_id").style.backgroundImage="url('image/uvodni1980.jpg')";
	},
//-----------------------------------------------------------------------------------------------------------------------
	ShowMessage: function(message)
	{
		document.getElementById("message_id").innerHTML='<div class="bubble text-centered" id="message_inner_id"><center>'+message+'</center></div>';
	},
//-----------------------------------------------------------------------------------------------------------------------
	CleanMessage: function(message)
	{
		this.Timer=-1;
		var elem = document.getElementById("message_inner_id");
		if(elem!=null)
			elem.parentNode.removeChild(elem);
	},

//-----------------------------------------------------------------------------------------------------------------------
	ShowAlert: function(message)
	{
		alert='<div  id="alert_out_id" style="position: fixed; top: 0%; left:0%; width: 100%; height: 100%; background: rgba(255, 255, 255, 0.5)"><div style="position: fixed; top: 25%; left:0%; width: 100%; height: 50%; background: rgba(255, 255, 255, 1.0);border:2px solid black">';
		alert+="<p style='margin-top:5%'><center>"+message+"</center></p>";
		alert+='<center> <button type="button" class="btn btn-default navbar-btn btn-block" style="width:25%;margin-top:5%;border: 2px solid black" onClick="jadernak.OnAlert()" >Ok</button></center>';		
		alert+='</div></div>';	
		document.body.innerHTML +=alert;
	},

//-----------------------------------------------------------------------------------------------------------------------
	OnAlert: function()
	{
		clearTimeout(this.Timer);
		this.Update();
	},

//-----------------------------------------------------------------------------------------------------------------------
	CleanAlert: function()
	{
		this.Timer=-1;
		var elem = document.getElementById("alert_out_id");
		if(elem!=null)
			elem.parentNode.removeChild(elem);
	},
//-----------------------------------------------------------------------------------------------------------------------
	ShowActivites: function()//redraw activitis (if is available), called by every draw, after every change
	{
		document.getElementById("activites_id").innerHTML="";
		//show activites
		for (var i=0; i<Activites.length; i++) {
			if(Activites[i].week_start<=this.Week && this.Week <=Activites[i].week_end )
				if(Activites[i].minstate<=this.newstate)
				{
					document.getElementById("activites_id").innerHTML+='<div class="btn-group" role="group"><button type="button" class="btn btn-primary  btn-outline" style="border: 1px solid black;font-size:1vw;" onClick="jadernak.onActivity(\''+Activites[i].Name+'\')" >'+Activites[i].Name+'</button></div>';
				}
				else
				{
					document.getElementById("activites_id").innerHTML+='<div class="btn-group" role="group"><button type="button" class="btn btn-default " style="border: 1px solid black;font-size:1vw;" disabled="disabled" >'+Activites[i].Name+'</button></div>';
				}
			};
	},
	
//--------------------------------------------------------------------------------------------------------------------------
	ShowSubjects: function() //redraw subject menu, called when week changed, and whne some subject is clicked
	{
		//begin sections
		var subjects_select='<ul class="nav nav-pills nav-stacked col-xs-4">';
		var subject_tab_content='<div id="subject_tab_content_id" class="tab-content col-xs-7">';

		//show clicable subject
		subjects_select+='<li class="active"><a href="#tabid_index" data-toggle="pill"><img src="image/logocerne.png" style="width:100%; max-width:50px;margin-right:auto;margin-left: auto; display: block;"> </a></li>';
		//tab content:
		subject_tab_content+='<div class="tab-pane active" id="tabid_index">';
		subject_tab_content+='<h4 style="margin-top:20%">INDEX</h4>';
		subject_tab_content+='<p style="margin-top:20%">To je přehled zapsaných předmětů</p>';
	    	subject_tab_content+='</div>';	

		var count=0;
		var shown=0;
		for (var i=0; i<Subjects.length && count<6; i++) 
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
						//show clicable subject
						subjects_select+='<li><a href="#tabid_'+Subjects[i].id+'" data-toggle="pill"><img src="./image/'+Subjects[i].profphoto+'"  style="margin-right:auto;margin-left: auto; display: block; width:100%;max-width:50px;border:1px solid white;border-radius: 5px"></a></li>';
						//tab content:
						subject_tab_content+='<div class="tab-pane" id="tabid_'+Subjects[i].id+'">';
						subject_tab_content+='<h4 style="margin-top:20%">'+Subjects[i].name+'</h4>';
						subject_tab_content+='<p style="margin-top:10%"><b>Znalosti: </b><i>'+Subjects[i].know+'</i></p>';
						subject_tab_content+='<p style="margin-top:5%"><b>Kredity: </b><i>'+Subjects[i].credits+'</i></p>';
						subject_tab_content+='<p style="margin-top:10%">'+Subjects[i].description+'</p>';
						subject_tab_content+='<button type="button" class="btn btn-default navbar-btn btn-block" style="margin-top:20%;border: 1px solid black" onClick="jadernak.onSubject(\''+Subjects[i].name+'\')">Zkusit</button> ';
						subject_tab_content+='</div>';		
					}
					else
					{
						//show unclicable due unsatisfied requirements
						subjects_select+='<li><a href="#tabid_'+Subjects[i].id+'" data-toggle="pill"><img src="./image/'+Subjects[i].profphoto+'" style="margin-right:auto;margin-left: auto; display: block;width:100%;max-width:50px;border:1px solid black;border-radius: 5px"></a></li>';
						//tab content:
						subject_tab_content+='<div class="tab-pane" id="tabid_'+Subjects[i].id+'">';
						subject_tab_content+='<h4 style="margin-top:20%">'+Subjects[i].name+'</h4>';
						subject_tab_content+='<p style="margin-top:10%"><b>Znalosti: </b><i>'+Subjects[i].know+'</i></p>';
						subject_tab_content+='<p style="margin-top:5%"><b>Kredity: </b><i>'+Subjects[i].credits+'</i></p>';
						subject_tab_content+='<p style="margin-top:20%"><i>Tento předmět nemůžete absolvovat, protože jeho požadavky nejsou splněny.</i></p>';
						subject_tab_content+='</div>';		
						
					}					
					count++;
					shown=1;	
				}

				if(count<6 && shown==0 && this.Week <=Subjects[i].week_end)
				{
					//show unclicable due no time for subject
					subjects_select+='<li><a href="#tabid_'+Subjects[i].id+'" data-toggle="pill"><img src="./image/'+Subjects[i].profphoto+'" style="margin-right:auto;margin-left: auto; display: block;width:100%;max-width:50px;border:1px solid white;border-radius: 5px"></a></li>';
					//tab content:
					subject_tab_content+='<div class="tab-pane" id="tabid_'+Subjects[i].id+'">';
					subject_tab_content+='<h4 style="margin-top:20%">'+Subjects[i].name+'</h4>';
						subject_tab_content+='<p style="margin-top:10%"><b>Znalosti: </b><i>'+Subjects[i].know+'</i></p>';
						subject_tab_content+='<p style="margin-top:5%"><b>Kredity: </b><i>'+Subjects[i].credits+'</i></p>';
					subject_tab_content+='<p style="margin-top:20%"><i>Tento předmět je k dispozici od '+Subjects[i].week_start+' týdne.</i></p>';
					subject_tab_content+='</div>';		
									
					count++;
				}
			};
		
		};

		//end sections
		subjects_select+='</ul>';
		subject_tab_content+='</div>'

		document.getElementById("subjects_id").innerHTML=subjects_select+subject_tab_content;
		

	},

//--------------------------------------------------------------------------------------------------------------------------
	onSubject: function(Name)//callback function for button on subject (sitting exame buttons)
	{

		//cance background clean
		if(this.CleanBackgroundTimer!=-1)
		{
			clearTimeout(this.CleanBackgroundTimer);
			this.CleanBackgroundTimer=-1;
		}

		//cancel animation by click
		if(this.Timer!=-1)
		{
			clearTimeout(this.Timer);
			this.Timer=setTimeout("jadernak.Update()", 1);
			return;
		}

		//find id of subject
		for (var id=0; id<Subjects.length; id++) {
 			if(Subjects[id].name === Name) {
				break;
	  		}
		}

		//check if subject can be done
		if(Subjects[id].know<=this.Knowledge)
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
			document.getElementById("body_id").style.backgroundImage="url('image/"+Subjects[id].background+"')";
			this.ShowMessage('<h4>'+Subjects[id].succes_message+'</h4>');

			//delay time of activity, than call update, which show normal jadernak
			this.action="success_"+Subjects[id].id;
			this.number=0;
			this.Timer=setTimeout("jadernak.Update()", Subjects[id].animation_time);	
					
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
			document.getElementById("body_id").style.backgroundImage="url('image/"+Subjects[id].background+"')";
			this.ShowMessage('<h4>'+Subjects[id].fail_message+'</h4>');

			//delay time of activity, than call update, which show normal jadernak
			this.action="failed_"+Subjects[id].id;
			this.number=0;
			this.Timer=setTimeout("jadernak.Update()", Subjects[id].animation_time);
		}		

		this.ShowSubjects();
		
	}

};
