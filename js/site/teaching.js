document.addEventListener("DOMContentLoaded", function() {
	let spoilers = document.querySelectorAll(".spoiler");
 
	spoilers.forEach(function(spoiler) {
		let header = spoiler.querySelector(".spoiler-header");
	  header.addEventListener("click", function() {
		 spoiler.classList.toggle("open");
		 let content = spoiler.querySelector(".spoiler-content");
		 content.style.display = content.style.display === "none" ? "block" : "none";
	  });
	});
 });