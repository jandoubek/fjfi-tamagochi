var example_activity2 = {
	Name:"Pokusna Aktivita 2 - Pivo",

	render : function(){
		return '<div id="example_activity2_id"> <button type="button" class="btn btn-lg btn-danger" onClick="example_activity2.onClick()">'+this.Name +'</button> </div>'
	},

	onClick : function(){
		document.getElementById("jadernak_img_id").src="img/smile_cerveny.png";
		setTimeout("jadernak.update(40,-10,20,-4,0)", 500);
		
	}
	
	
	
};
