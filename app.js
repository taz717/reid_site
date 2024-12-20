const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitions() {
	// button click active class
	for (let i = 0; i < sectBtn.length; i++) {
		sectBtn[i].addEventListener("click", function () {
			// remove active class from all buttons
			let currentBtn = document.querySelectorAll(".active-btn");
			currentBtn[0].className = currentBtn[0].className.replace(
				"active-btn",
				""
			);
			// add active class to clicked button
			this.className += " active-btn";
		});
	}

	// sections active class
	allSections.addEventListener("click", (e) => {
		const id = e.target.dataset.id;
		if (id) {
			// remove active class from all sections
			sectBtns.forEach((btn) => {
				btn.classList.remove("active");
			});

			// hide other sections
			sections.forEach((section) => {
				section.classList.remove("active");
			});

			// assign active class to clicked section
			const element = document.getElementById(id);
			element.classList.add("active");
		}
	});

	// Toggle theme
	const themeBtn = document.querySelector(".theme-btn");
	themeBtn.addEventListener('click', ()=>{
		let element = document.body;
		element.classList.toggle('light-mode')
	})
}

PageTransitions();
