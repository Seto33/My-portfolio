export function popupToggle(toggle = false) {
	const popup = document.querySelector(".popup");
	popup.classList.toggle("popup_open");
	document.body.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + 'px' : 0;
	popup.style.paddingRight = toggle ? window.innerWidth - document.body.offsetWidth + 'px' : 0;
	document.body.style.overflow = toggle ? "hidden" : "auto";
	Array.from(document.body.children).forEach(element => {
		toggle ? element.setAttribute("inert", "") : element.removeAttribute("inert");
		toggle ? popup.removeAttribute("inert") : popup.setAttribute("inert", "");
	});
};