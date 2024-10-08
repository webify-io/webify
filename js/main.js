/* js for library from the CDN for typed.js from [https://github.com/mattboldt/typed.js] */
var typed = new Typed('.text', {
	strings: ['Websites', 'Applications', 'Software', 'Development'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
});

/* ========== Sticky Header: Disabled when the viewport is 450px or less. =========== */
let headers = document.querySelectorAll('header');

window.addEventListener('scroll', function () {
	headers.forEach(function (header) {
		if (window.matchMedia('(max-width: 450px)').matches) {
			// If the viewport is 450px or less, remove the 'sticky' class
			header.classList.remove('sticky');
		} else {
			// Otherwise, toggle the 'sticky' class based on scroll position
			header.classList.toggle('sticky', window.scrollY > 60);
		}
	});
});

/* ============================== Nav Bar Toggle Icon =============================== */
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			//active navbar links
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});

			// active sections for animation on scroll
		}
		// if want to use animation that repeats on scroll use this
	});

	//sticky header
	/* let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 90); */

	// Make the top element to become sticky only after a certain scroll position
	/* Add code here */

	// remove toggle icon and navbar when navbar links are clicked (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/* =================== REMOVE BOTTOM SCROLL ICON =================== */
// Make the footer-scroll icon to become visible only after a certain scroll position
/* window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.scroll-top');
	footerIconTop.classList.toggle('active', window.scrollY > -100);
	footerIconTop.classList.toggle('hidden', window.scrollY <= 0);
}); */

// To make the footer-scroll icon visible only after a certain scroll position and hide it once scrolling stops:

window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.scroll-top');

	// Set the scroll position at which the icon becomes visible
	var showAfterScroll = 100; // in pixels

	// Add 'active' class when scrolled past 'showAfterScroll' position
	if (window.scrollY > showAfterScroll) {
		footerIconTop.classList.add('active');
		footerIconTop.classList.remove('hidden');
	} else {
		footerIconTop.classList.remove('active');
	}

	// Hide the icon when scrolling stops after a delay
	clearTimeout(window.footerIconTimeout);
	window.footerIconTimeout = setTimeout(function () {
		footerIconTop.classList.add('hidden');
	}, 8000); // Delay in milliseconds
});

/* document
	.querySelector('.scroll-top a')
	.addEventListener('click', function (event) {
		event.preventDefault();
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}); */

/* ======================== SERVICES MODAL ========================= */
const modalViews = document.querySelectorAll('.services_modal'),
	modalBtns = document.querySelectorAll('.services_button'),
	modalCloses = document.querySelectorAll('.services_modal-close');

let modal = function (modalCLick) {
	modalViews[modalCLick].classList.add('active-modal');
};

// When the user clicks on the button, open the modal
modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i);
	});
});

// When the user clicks on .services_modal-close, close the modal
modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal');
		});
	});
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (event) => {
	modalViews.forEach((modalView) => {
		if (event.target === modalView) {
			modalView.classList.remove('active-modal');
		}
	});
});

/* ======================== PRODUCTS MODAL ========================= */
/* // Get the modal
var productModal = document.querySelector('.products_modal');

// Get the button that opens the modal
var btn = document.querySelector('.products_button');

// Get the element that closes the modal
var span = document.querySelector('.products_modal-close');

// When the user clicks on the button, open the modal
btn.onclick = function () {
	productModal.style.display = 'flex';
	//productModal.style.display = 'block';
};

// When the user clicks on (x), close the modal
span.onclick = function () {
	productModal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == productModal) {
		productModal.style.display = 'none';
	}
}; */

/* ======================== PRODUCTS MODAL ========================= */
// Get all the modals
var modals = document.querySelectorAll('.products_modal');

// Get all the buttons that open the modals
var btns = document.querySelectorAll('.products_button');

// Get all the elements that close the modals
var spans = document.querySelectorAll('.products_modal-close');

// Function to open a modal
function openModal(modal) {
	modal.style.display = 'flex';
}

// Function to close a modal
function closeModal(modal) {
	modal.style.display = 'none';
}

// Loop through all the buttons to add click event
btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		openModal(modals[index]);
	});
});

// Loop through all the close buttons to add click event
spans.forEach((span, index) => {
	span.addEventListener('click', () => {
		closeModal(modals[index]);
	});
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
	modals.forEach((modal) => {
		if (event.target == modal) {
			closeModal(modal);
		}
	});
});

/*=============== DARK LIGHT THEME ===============*/
/* const themeButton = document.getElementById('theme-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](
		iconTheme
	);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme);
	themeButton.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});
 */

/*=============== Toggle the Quick Contact Form ===============*/
document
	.getElementById('toggle-form')
	.addEventListener('click', function (event) {
		var form = document.getElementById('quick-contact-form');
		var icon = document.getElementById('toggle-icon');
		if (form.style.display === 'none' || form.style.display === '') {
			form.style.display = 'block';
			icon.className = 'bx bx-x'; // Change icon class to bx-x
		} else {
			form.style.display = 'none';
			icon.className = 'bx bx-mail-send'; // Change icon class back to bx-mail-send
		}
		event.stopPropagation(); // Prevent the click from propagating to the document
	});

// Close the form when clicking or scrolling outside of it
document.addEventListener('click', function (event) {
	var form = document.getElementById('quick-contact-form');
	var toggleButton = document.getElementById('toggle-form');
	if (
		form.style.display === 'block' &&
		!form.contains(event.target) &&
		!toggleButton.contains(event.target)
	) {
		form.style.display = 'none';
		document.getElementById('toggle-icon').className = 'bx bx-mail-send'; // Reset icon class
	}
});

document.addEventListener('scroll', function () {
	var form = document.getElementById('quick-contact-form');
	if (form.style.display === 'block') {
		form.style.display = 'none';
		document.getElementById('toggle-icon').className = 'bx bx-mail-send'; // Reset icon class
	}
});
