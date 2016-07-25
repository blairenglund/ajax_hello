window.addEventListener('load', function() {
	
	var clicker = document.getElementById('clicker');

	clicker.addEventListener('click', function(){
		var request = new XMLHttpRequest();

		request.addEventListener('loadstart', function(){
			alert("Making a connection");
		})

		request.addEventListener('load', function(e){
			alert("Connection made. " + e.target.response)
		})

		request.open("GET", "info");
		request.send();		
	});



});