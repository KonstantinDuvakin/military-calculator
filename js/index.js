import "./jquery.nice-select.min";
import "./balloon";
import "./hint_texts";
import "./public";

import "../css/style.scss";
import "../css/grid.scss";
import "../css/nice-select.scss";

import $ from "jquery";
import {calcHintText} from "./hint_texts";

$('select').niceSelect();

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

let form = document.querySelector('form');
form.addEventListener("submit", function (event) {
    event.preventDefault();
});