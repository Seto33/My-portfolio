export function slider(elem) {
	const slider = document.querySelector(`[data-slider="${elem}"]`);
	const sliderList = slider.querySelector(".slider__list");
	const sliderSlides = slider.querySelectorAll(".slider__slide");
	const sliderButtonPrev = slider.querySelector(".slider__button--prev");
	const sliderButtonNext = slider.querySelector(".slider__button--next");

	sliderSlides.forEach((slide) => {
		sliderButtonPrev.addEventListener("click", () => {
			sliderList.scrollBy({
				left: -slide.offsetWidth,
				behavior: "smooth",
			});
		});

		sliderButtonNext.addEventListener("click", () => {
			sliderList.scrollBy({
				left: slide.offsetWidth,
				behavior: "smooth",
			});

			if (
				sliderList.scrollLeft ===
				sliderList.scrollWidth - sliderList.offsetWidth
			) {
				sliderList.scrollLeft = 0;
			}
		});
	});

	return slider;
}