function doClick(e) {
	alert($.label.text);
}

function agrandar() {
	var animation = Ti.UI.createAnimation();
	animation.height = "410dp";
	animation.bottom = "10dp";
	animation.duration = 300;
	animation.curve = Titanium.UI.ANIMATION_CURVE_EASE_OUT;
	animation.backgroundColor = "#CCff0000", $.contenedorprueba.animate(animation, function() {
		Ti.API.info('done animating in');

		var animation = Ti.UI.createAnimation();
		animation.height = "400dp";
		animation.bottom = "10dp";
		animation.backgroundColor = "#CCff0000", animation.duration = 100;
		animation.curve = Titanium.UI.ANIMATION_CURVE_EASE_OUT;
		$.contenedorprueba.animate(animation);

	});
	var animation = Ti.UI.createAnimation();
	animation.backgroundColor = "#4Dffffff", animation.duration = 100;
	$.contenedorsegundario.animate(animation);
}

function pequeno() {
	var animation = Ti.UI.createAnimation();
	animation.height = "100dp";
	animation.bottom = "50dp";
	animation.duration = 300;
	animation.backgroundColor = "#E6ff0000", animation.curve = Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT;
	$.contenedorprueba.animate(animation, function() {
		Ti.API.info('done animating in');

		var animation = Ti.UI.createAnimation();
		animation.height = "110dp";
		animation.bottom = "50dp";
		animation.backgroundColor = "#E6ff0000", animation.duration = 100;
		animation.curve = Titanium.UI.ANIMATION_CURVE_EASE_OUT;
		$.contenedorprueba.animate(animation);

	});

	var animation = Ti.UI.createAnimation();
	animation.backgroundColor = "#00ffffff", animation.duration = 100;
	$.contenedorsegundario.animate(animation);

}

$.cont.open();
