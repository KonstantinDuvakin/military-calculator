import "./jquery.nice-select.min";
import "./balloon";
import "./hint_texts";
import "./params";
import "./public";
import "./mask";

import "../css/style.scss";
import "../css/grid.scss";
import "../css/nice-select.scss";

import $ from "jquery";
import {calcHintText} from "./hint_texts";
import initWidget from "./public";

function initPFRCalculator (container, options)
{
	let html = `
		<link rel="stylesheet" href="https://kalkulyator.pfrf-kabinet.ru/dist/bundle.css">
	`;

	html += `
<div class="d-flex justify-content-center">
    <div class="w-100">
    <div class="calc-form pt-4 pb-5 pl-4">
        <div class="row">
            <div class="col-sm-6 my-3 align-self-center d-flex">
                <img class="mr-4" src="https://kalkulyator.pfrf-kabinet.ru/img/calculator.svg" alt="Онлайн калькулятор пенсии">
                <span class="online-calculator">Онлайн калькулятор
                    <br>пенсии</span>
            </div>
            <div class="col-sm-6 my-3 align-items-end d-flex justify-content-end">
                <a href="" class="bg-youtube-link-wrapper">
                    <div class="bg-youtube-link align-items-center justify-content-center d-flex pl-3 pr-4">
                        <img class="mr-4 ml-2" src="https://kalkulyator.pfrf-kabinet.ru/img/youtube.svg" alt="Видео инструкция">
                        <span class="video-instruction">Видео инструкция<br>для калькулятора</span>
                    </div>
                </a>
            </div>
        </div>
        <div class="row mt-4"> 
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="gender"><span>Пол</span></label>
            </div>
            <div class="col-sm-5 mb-4 d-flex position-relative">
            	<img src="https://kalkulyator.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                <select class="w-100 px-3" name="gender" id="gender">
                    <option value="0">Мужской</option>
                    <option value="1">Женский</option>
                </select>
                <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link gender pl-3 align-self-center" data-help-id="gender">
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="birthDate"><span>Год рождения (ЧЧ.ММ.ГГГГ)</span></label>
            </div>
            <div class="col-sm-5 mb-4">
                <input class="w-100" value="" name="birthDate" id="birthDate" type="text" placeholder="__.__.____">
            </div>
            <input type="hidden" name="pensionTarif" value="0">
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="yearsInArmy">
                    <span>Сколько лет Вы проходили/планируете проходить
                        <br>военную службу по призыву?</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4 position-relative">
                <div class="d-flex">
                    <input class="w-100" value="" name="yearsInArmy" id="yearsInArmy" type="text" placeholder="лет">
                    <input class="w-100 mx-2" value="" name="monthInArmy" id="monthInArmy" type="text" placeholder="мес">
                    <input class="w-100" value="" name="daysInArmy" id="daysInArmy" type="text" placeholder="дней">
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="yearsInArmy">
                </div>
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="childrenCount1">
                    <span>Сколько детей Вы планируете иметь?<br>
                        <span class="text-secondary">(с учётом уже имеющихся)
                        </span>
                    </span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <input class="w-100" value="" name="childrenCount1" id="childrenCount1" type="text" placeholder="Например 2">
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="childrenVac1">
                    <span>Сколько лет Вы планируете осуществлять<br>
                        уход за каждым из детей?</span><br>
                        <span class="text-secondary">(с учётом уже имеющихся)</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <div class="d-flex">
                    <input class="w-100" value="" name="childrenVac1" id="childrenVac1" type="text" placeholder="Например 18">
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="childrenVac">
                </div>
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label>
                    <span>Сколько лет Вы предполагаете ухаживать</span>
                        <br>за нетрудоспособными гражданами:
                        <span class="text-secondary">
                        <br>- инвалидами 1 группы,
                        <br>- ребёнком-инвалидом,
                        <br>- гражданином, достигшим возраста 80 лет</span>
                        <br>
                        <span>и при этом не работать?</span>
                        <span class="text-secondary"><br>(с учётом уже имеющихся периодов ухода
                        <br>за нетрудоспособными гражданами)</span>
                    </span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <div class="d-flex">
                    <input class="w-100" value="" name="careYears" id="careYears" type="text" placeholder="лет">
                    <input class="w-100 mx-2" value="" name="careMonth" id="careMonth" type="text" placeholder="мес">
                    <input class="w-100" value="" name="careDays" id="careDays" type="text" placeholder="дней">
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="disabledPeople">
                </div>
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="retireWorkWithoutPension">
                    <span>Сколько лет после возникновения права
                        <br>на страховую пенсию Вы готовы
                        <br>не обращаться за её назначением?</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4 position-relative">
            	<img src="https://kalkulyator.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                <div class="d-flex">
                    <select class="w-100 px-3" name="retireWorkWithoutPension" id="retireWorkWithoutPension">
                        <option selected="selected" value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="retireWorkWithoutPension">
                </div>
            </div>
            <div class="col-sm-7 mb-4">
                <label class="careerPlan">
                    <span>Вы планируете работать</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <label class="d-flex position-relative">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-circle.svg" class="radio-image">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-point.svg" class="radio-image-point" style="display: block">
                    <input class="radio-size mb-1 mr-3" name="careerPlan" value="1" checked type="radio">
                    <span>Наёмным работником</span>
                </label><br>
                <label class="d-flex position-relative">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-circle.svg" class="radio-image">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-point.svg" class="radio-image-point">
                    <input class="radio-size mb-1 mr-3" name="careerPlan" value="2" type="radio">
                    <span>Самозанятым гражданином</span>
                </label><br>
                <label class="d-flex position-relative">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-circle.svg" class="radio-image">
                	<img src="https://kalkulyator.pfrf-kabinet.ru/img/radio-point.svg" class="radio-image-point">
                    <input class="radio-size mb-1 mr-3" name="careerPlan" value="3" type="radio">
                    <span>Наёмным работником<br>и самозанятым гражданином</span>
                </label>
            </div>
        </div>
        <div class="careerPlanQuestions careerPlan2 row">
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="SZPeriod">
                    <span>Сколько лет Вы планируете осуществлять
                    <br>трудовую деятельность в качестве самозанятого гражданина?</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <input class="w-100" value="" name="SZPeriod" id="SZPeriod" type="text" placeholder="Например 6 лет">
            </div>
            <div class="col-sm-7 mb-4 align-self-center">
                <label for="revenue">
                <span>Введите Ваш годовой доход<br>
                    <span class="text-secondary">(рублей в год, в ценах 2021-го года до вычета НДФЛ)</span>
                </span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <input class="w-100" value="" name="revenue" id="revenue" type="text" placeholder="Например 35 000">
            </div>
        </div>
        <div class="careerPlanQuestions careerPlan1 row">
            <div class="col-sm-7 mb-4">
                <label for="careerLength">
                <span>Ваш предполагаемый стаж
                <br>в качестве наёмного работника</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <div class="d-flex">
                    <input class="w-100" value="" name="careerLength" id="careerLength" type="text" placeholder="0">
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="careerLength">
                </div>
            </div>
            <div class="col-sm-7 mb-4">
                <label for="fee">
                <span>Ваша официальная зарплата<br>
                    <span class="text-secondary">(рублей в месяц, в ценах 2021-го года до вычета НДФЛ)</span>
                </span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <div class="d-flex">
                    <input class="w-100" value="" name="fee" id="fee" type="text" placeholder="0">
                    <img src="https://kalkulyator.pfrf-kabinet.ru/img/question.svg" alt="?" class="help-link pl-3 align-self-center" data-help-id="fee">
                </div>
            </div>
        </div>
        <div class="careerPlanQuestions careerPlan3 row">
            <div class="col-sm-7 mb-4">
                <label for="combinePeriod">
                    <span>Сколько лет Вы планируете совмещать
                    <br>деятельность в качестве самозанятого гражданина
                    <br>и наёмного работника?</span>
                </label>
            </div>
            <div class="col-sm-5 mb-4">
                <input class="w-100" value="" name="combinePeriod" id="combinePeriod" type="text" placeholder="0">
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-7 mb-2 align-self-center">
                <div class="copyright">
                    <span class="text-secondary bottom-link">Калькулятор пенсии представлен
                    <br>сайтом <a href="https://pfrf-kabinet.ru" target="_blank">pfrf-kabinet.ru</a></span>
                </div>
            </div>
            <div class="col-sm-5 mb-2">
                <button class="blue-button performCalc under-right-part w-100">Рассчитать</button>
            </div>
        </div>
    </div>
    <div class="result-bottom">
        <div class="error" id="noTarif">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Пожалуйста, выберите Ваш тариф.</span>
        </div>
        <div class="error" id="enterGenderWarning">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Пожалуйста, укажите Ваш пол.</span>
        </div>
        <div class="error" id="enterBYWarning2">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>По закону, у граждан 1966 года рождения и старше пенсионные накопления не формируются.</span>
        </div>
        <div class="error" id="enterBYWarning3">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Введите другое значение Вашего трудового стажа.</span>
        </div>
        <div class="error w-100" id="enterBYWarning">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Пожалуйста, укажите год Вашего рождения.</span>
        </div>
        <div class="error" id="wrongFee">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Введите зарплату выше, чем минимальный размер оплаты труда в Российской Федерации в 2021&nbsp;году&nbsp;-&nbsp;12&nbsp;792&nbsp;рублей.</span>
        </div>
        <div class="error" id="alreadyPensioneer">
            <span class="warn-text">Расчет не произведён</span><br><br>
            <span>Извините, калькулятор не предназначен для расчета размера пенсий нынешних пенсионеров, граждан, которым до выхода на пенсию осталось менее 3-5 лет.</span>
        </div>
        <div class="error" id="socialPensionWarning">
            <span class="info-text">Информация</span><br><br>
            <p>В соответствии с введёнными Вами данными Ваш стаж составляет <span class="personOSsmall"></span> <span class="ending"></span>, количество пенсионных баллов – <span class="newCoefSummSmall"></span>. С 2025 года минимальный
                общий стаж для получения пенсии по старости – <b>15 лет</b>. Минимальное количество заработанных коэффициентов для назначения пенсии – 30. Если в ответах на вопросы Вы указали стаж менее 15 лет или же количество набранных
                коэффициентов не достигает <b>30</b>, то Вам будет назначена социальная пенсия по старости: женщинам в 60 лет, мужчинам в 65 лет. Социальная пенсия по старости сегодня составляет <b>5034,25 рублей в месяц</b>. Кроме этого, Вам
                будет производиться социальная доплата к пенсии до прожиточного уровня пенсионера в регионе Вашего проживания.
            </p>
            <p>Если Вы хотите получать более высокую пенсию, пересмотрите свои жизненные планы так, чтобы Ваш стаж составил 15 лет и более и Вы в итоге смогли заработать как минимум 30 пенсионных коэффициентов.</p>
        </div>
        <div class="error" id="socialPensionWarning2">
            <span class="info-text">Информация</span><br><br>
            <p>В соответствии с введнными Вам данными Ваш стаж составляет <span class="personOSsmall"></span> <span class="ending"></span>, количество пенсионных баллов – <span class="newCoefSummSmall"></span>. Вам не хватает пенсионных
                коэффициентов или стажа для назначения страховой пенсии по старости. С 2025 года минимальный общий стаж для получения пенсии по старости – <b>15 лет</b>. Минимальное количество заработанных коэффициентов для назначения
                пенсии – <b>30</b>. Если в ответах на вопросы Вы указали стаж менее 15 лет или же количество набранных коэффициентов не достигает 30, то Вам будет назначена социальная пенсия по старости: женщинам в 60 лет, мужчинам в
                65 лет. Социальная пенсия по старости сегодня составляет <b>5034,25 рублей в месяц</b>. Кроме этого, Вам будет производиться социальная доплата к пенсии до прожиточного уровня пенсионера в регионе Вашего проживания.
            </p>
            <p>Если Вы хотите получать более высокую пенсию, пересмотрите свои жизненные планы так, чтобы Ваш стаж составил 15 лет и более и Вы в итоге смогли заработать как минимум 30 пенсионных коэффициентов.</p>
        </div>
        <div class="error" id="combinationWarning">
        <span class="info-text">Информация</span><br><br>
            <p>Пожалуйста, проверьте правильность заполнения формы. Количество лет совмещения деятельности в качестве самозанятого гражданина и наёмного работника не может превышать количество лет минимального стажа, указанного в
                каждом виде деятельности по отдельности.
            </p>
            <p>Если Вы хотите получать более высокую пенсию, пересмотрите свои жизненные планы так, чтобы Ваш стаж составил 15 лет и более и Вы в итоге смогли заработать как минимум 30 пенсионных коэффициентов.</p>
        </div>
    </div>
    <div class="pensionCalcResult result-block pb-5" style="">
        <h2 class="pl-4">Результаты расчета</h2>
        <div class="row m-0">
            <div class="col-sm-7 py-3 pl-4">
                <label>
                    <span>Количество индивидуальных пенсионных коэффициентов</span>
                </label>
            </div>
            <div class="col-sm-5 py-3">
                <span id="newCoefSumm">24,57</span>
            </div>
            <div style="background: #ECF1F5" class="col-sm-7 py-3 pl-4">
                <label>
                    <span>Размер страховой пенсии, руб.</span>
                </label>
            </div>
            <div style="background: #ECF1F5" class="col-sm-5 py-3">
                <span id="pensionIPart">8473,79</span>
            </div>
            <div class="col-sm-7 py-3 pl-4">
                <label>
                    <span>Общий стаж, лет</span>
                </label>
            </div>
            <div class="col-sm-5 py-3 align-items-end">
                <span id="personOS">10</span>
            </div>
        </div>
    </div>
    <div class="calc-footer justify-content-end d-flex flex-wrap pr-2">
        <div class="py-3 align-self-center mr-4">
            <a class="footer-button d-flex" href="/">
                <img class="mr-2 align-self-center" src="https://kalkulyator.pfrf-kabinet.ru/img/warning.svg" alt="Внимание!">
                <span class="calc-footer-text">Сообщить об ошибке</span>
            </a>
        </div>
        <div class="py-3 align-self-center mr-4">
            <a class="footer-button d-flex" href="/">
                <img class="mr-2 align-self-center" src="https://kalkulyator.pfrf-kabinet.ru/img/bracket.svg" alt="Скобки">
                <span class="calc-footer-text">Виджет для сайта</span>
            </a>
        </div>
        <div class="py-3 d-flex"> 
            <a class="footer-button d-flex mr-1" href="https://vk.com/share.php?url=${location.href}">
                <img class="align-self-center" src="https://kalkulyator.pfrf-kabinet.ru/img/vk.svg" alt="ВКонтакте">
            </a>
            <a class="footer-button d-flex mr-1" href="https://connect.ok.ru/offer?url=${location.href}">
                <img class="align-self-center" src="https://kalkulyator.pfrf-kabinet.ru/img/odnoklassniki.svg" alt="Одноклассники">
            </a>
            <a class="footer-button d-flex mr-1" href="https://www.facebook.com/sharer/sharer.php?u=${location.href}">
                <div class="fb">
                    <img class="icon-fb" src="https://kalkulyator.pfrf-kabinet.ru/img/facebook.svg" alt="Facebook">
                </div>
            </a>
            <a class="footer-button d-flex mr-1" href="http://twitter.com/share?url=${location.href}">
                <div class="twitter">
                    <img class="icon-twitter" src="https://kalkulyator.pfrf-kabinet.ru/img/twitter.svg" alt="Twitter">
                </div>
            </a>
        </div>
    </div>
</div>
</div>
	`;

	if (options.fast !== '1')
	{
		container.innerHTML = html;
	}

	if (options.hideCopyright === "1")
	{
		let copyright = container.querySelector('.copyright');
		if (copyright)
		{
			copyright.style.display = 'none';
		}
	}

	container.querySelector('.performCalc').style.background = options.buttonColor;
	container.querySelector('.performCalc').style.color = options.buttonTextColor;
	container.querySelector('.calc-form').style.backgroundColor = options.background;

	$('.calc-form input[type="radio"]').on('change', (e) =>
	{
		$('.radio-image-point').hide();

		if (e.target.checked)
		{
			$(e.target).prev().show();
		}
	});

	let birthDate = document.getElementById('birthDate');
	var dateMask = IMask(birthDate,
		{
			mask: Date,
			min: new Date(1920, 0, 1),
			max: new Date(2021, 0, 1),
			lazy: false,
			color: '#bdbdbd',
			change : (e) =>
			{
				console.log(e);
			}
		});

	birthDate.style.color = '#bdbdbd';

	birthDate.addEventListener('input', e =>
	{
		let val = e.target.value;
		if (val === '__.__.____')
		{
			e.target.style.color = '#bdbdbd';
		}
		else
		{
			e.target.style.color = '#000';
		}
	});

	$('.calc-form input').on('input', e =>
	{
		e.target.classList.remove('with-warning');
	});

	$('.calc-form select').niceSelect();

	$('.help-link').each(function () {
		$(this).click(function (e) {
			var hintId = $(this).attr('data-help-id');
			var rect = e.target.getBoundingClientRect();

			$.balloon('show', {
				x: rect.left + window.scrollX + 75,
				y: rect.top + window.scrollY - 10,
				width: Math.min(400, window.innerWidth - 30), // ширина, но унитываем мобильную версию
				innerContent: calcHintText[hintId],
				triangleVerticalSide: false, // Язычок по умолчанию к горизонтальной грани,
				hideTriangle: false, // Скрывать язычок
				clickEvent: false, // По умолчанию показываем по наведению
				closeButton: true // Для открывания по клику по умолчанию показываем кнопку закрытия
			});
		});
	});

	initWidget();
}

let scriptTag = document.getElementById('pfr-widget');
let fast = scriptTag.getAttribute('fast');

if (window.calcWidgetInitiated === undefined)
{
	window.calcWidgetInitiated = false;
}

if (fast === '1')
{
	insertWidget();
}

function insertWidget ()
{
	if (window.calcWidgetInitiated === true)
	{
		return;
	}

	console.log('INSERT calc widget');
	window.calcWidgetInitiated = true;

	let widgetClass = scriptTag.getAttribute('widget-class');
	let containers = document.querySelectorAll('.' + widgetClass);
	Array.prototype.forEach.call(containers, container =>
	{
		let background = container.dataset.background || "#F6F8FB";
		let buttonColor = container.dataset.buttonColor || "#D6E36E";
		let buttonTextColor = container.dataset.buttonTextColor || "#585F22";
		let hideCopyright = container.dataset.hideCopyright || "0";
		initPFRCalculator(container, {background, buttonColor, buttonTextColor, hideCopyright, fast});
	});
}

window.addEventListener('load', function ()
{
	insertWidget();
});
