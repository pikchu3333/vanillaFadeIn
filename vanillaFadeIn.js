/*!
		 * Vanila FadeIn
		 * https://gloomy-store.com
		 *
		 * Copyright OpenJS Foundation and other contributors
		 * Released under the MIT license
		 * 
		 * Made In Gloomy-store
		 *
		 * Date: 2022-03-08
		 */
		
		/*fadeIn*/
		function fadeIn(t) {
			let op = Number(t.style.opacity);
			if(op < 1 && op >0.1) return;
			let Timer = 800;
			setInterval(function() {
				if (op < 1) {
					op = Number((op + 0.025).toFixed(3));
					t.style.opacity = op;
				} else if (op > 1) {
					op = 1
				} else return
			}, (Timer / 40))
		}

		/*fadeOut*/
		function fadeOut(t) {
			let op = Number(t.style.opacity);
			if (!op && op !== 0) op = 1;
			if(op < 1 && op >0.1) return;
			let Timer = 800;
			setInterval(function() {
				if (op > 0) {
					op = Number((op - 0.025).toFixed(3));
					if (op < 0.025) op = 0;
					t.style.opacity = op;
				} else if (op < 0) {
					op = 0
				} else return
			}, (Timer / 40))
		}

		let h = window.outerHeight;
		window.addEventListener('scroll', function() {
			let jsFadeIn = document.getElementsByClassName('js-fade-in')
			for (let i = 0; i < jsFadeIn.length; i++) {
				if (jsFadeIn[i].getBoundingClientRect().top < h && jsFadeIn[i].getBoundingClientRect().top > -200) fadeIn(jsFadeIn[i])
				else {
					fadeOut(jsFadeIn[i])
				}
			}

		})
		window.addEventListener('load', function() {
			let jsFadeIn = document.getElementsByClassName('js-fade-in')
			
			for (let i = 0; i < jsFadeIn.length; i++) {
				jsFadeIn[i].style.opacity = 0.1;
				if (jsFadeIn[i].getBoundingClientRect().top < h && jsFadeIn[i].getBoundingClientRect().top > -200) fadeIn(jsFadeIn[i])
			}
		})