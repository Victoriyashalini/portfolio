document.addEventListener('DOMContentLoaded', function () {
	const pages = document.querySelectorAll('.page');
	let currentPage = 0;
  
	showPage(currentPage);
  
	document.addEventListener('keydown', function (event) {
	  if (event.key === 'ArrowRight' && currentPage < pages.length - 1) {
		currentPage++;
		showPage(currentPage);
	  } else if (event.key === 'ArrowLeft' && currentPage > 0) {
		currentPage--;
		showPage(currentPage);
	  }
	});
  
	function showPage(index) {
	  pages.forEach((page, i) => {
		page.style.display = i === index ? 'block' : 'none';
	  });
	}
  });
  