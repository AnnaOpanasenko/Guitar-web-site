
const reviewsSwiper = document.querySelector('.swiper-reviews');

let swiper
if (reviewsSwiper) {
  console.log("Initializing swiper")
	swiper = new Swiper('.swiper-reviews', {
		// Optional parameters
		autoHeight: true,
		loop: true,
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
	});
}