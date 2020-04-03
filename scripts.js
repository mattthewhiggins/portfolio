var test = document.getElementById("count");

document.onscroll = function() {

		scrollTop = document.documentElement.scrollTop;
    test.innerHTML = scrollTop;

    allDivs = document.getElementsByTagName('div');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];

    }
};

// The code below makes the text move and fade on scroll


var topTitle = $('.top-title'),
		bottomTitle = $('.bottom-title');

var moveSpeed = 2; // Higher = slower


$(window).scroll(function(e) {
		var scrollTop = $(window).scrollTop();
		var opacity = 1;
		var topTitlePos = scrollTop / moveSpeed + 'px';
		var bottomTitlePos = scrollTop / moveSpeed + 'px';


		topTitle.css({'transform': 'translateX(' + topTitlePos + ')'});
		bottomTitle.css({'transform': 'translateX(-' + bottomTitlePos + ')'});

});
