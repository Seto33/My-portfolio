export function rating() {
	const rating = document.querySelectorAll(".skills__rating");
	rating.forEach((item) => {
		const ratingValue = item.dataset.rating;
		const stars = item.querySelectorAll("path");
		stars.forEach((path, index) => {
			path.style.fill = index < ratingValue ? "#070707" : "#E5E5E5";
		});
	});
}
