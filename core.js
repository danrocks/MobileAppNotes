$(document).ready(function() {
console.log("here");
Start();
})

function Start(){
	$("a").each(function(index){
	//	
			if($(this).prop("href"))
			{
				console.log(index + ": " + $(this).prop("href"));
				if($(this).text() && $(this).text().length<2){
					$(this).text($(this).prop("href"));
				}
				
			}	
			else
			{
				if(console){
					console.log(index + ": none");
				}
			}	
		});

	 $("#header").load("header.html"); 
	  $("#header").addClass("header"); 
}