
{

	let mobileButton = document.querySelector('.mobile__line');

	if (mobileButton) {
		mobileButton.addEventListener('click', function () {
			mobileButton.classList.toggle('active');
			document.querySelector('.header__menu').classList.toggle('header__menu_open');
			document.querySelector('.header__btn').classList.toggle('header__btn_mobile');
		})
	}

}

const sliderOne = tns({
	container: '.team__corousel',
	items: 4,
	slideBy: 'page',
	speed: 1000,
	autoplay: false,
	controls: false,
	nav: true,
	loop: false,
	controls: true,
	controlsText: [
		'<img class="team__prev arrow" src="img/icons/prev.svg" alt="">',
		'<img class="team__next arrow" src="img/icons/next.svg" alt="">'
	],
	responsive: {
		1024: {
			items: 4,
			controls: true,
		},
		768: {
			items: 2,
			// nav: true
		},
		320: {
			items: 1,
			controls: false,
		}
	}
});

const sliderTwo = tns({
	container: '.about__corousel',
	items: 1,
	slideBy: 'page',
	autoplay: false,
	loop: false,
	center: true,
	controls: true,
	nav: false,
	controlsText: [
		'<img class="team__prev arrow" src="img/icons/prev.svg" alt="">',
		'<img class="team__next arrow" src="img/icons/next.svg" alt="">'
	]

});

const socialMediaSlider = tns({
	container: '.social-media__carousel',
	items: 5,
	slideBy: 'page',
	autoplay: false,
	loop: false,
	controls: true,
	gutter: 20,
	nav: false,
	controlsText: [
		'<img class="team__prev arrow" src="img/icons/prev.svg" alt="">',
		'<img class="team__next arrow" src="img/icons/next.svg" alt="">'
	],
	responsive: {
		1200: {
			items: 5
		},

		1024: {
			items: 4,
			gutter: 20
		},
		868: {
			items: 3
		},
		668: {
			items: 2,
			controls: true
		},
		425: {
			items: 2
		},
		320: {
			items: 1
		}
	}

});



