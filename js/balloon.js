
(function ($) {
	var options = {};
	var optionSet = {};
	var html = $('html');

	function setUserOptions(userOptions) {
		options = $.extend({
			defaultClass: 'balloon',
			width: 300,
			speed: 350,
			triangleVerticalSide: false, // Язычок по умолчанию к горизонтальной грани,
			hideTriangle: false, // Скрывать язычок
			clickEvent: false, // По умолчанию показываем по наведению
			closeButton: false // Для открывания по клику по умолчанию показываем кнопку закрытия
		}, userOptions);
	}

	$.balloon = function (method, userOptions) {
		var isMobile = html.hasClass('adopt-mobile');
		method = typeof method !== 'undefined' ? method : 'show';
		setUserOptions(userOptions);
		switch(method) {
			case 'hover' :
				var obj = userOptions.object;
				var id = obj.attr('id');
				if(obj.attr('id') == undefined) {
					id = 'id_' + guid();
					obj.attr('id', id);
				}
				optionSet[id] = userOptions;
				var event = (isMobile) ? 'click' : 'mouseover';
				obj.bind(event, function (e) {
					var options = optionSet[$(this).attr('id')];
					options.x = e.pageX;
					options.y = e.pageY;
					$.balloon('show', options);
				}).mouseout(function () {
					if(!isMobile) {
						hide();
					}
				});
				break;
			case 'show' :
				defineViewOptions();
				renderBalloon(options.innerContent);
				break;
			case 'hide' :
				if(!isMobile) {
					hide();
				}
				break;
		}
	};

	function hide() {
		$('.' + options.defaultClass).remove();
	}

	function defineViewOptions() {
		var isAssist = html.hasClass('assist-view');
		options.minusHeight = false;
		var classArr = [options.defaultClass];
		var width = $(window).width();
		var height = $(window).height();
		var fromTop = options.y - $(document).scrollTop();
		if(fromTop < height / 2) {
			classArr.push('balloon-top');
			options.deltaY = (options.triangleVerticalSide) ? 10 : 33;
		}
		else {
			classArr.push('balloon-bottom');
			options.minusHeight = true;
			options.deltaY = (options.triangleVerticalSide) ? -5 : -40;
		}
		var hClass = '';
		if(options.x < width / 2) {
			hClass = 'left';
			if(!isAssist) {
				options.deltaX = (options.triangleVerticalSide) ? 47 : 0;
			}
			else {
				options.deltaX = 0;
			}
		}
		else {
			hClass = 'right';
			var delta = 0;
			if(!isAssist) delta = (options.triangleVerticalSide) ? 80 : 33;
			options.deltaX = -options.width - delta;
		}
		if(options.triangleVerticalSide) {
			hClass += '-side';
		}
		classArr.push(hClass);
		options.className = classArr.join(' ');
	}

	function renderBalloon(innerContent) {
		if(innerContent == undefined || innerContent == null || innerContent == '') {
			return false;
		}
		var isMobile = html.hasClass('adopt-mobile');
		if(isMobile) {
			innerContent += '<div class="blue-button" id="close_balloon">Закрыть подсказку</div>';
		}
		else
		if(options.closeButton) {
			innerContent = '<div class="close-balloon"></div>' + innerContent;
		}
		hide();
		if (options.hideTriangle) {
			options.className += ' no-triangle';
		}

		if(options.minusHeight) {
			innerContent = `<div class="arrow-down"></div>` + innerContent
		}
		else
		{
			innerContent = `<div class="arrow-up"></div>` + innerContent
		}

		$('body').append('<div class="' + options.className + '">' + innerContent + '</div>');
		var balloon = $('.' + options.defaultClass);

		setTimeout(() =>
		{
			document.addEventListener('click', function(event) {
				var isClickInside = balloon[0].contains(event.target);

				if (!isClickInside) {
					balloon.remove();
				}
			});
		}, 0);

		var width = options.width;
		if(isMobile) {
			width = $(window).width() - balloon.css('padding-left').replace('px', '') - balloon.css('padding-right').replace('px', '');
		}
		balloon.css('width', width + 'px');

		var top = 0;
		if(!isMobile) {
			top = options.y + options.deltaY;
			if(options.minusHeight) {
				top = top - balloon.outerHeight() + 40;
			}
		}
		else {
			top = $(document).scrollTop() + 10;
			var height = balloon.outerHeight();
			if(top + height < options.y - 30) {
				top = options.y - 30 - height;
			}
		}

		var left = 0;
		if(!isMobile) left = options.x + options.deltaX;
		balloon.hide().css({
			top: top + 'px',
			left: left + 'px'
		});

		balloon.fadeIn(options.speed);
		if(isMobile) {
			balloon.find('#close_balloon').click(function () {
				hide();
			});
		}
		balloon.find('.close-balloon').click(function () {
			hide();
		});
	}

	var guid = (function () {
		function s4() {
			return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
		}

		return function () {
			return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
		};
	})();

})($);
