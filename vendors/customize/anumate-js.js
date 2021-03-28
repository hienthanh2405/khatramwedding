		// Set the date we're counting down to
		var countDownDate = new Date("May 14, 2021 18:00:00").getTime();
		
		// Update the count down every 1 second
		var x = setInterval(function() {
		
		  // Get today's date and time
		  var now = new Date().getTime();
			
		  // Find the distance between now and the count down date
		  var distance = countDownDate - now;
			
		  // Time calculations for days, hours, minutes and seconds
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			
		  // Output the result in an element with id="demo"
		  document.querySelectorAll('.timer__number')[0].innerHTML = days;
		  document.querySelectorAll('.timer__number')[1].innerHTML = hours;
		  document.querySelectorAll('.timer__number')[2].innerHTML = minutes;
		  document.querySelectorAll('.timer__number')[3].innerHTML = seconds;
			
		  // If the count down is over, write some text 
		  if (distance < 0) {
			clearInterval(x);
			document.querySelectorAll('.timer__number')[0].innerHTML = "0";
			document.querySelectorAll('.timer__number')[1].innerHTML = "0";
			document.querySelectorAll('.timer__number')[2].innerHTML = "0";
			document.querySelectorAll('.timer__number')[3].innerHTML = "0";
			document.querySelector('h5').innerHTML = "Happy Wedding"
		  }
		}, 1000);


		/*==================== SHOW SCROLL TOP ====================*/ 
		function scrollTop(){
			const scrollTop = document.getElementById('scroll-top');
			// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
			if(this.scrollY >= 400) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
		}
		window.addEventListener('scroll', scrollTop)

		/*==================== SCROLL REVEAL ANIMATION ====================*/
		const sr = ScrollReveal({
			origin: 'top',
			distance: '60px',
			duration: 3000,
			reset: true
		});

		sr.reveal(`.imageleft, .imageright`, {
    		interval: 300
		})

		new WOW().init();