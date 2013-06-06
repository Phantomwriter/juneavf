/*

Howard Livingston
AVF with Jen Mccrrick
13/05


*/


//Preparing the DOM

$("document").ready(function() {
    console.log( "The DOM is Ready!" );  
});

//Getting the device ready

document.addEventListener('deviceready', function() {
	console.log("The device is ready!");
	
});
	


//Page init functions
$('#home').on('pageinit', function(){
		console.log("Home page loaded!");
});

$('#research').on('pageinit', function(){
		console.log("Research page loaded!");
});

$('#environment').on('pageinit', function(){
		console.log("Environment page loaded!");
});

$('#apiPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#compassPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#accPage').on('pageinit', function(){
		console.log("api page loaded!");
});

$('#geoPage').on('pageinit', function(){
		console.log("api page loaded!");
});




