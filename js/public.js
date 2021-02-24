import $ from "jquery";

console.log('init calc widget');
	var lang = $("input#calc-lang");
	if(lang.length) {
		lang = lang.val();
	}
	else {
		lang = 'ru';
	}

	var pensionForm = $(".calc-form");
	var persionFormInputs = pensionForm.find("input,select");
	var calcResult = $(".pensionCalcResult");

	var textInputs = persionFormInputs.filter("input[type='text']");
	var prevValues = [];

	textInputs.focus(function () {
		prevValues[$(this).attr('id')] = $(this).val();
		//$(this).val('');
	});

	textInputs.blur(function () {
		$(this).val($(this).val().toString().replace(/,/, '.').replace(/[^\d.,]+/, ''));
		if($(this).val() == '') $(this).val(prevValues[$(this).attr('id')]);
	});

	let input = document.querySelectorAll('input');
	let select = document.querySelectorAll('select');
	let span = document.querySelector('#sasa');
	let value, spis1, spis2, spis3, spis4, spis5, spis6, spis7, war, izd, inv, uinv;

	function modRound(value, precision) {
		// спецчисло для округления
		var precision_number = Math.pow(10, precision);

		// округляем
		return Math.round(value * precision_number) / precision_number;
	};

	for(let sel of select) {
		sel.onchange = function() {
			spis1 = document.vvodznac.spis1.value;
			if (spis1 === 'hand') {
				document.getElementById('spis1_group_hand').style.display = 'block';
				document.getElementById('spis1_hand').setAttribute('required', '')
				spis1 = document.vvodznac.spis1_hand.value;
			} else {
				document.getElementById('spis1_group_hand').style.display = 'none';
			}

			spis2 = document.vvodznac.spis2.value;
			if (spis2 === 'hand') {
				document.getElementById('spis2_group_hand').style.display = 'block';
				document.getElementById('spis2_hand').setAttribute('required', '')
				spis2 = document.vvodznac.spis2_hand.value;
			} else {
				document.getElementById('spis2_group_hand').style.display = 'none';
			}

			spis3 = document.vvodznac.spis3.value;
			spis4 = document.vvodznac.spis4.value;
			spis5 = document.vvodznac.spis5.value;
			spis6 = document.vvodznac.spis6.value;
			spis7 = document.vvodznac.spis7.value;
			war = document.vvodznac.war.value;
			izd = document.vvodznac.izd.value;
			inv = document.vvodznac.inv.value;
			uinv = document.vvodznac.uinv.value;

			var kf = 0.3;

			if (spis5 > 0.64) {
				kf = 0.4;
			}

			spis1 = parseInt(spis1);
			spis2 = parseInt(spis2);
			spis3 = parseFloat(spis3);
			spis4 = parseFloat(spis4);
			spis5 = parseFloat(spis5);
			spis6 = parseFloat(spis6);
			spis7 = parseFloat(spis7);
			war = parseFloat(war);
			izd = parseFloat(izd);
			inv = parseFloat(inv);
			uinv = parseFloat(uinv);

			value = modRound((((spis1 * spis3 + spis2) + (spis1 * spis3 + spis2) * spis4) * spis6) * spis5 * spis7 + war + izd * spis6 + inv * spis6 + uinv * spis6, 2);
		};
	};

	for(let inp of input) {
		inp.onkeyup = function() {
			spis1 = document.vvodznac.spis1.value;
			if (spis1 === 'hand') {
				document.getElementById('spis1_group_hand').style.display = 'block';
				document.getElementById('spis1_hand').setAttribute('required', '')
				spis1 = document.vvodznac.spis1_hand.value;
			} else {
				document.getElementById('spis1_group_hand').style.display = 'none';
			}

			spis2 = document.vvodznac.spis2.value;
			if (spis2 === 'hand') {
				document.getElementById('spis2_group_hand').style.display = 'block';
				document.getElementById('spis2_hand').setAttribute('required', '')
				spis2 = document.vvodznac.spis2_hand.value;
			} else {
				document.getElementById('spis2_group_hand').style.display = 'none';
			}

			spis3 = document.vvodznac.spis3.value;
			spis4 = document.vvodznac.spis4.value;
			spis5 = document.vvodznac.spis5.value;
			spis6 = document.vvodznac.spis6.value;
			spis7 = document.vvodznac.spis7.value;
			war = document.vvodznac.war.value;
			izd = document.vvodznac.izd.value;
			inv = document.vvodznac.inv.value;
			uinv = document.vvodznac.uinv.value;

			var kf = 0.3;

			if (spis5 > 0.64) {
				kf = 0.4;
			}

			spis1 = parseInt(spis1);
			spis2 = parseInt(spis2);
			spis3 = parseFloat(spis3);
			spis4 = parseFloat(spis4);
			spis5 = parseFloat(spis5);
			spis6 = parseFloat(spis6);
			spis7 = parseFloat(spis7);
			war = parseFloat(war);
			izd = parseFloat(izd);
			inv = parseFloat(inv);
			uinv = parseFloat(uinv);

			value = modRound((((spis1 * spis3 + spis2) + (spis1 * spis3 + spis2) * spis4) * spis6) * spis5 * spis7 + war + izd * spis6 + inv * spis6 + uinv * spis6, 2);
		};
	};

	/*function main() {

		spis1 = document.vvodznac.spis1.value;
		if (spis1 === 'hand') {
			document.getElementById('spis1_group_hand').style.display = 'block';
			document.getElementById('spis1_hand').setAttribute('required', '')
			spis1 = document.vvodznac.spis1_hand.value;
		} else {
			document.getElementById('spis1_group_hand').style.display = 'none';
		}

		spis2 = document.vvodznac.spis2.value;
		if (spis2 === 'hand') {
			document.getElementById('spis2_group_hand').style.display = 'block';
			document.getElementById('spis2_hand').setAttribute('required', '')
			spis2 = document.vvodznac.spis2_hand.value;
		} else {
			document.getElementById('spis2_group_hand').style.display = 'none';
		}

		spis3 = document.vvodznac.spis3.value;
		spis4 = document.vvodznac.spis4.value;
		spis5 = document.vvodznac.spis5.value;
		spis6 = document.vvodznac.spis6.value;
		spis7 = document.vvodznac.spis7.value;
		war = document.vvodznac.war.value;
		izd = document.vvodznac.izd.value;
		inv = document.vvodznac.inv.value;
		uinv = document.vvodznac.uinv.value;

		var kf = 0.3;

		if (spis5 > 0.64) {
			kf = 0.4;
		}

		spis1 = parseInt(spis1);
		spis2 = parseInt(spis2);
		spis3 = parseFloat(spis3);
		spis4 = parseFloat(spis4);
		spis5 = parseFloat(spis5);
		spis6 = parseFloat(spis6);
		spis7 = parseFloat(spis7);
		war = parseFloat(war);
		izd = parseFloat(izd);
		inv = parseFloat(inv);
		uinv = parseFloat(uinv);

		value = modRound((((spis1 * spis3 + spis2) + (spis1 * spis3 + spis2) * spis4) * spis6) * spis5 * spis7 + war + izd * spis6 + inv * spis6 + uinv * spis6, 2);
	}*/

	$(".performCalc").click(function () {
		//$('.result-bottom').hide();
		calcResult.hide();
		if (spis1 === undefined || isNaN(spis1) || spis2 === undefined || isNaN(spis2) || spis3 === undefined || isNaN(spis3) || spis4 === undefined || isNaN(spis4) || spis5 === undefined || isNaN(spis5)) {
			return;
		} else {
			span.innerHTML = `${value}`;
			calcResult.slideUp();
			calcResult.fadeIn();
		}
	});




