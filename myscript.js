$(document).ready(function() {
	$("#imagetoggler").click(function(){
		$("img").toggle();
	});

	$("#p1").click(function(){
		$("disappear").toggle();
		});

	$("#p2").mouseenter(function(){
		alert("There is a second paragraph here, press paragraph 1 to see it");
		});
	
	$("h1").click(function() {
		$("p").css({"color":"red", "background-color": "yellow"});
		$("img").css("border","25px solid black");
	});
});
