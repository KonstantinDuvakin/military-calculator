import "./jquery.nice-select.min";
import "./public";

import "../css/style.scss";
import "../css/grid.scss";
import "../css/nice-select.scss";

import $ from "jquery";
import initWidgetLogic from "./public";

function initMilitaryCalculator (container, options)
{
    let html = `
		<link rel="stylesheet" href="https://military.pfrf-kabinet.ru/dist/bundle.css">
	`;

    html += `
<div class="d-flex justify-content-center">
    <div class="w-100">
        <div class="calc-form pt-4 pb-5 px-4">
            <div class="row">
                <div class="col-sm-6 my-3 align-self-center d-flex">
                    <img class="mr-4" src="https://military.pfrf-kabinet.ru/img/logo.svg" alt="Онлайн калькулятор пенсии">
                    <span class="online-calculator align-self-center">Калькулятор военной
                    <br>пенсии за выслугу лет</span>
                </div>
                <div class="col-sm-6 my-3 align-items-end d-flex justify-content-end">
                    <a href="" class="bg-youtube-link-wrapper">
                        <div class="bg-youtube-link align-items-center justify-content-center d-flex pl-3 pr-4">
                            <img class="mr-4 ml-2" src="https://military.pfrf-kabinet.ru/img/youtube.svg" alt="Видео инструкция">
                            <span class="video-instruction">Видео инструкция<br>для калькулятора</span>
                        </div>
                    </a>
                </div>
            </div>
            <form name="vvodznac" id="vvodznac">
                <div class="row mt-4">
                    <div class="col-md-12 ml-1">
                        <label for="spis1"><span>Оклад по воинской должности</span></label>
                    </div>
                    <div class="col-md-12 mb-3 ml-1">
                        <a href="https://pfrf-kabinet.ru/faq/razmery-okladov-po-voinskim-dolzhnostyam.html" rel="nofollow" target="_blank">(тарифный разряд по штатной воинской должности)</a>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis1" name="spis1" required tabindex="-1">
                            <option value="">Укажите тарифный разряд по воинской должности</option>
                            <option value="hand">Указать размер оклада вручную</option>
                            <option value="10848">1 тарифный разряд(стрелок, маскировщик, дорожник)</option>
                            <option value="11932">2 тарифный разряд (пулеметчик, снайпер)</option>
                            <option value="13017">3 тарифный разряд (старший гранатометчик)</option>
                            <option value="14102">4 тарифный разряд (командир танка)</option>
                            <option value="16271">5 тарифный разряд (командир отделения)</option>
                            <option value="17356">6 тарифный разряд (фельдшер)</option>
                            <option value="18441">7 тарифный разряд (заместитель командира взвода)</option>
                            <option value="18983">8 тарифный разряд (переводчик)</option>
                            <option value="19525">9 тарифный разряд (старшина, старший техник)</option>
                            <option value="21695">10 тарифный разряд (командир взвода)</option>
                            <option value="22237">11 тарифный разряд (инженер в управлении батальона)</option>
                            <option value="22780">12 тарифный разряд (заместитель командира роты)</option>
                            <option value="23322">13 тарифный разряд (старший офицер полка)</option>
                            <option value="23864">14 тарифный разряд (командир роты (батареи))</option>
                            <option value="24407">15 тарифный разряд (офицер в управлении дивизии)</option>
                            <option value="24949">16 тарифный разряд (заместитель командира батальона)</option>
                            <option value="25491">17 тарифный разряд (начальник разведки)</option>
                            <option value="26034">18 тарифный разряд (командир батальона)</option>
                            <option value="26576">19 тарифный разряд (офицер в управлении армии)</option>
                            <option value="27118">20 тарифный разряд (офицер в управлении командования)</option>
                            <option value="27661">21 тарифный разряд (старший офицер в управлении армии)</option>
                            <option value="28203">22 тарифный разряд (старший офицер в управлении командования)</option>
                            <option value="28746">23 тарифный разряд (командир полка)</option>
                            <option value="29288">24 тарифный разряд (начальник отделения в управлении командования)</option>
                            <option value="29830">25 тарифный разряд (заместитель командира бригады)</option>
                            <option value="30373">26 тарифный разряд (старший офицер ГШ)</option>
                            <option value="30915">27 тарифный разряд (старший инспектор в управлении командования)</option>
                            <option value="31457">28 тарифный разряд (командир бригады)</option>
                            <option value="32000">29 тарифный разряд (заместитель командира дивизии)</option>
                            <option value="32542">30 тарифный разряд (заместитель начальника отдела ГШ)</option>
                            <option value="33084">31 тарифный разряд (командир дивизии)</option>
                            <option value="33627">32 тарифный разряд (командир бригады надводных кораблей)</option>
                            <option value="34169">33 тарифный разряд (начальник отдела ГШ)</option>
                            <option value="34712">34 тарифный разряд (командир авиационной базы)</option>
                            <option value="35254">35 тарифный разряд (командир корпуса)</option>
                            <option value="35796">36 тарифный разряд (заместитель начальника УМЦ)</option>
                            <option value="36339">37 тарифный разряд (заместитель командующего армией)</option>
                            <option value="36881">38 тарифный разряд (заместитель начальника управления ГУ)</option>
                            <option value="37423">39 тарифный разряд (командир эскадры кораблей)</option>
                            <option value="37966">40 тарифный разряд (первый заместитель командующего армией)</option>
                            <option value="38508">41 тарифный разряд (заместитель командующего войсками)</option>
                            <option value="39050">42 тарифный разряд (начальник управления ГУ ГШ)</option>
                            <option value="39593">43 тарифный разряд (заместитель начальника ВИ МО)</option>
                            <option value="40135">44 тарифный разряд (командующий армией)</option>
                            <option value="40677">45 тарифный разряд (начальник военного учебно-научного центра)</option>
                            <option value="41220">46 тарифный разряд (заместитель главнокомандующего видом ВС)</option>
                            <option value="43389">47 тарифный разряд (командующий войсками военного округа)</option>
                            <option value="45559">48 тарифный разряд (Главнокомандующий видом ВС)</option>
                            <option value="47728">49 тарифный разряд (заместитель МО РФ)</option>
                            <option value="48813">50 тарифный разряд (первый заместитель МО РФ)</option>
                        </select>
                    </div>
                    <div class="col-md-12 mb-3 ml-1" id="spis1_group_hand" style="display: none">
                        <label for="spis1_hand">Оклад по воинской должности (ввод вручную)</label><br>
                        <input class="w-100 mt-3" id="spis1_hand" name="spis1_hand" placeholder="Укажите размер оклада" type="number" value="">
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis2"><span>Оклад по воинскому званию</span></label>
                    </div>
                    <div class="col-md-12 mb-3 ml-1">
                        <a href="https://pfrf-kabinet.ru/faq/razmery-okladov-po-voinskim-zvaniyam.html" rel="nofollow" target="_blank">(размеры окладов по воинским званиям)</a>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis2" name="spis2" required tabindex="-1">
                            <option value="">Укажите воинское звание</option>
                            <option value="hand">Указать размер оклада вручную</option>
                            <option value="5424">Рядовой, матрос</option>
                            <option value="5966">Ефрейтор, старший матрос</option>
                            <option value="6509">Младший сержант, старшина 2 статьи</option>
                            <option value="7051">Сержант, старшина 1 статьи</option>
                            <option value="7594">Старший сержант, главный старшина</option>
                            <option value="8136">Старшина, главный карабельный старшина</option>
                            <option value="8678">Прапорщик, мичман</option>
                            <option value="9221">Старший прапорщик, старший мичман</option>
                            <option value="10305">Младший лейтенант</option>
                            <option value="10848">Лейтенант</option>
                            <option value="11390">Старший лейтенант</option>
                            <option value="11932">Капитан, капитан-лейтенант</option>
                            <option value="12475">Майор, капитан 3 ранга</option>
                            <option value="13017">Подполковник, капитан 2 ранга</option>
                            <option value="14102">Полковник, капитан 1 ранга</option>
                            <option value="21695">Генерал-майор, контр-адмирал</option>
                            <option value="23864">Генерал-лейтенант, вице-адмирал</option>
                            <option value="27119">Генерал-полковник, адмирал</option>
                            <option value="29288">Генерал армии, адмирал флота</option>
                            <option value="32542">Маршал Российской Федерации</option>
                        </select>
                    </div>
                    <div class="col-md-12 mb-3 ml-1" id="spis2_group_hand" style="display: none">
                        <label for="spis2_hand">Оклад по воинскому званию (ввод вручную)</label>
                        <input class="w-100 mt-3" id="spis2_hand" name="spis2_hand" placeholder="Укажите размер оклада" type="number" value="">
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis3"><span>Надбавка за квалификационную категорию летному составу</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis3" name="spis3" required>
                            <option value="">Укажите квалификационную категорию</option>
                            <option value="1">Отсутствие квалификационной категории</option>
                            <option value="1.15">Летчик (штурман) второго класса, летчик (штурман) - инструктор второго класса</option>
                            <option value="1.2">Летчик (штурман) первого класса, летчик (штурман) - инструктор первого класса</option>
                            <option value="1.3">Летчик (штурман)-снайпер</option>
                            <option value="1.1">Бортовой специалист второго класса</option>
                            <option value="1.15">Бортовой специалист первого класса</option>
                            <option value="1.2">Бортовой специалист-мастер</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis4"><span>Надбавка за выслугу лет</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis4" name="spis4" required>
                            <option value="">Укажите выслугу для исчисления надбавки за выслугу лет</option>
                            <option value="0.15">от 5 до 10 лет - 15 %</option>
                            <option value="0.20">от 10 до 15 лет - 20 %</option>
                            <option value="0.25">от 15 до 20 лет - 25 %</option>
                            <option value="0.30">от 20 до 25 лет - 30 %</option>
                            <option value="0.40">от 25 лет и более - 40 %</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis5"><span>Общая продолжительность службы, учитываемая для назначении пенсии</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis5" name="spis5" required>
                            <option value="">Укажите выслугу лет на пенсию</option>
                            <option value="0.50">20 лет - 50 %</option>
                            <option value="0.53">21 год - 53 %</option>
                            <option value="0.56">22 лет - 56 %</option>
                            <option value="0.59">23 лет - 59 %</option>
                            <option value="0.62">24 лет - 62 %</option>
                            <option value="0.65">25 лет - 65 %</option>
                            <option value="0.68">26 лет - 68 %</option>
                            <option value="0.71">27 лет - 71 %</option>
                            <option value="0.74">28 лет - 74 %</option>
                            <option value="0.77">29 лет - 77 %</option>
                            <option value="0.80">30 лет - 80 %</option>
                            <option value="0.83">31 год - 83 %</option>
                            <option value="0.85">32 года или более - 85 %</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis6"><span>Районный коэффициент</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis6" name="spis6">
                            <option value="1.0">Нет</option>
                            <option value="1.15">1.15</option>
                            <option value="1.2">1.2</option>
                            <option value="1.25">1.25</option>
                            <option value="1.3">1.3</option>
                            <option value="1.4">1.4</option>
                            <option value="1.5">1.5</option>
                            <option value="1.6">1.6</option>
                            <option value="1.7">1.7</option>
                            <option value="1.8">1.8</option>
                            <option value="2.0">2.0</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="war"><span>Повышение пенсии (надбавка) ветерану боевых действий*</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="war" name="war">
                            <option value="0">Нет</option>
                            <option value="1587.15">Да (с 01.01.2017 г. - 1587,15 руб.)</option>
                            <option value="1610.96">Да (с 01.01.2018 г. - 1610,96 руб.)</option>
                            <option value="1657.68">Да (с 01.04.2018 г. - 1657,68 руб.)</option>
                            <option value="1690.83">Да (с 01.04.2019 г. - 1690,83 руб.)</option>
                            <option value="1793.97">Да (с 01.04.2020 г. - 1793,97 руб.)</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="izd"><span>Надбавка неработающим пенсионерам, имеющим нетрудоспособных иждивенцев*</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="izd" name="izd">
                            <option value="0">Нет</option>
                            <option value="1690.83">1 иждивенец (с 01.04.2019 г. - 32 % расчетного размера пенсии (1690,83 руб.)</option>
                            <option value="3381.66">2 иждивенца (с 01.04.2019 г. - 64 % расчетного размера пенсии (3381,66 руб.)</option>
                            <option value="5283.84">3 и более иждивенцев (100 % расчетного размера пенсии (5283,84 руб.)</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="inv"><span>Надбавка пенсионерам, являющимся инвалидами I группы либо достигшим 80-летнего возраста*</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="inv" name="inv">
                            <option value="0">Нет</option>
                            <option value="5283.84">Инвалид I гр. либо возраст 80-лет (с 01.04.2019 г. - 100 % расчетного размера пенсии (5283.84 руб.)</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="uinv"><span>Увеличение пенсии за выслугу лет инвалидам I-III группы*</span></label>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="uinv" name="uinv">
                            <option value="0">Нет</option>
                            <option value="15851.52">Инвалиды I гр. вследствие военной травмы (300% РРП - 15 851,52 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283, 84 руб.)</option>
                            <option value="13209.6">Инвалиды II гр. вследствие военной травмы (250% РРП - 13209,6 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283.84 руб.)</option>
                            <option value="9246.72">Инвалиды III гр. вследствие военной травмы (175% РРП - 9246,72 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283.84 руб.)</option>
                            <option value="13209.6">Инвалиды I гр., участники ВОВ, ставшие инвалидами вследствие общего заболевания, трудового увечья и других причин (за исключением лиц, инвалидность которых наступила вследствие их противоправных действий) (250% РРП - 13209,6 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283.84 руб.)</option>
                            <option value="10567.68">Инвалиды II гр., участники ВОВ, ставшие инвалидами вследствие общего заболевания, трудового увечья и других причин (за исключением лиц, инвалидность которых наступила вследствие их противоправных действий) (200% РРП - 10567,68 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283.84 руб.)</option>
                            <option value="7925.76">Инвалиды III гр., участники ВОВ, ставшие инвалидами вследствие общего заболевания, трудового увечья и других причин (за исключением лиц, инвалидность которых наступила вследствие их противоправных действий) (150% РРП - 7924,76 руб.) (с 01.04.2019 г. - расчетный размер пенсии (РРП) - 5283.84 руб.)</option>
                        </select>
                    </div>
                    <div class="col-md-12 ml-1">
                        <label for="spis7"><span>Укажите дату, на которую необходимо рассчитать военную пенсию</span></label>
                    </div>
                    <div class="col-md-12 mb-3 ml-1">
                        <a href="https://pfrf-kabinet.ru/faq/ponizhayuschiy-koeffitsient-voennoy-pensii.html" rel="nofollow" target="_blank">(см. понижающий коэффициент военной пенсии)</a>
                    </div>
                    <div class="col-md-12 mb-3 d-flex position-relative">
                        <img src="https://military.pfrf-kabinet.ru/img/choise_triangle.svg" class="arrow">
                        <select class="w-100 px-3" id="spis7" name="spis7">
                            <option selected="selected" value="1.0">Без коэффициента</option>
                            <option value="0.5805">с 01.10.2013 г. (58,05%)</option>
                            <option value="0.6005">с 01.01.2014 г. (60,05%)</option>
                            <option value="0.6212">с 01.01.2015 г. (62,12%)</option>
                            <option value="0.6677">с 01.10.2015 г. (66,77%)</option>
                            <option value="0.6945">c 01.02.2016 г. (69,45%)</option>
                            <option value="0.7223">01.01.2018 год (72,23%)</option>
                            <option value="0.7368">01.10.2019 год (73,68 процента)</option>
                            <option value="0.7368">2020 год (73,68%)</option>
                            <option value="0.7368">2021 год (73,68%)</option>
                            <option value="0.74">2022 год (74%)</option>
                            <option value="0.76">2023 год (76%)</option>
                            <option value="0.78">2024 год (78%)</option>
                            <option value="0.80">2025 год (80%)</option>
                            <option value="0.82">2026 год (82%)</option>
                            <option value="0.84">2027 год (84%)</option>
                            <option value="0.86">2028 год (86%)</option>
                            <option value="0.88">2029 год (88%)</option>
                            <option value="0.90">2030 год (90%)</option>
                            <option value="0.92">2031 год (92%)</option>
                            <option value="0.94">2032 год (94%)</option>
                            <option value="0.96">2033 год (96%)</option>
                            <option value="0.98">2034 год (98%)</option>
                            <option value="1.0">2035 год (100%)</option>
                        </select>
                    </div>
                </div>
                <div class="row mt-5">
                    <div class="col-sm-7 mb-2 align-self-center">
                        <div class="copyright">
                        <span class="text-secondary bottom-link">Калькулятор пенсии представлен
                        <br>сайтом <a href="https://pfrf-kabinet.ru" rel="nofollow" target="_blank">pfrf-kabinet.ru</a></span>
                        </div>
                    </div>
                    <div class="col-sm-5 mb-2">
                        <button class="blue-button performCalc under-right-part w-100">Рассчитать</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="pensionCalcResult result-block pb-5">
            <h2 class="pl-4">Результаты расчета</h2>
            <div class="row m-0 align-items-center">
                <div class="col-sm-7 py-3 pl-4" style="background: #ECF1F5">
                    <label>Итоговый размер пенсии (руб.)</label>
                </div>
                <div class="col-sm-5 py-3" style="background: #ECF1F5">
                    <span id="sasa"></span>
                </div>
            </div>
        </div>
        <div class="calc-footer justify-content-end d-flex flex-wrap">
            <div class="py-3 align-self-center mr-4">
                <a class="footer-button d-flex" href="https://pfrf-kabinet.ru/feedback" rel="nofollow" target="_blank">
                    <img class="mr-2 align-self-center" src="https://military.pfrf-kabinet.ru/img/warning.svg" alt="Внимание!">
                    <span class="calc-footer-text">Сообщить об ошибке</span>
                </a>
            </div>
            <div class="py-3 align-self-center mr-4">
                <a class="footer-button d-flex" href="https://pfrf-kabinet.ru/kalkulyator-voennoy-pensii/vidzhet" rel="nofollow" target="_blank">
                    <img class="mr-2 align-self-center" src="https://military.pfrf-kabinet.ru/img/bracket.svg" alt="Скобки">
                    <span class="calc-footer-text">Виджет для сайта</span>
                </a>
            </div>
            <div class="py-3 d-flex">
                <a class="footer-button d-flex mr-1" href="https://vk.com/share.php?url=${location.href}">
                    <img class="align-self-center" src="https://military.pfrf-kabinet.ru/img/vk.svg" alt="ВКонтакте">
                </a>
                <a class="footer-button d-flex mr-1" href="https://connect.ok.ru/offer?url=${location.href}">
                    <img class="align-self-center" src="https://military.pfrf-kabinet.ru/img/odnoklassniki.svg" alt="Одноклассники">
                </a>
                <a class="footer-button d-flex mr-1" href="https://www.facebook.com/sharer/sharer.php?u=${location.href}">
                    <div class="fb">
                        <img class="icon-fb" src="https://military.pfrf-kabinet.ru/img/facebook.svg" alt="Facebook">
                    </div>
                </a>
                <a class="footer-button d-flex" href="http://twitter.com/share?url=${location.href}">
                    <div class="twitter">
                        <img class="icon-twitter" src="https://military.pfrf-kabinet.ru/img/twitter.svg" alt="Twitter">
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

    initWidgetLogic();

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

    $('select').niceSelect();

    let form = document.querySelector('form');
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    });
}

let scriptTag = document.getElementById('militaryCalc');
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
        initMilitaryCalculator(container, {background, buttonColor, buttonTextColor, hideCopyright, fast});
    });
}

window.addEventListener('load', function ()
{
    insertWidget();
});
