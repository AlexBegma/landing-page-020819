$(function() {

	$('.slider__inner').slick({
		nextArrow: '<input type="radio" class="slick-radio slick-next"></input>',
		prevArrow: '<input type="radio" class="slick-radio slick-prev"></input>',
		// infinite: false,
	});

	$('.header__btn-menu').on('click', function(){
		$('.navigation__list').slideToggle();
	});
});