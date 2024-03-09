/* js for library from the CDN for typed.js from [https://github.com/mattboldt/typed.js] */
var typed = new Typed('.text', {
	strings: ['Websites', 'Applications', 'Software', 'Development'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true,
});

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
	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 90);

	// Make the top element to become sticky only after a certain scroll position
	/* Add code here */

	// remove toggle icon and navbar when navbar links are clicked (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/* =================== REMOVE BOTTOM SCROLL ICON =================== */
// Make the footer-scroll icon to become visible only after a certain scroll position
/* window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');
	footerIconTop.classList.toggle('active', window.scrollY > -100);
	footerIconTop.classList.toggle('hidden', window.scrollY <= 0);
}); */

// To make the footer-scroll icon visible only after a certain scroll position and hide it once scrolling stops, you can modify the JavaScript code as follows:

window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');

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
	}, 100); // Delay in milliseconds
});

/* document
	.querySelector('.footer-iconTop a')
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
