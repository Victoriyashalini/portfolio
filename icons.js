function sendEmail() {
	var subject = encodeURIComponent("Portfolio Collaboration");
	var emailLink = "mailto:YourEmailAddress@example.com?subject=" + subject;
	window.location.href = emailLink;
}

function callPhoneNumber() {
	var phoneNumber = "6385468336"; // Replace with your actual phone number
	window.location.href = "tel:" + phoneNumber;
}

function openLinkedInProfile() {
	window.open("https://www.linkedin.com/in/victoriyashalini/", "_blank");
}

function openGitHubProfile() {
	window.open("https://github.com/Victoriyashalini/portfolio", "_blank");
}
