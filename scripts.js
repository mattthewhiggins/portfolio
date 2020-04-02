var test = document.getElementById("count");

document.onscroll = function() {

		scrollTop = document.documentElement.scrollTop;
    test.innerHTML = scrollTop;

    allDivs = document.getElementsByTagName('div');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];


        // The code below makes the background color change when the scroll top passes the 2/3 of the previous div.

        // heightBefore = 0;
        // if (i > 0){
        // 		heightBefore = allDivs[i-1].offsetHeight / 3;
        // }
				//
        // if (scrollTop > curDiv.offsetTop - heightBefore){
        // 		color = curDiv.getAttribute("data-color");
        //   	document.body.style.background = color;
        // }

    }
};

// The code below makes the text move and fade on scroll


var topTitle = $('.top-title'),
		bottomTitle = $('.bottom-title');

var fadeStart = 10,
		fadeUntil = 10000,
		moveSpeed = 2; // Higher = slower


$(window).scroll(function(e) {
		var scrollTop = $(window).scrollTop();
		var opacity = 1;
		var topTitlePos = scrollTop / moveSpeed + 'px';
		var bottomTitlePos = scrollTop / moveSpeed + 'px';

		if (scrollTop <= fadeStart ) {
				opacity = 1;
		} else if ( scrollTop <= fadeUntil ) {
				opacity = 1 - scrollTop / fadeUntil;
		}

		topTitle.css({'transform': 'translateX(' + topTitlePos + ')', 'opacity': opacity});
		bottomTitle.css({'transform': 'translateX(-' + bottomTitlePos + ')', 'opacity': opacity});

});
