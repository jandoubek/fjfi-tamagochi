var example_activity = {
	Name:"PokusnaAktivita - Učení",

	render : function(){
		return '<div id="example_activity_id"> <button type="button" class="btn btn-lg btn-danger" onClick="example_activity.onClick()">'+this.Name +'</button> </div>'
	},

	onClick : function(){
		document.getElementById("jadernak_img_id").src="img/smile_cerveny1.png";
		setTimeout("jadernak.update(-10,40,-10,-4,0)", 500);
		
	}
	
	
	
};
