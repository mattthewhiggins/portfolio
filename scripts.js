var test = document.getElementById("test");

document.onscroll = function() {

		scrollTop = document.documentElement.scrollTop;
    test.innerHTML = scrollTop;

    allDivs = document.getElementsByTagName('div');

    for( i=0; i< allDivs.length; i++ )
    {
    		curDiv = allDivs[i];


        // The code below makes the background color change when the scroll top passes the 2/3 of the previous div.

        heightBefore = 0;
        if (i > 0){
        		heightBefore = allDivs[i-1].offsetHeight / 2;
        }

        if (scrollTop > curDiv.offsetTop - heightBefore){
        		color = curDiv.getAttribute("data-color");
          	document.body.style.background = color;
        }

    }
};
