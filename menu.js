document.querySelector('.navbar-toggler').addEventListener('click', function () {
	// Toggle the 'fa-bars' and 'fa-times' classes for Font Awesome icons
	this.querySelector('i').classList.toggle('fa-bars');
	this.querySelector('i').classList.toggle('fa-times');
});