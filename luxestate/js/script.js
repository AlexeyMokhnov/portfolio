let stepCard1 = document.getElementById('stepCard1');
let stepLink1 = document.getElementById('stepLink1');

let stepCard2 = document.getElementById('stepCard2');
let stepLink2 = document.getElementById('stepLink2');

let stepCard3 = document.getElementById('stepCard3');
let stepLink3 = document.getElementById('stepLink3');

stepCard1.onmouseover = function() {
    stepLink1.style.borderBottom = "3px solid white";
}

stepCard1.onmouseout = function() {
    stepLink1.style.borderBottom = "3px solid black";
}

stepCard2.onmouseover = function() {
    stepLink2.style.borderBottom = "3px solid white";
}

stepCard2.onmouseout = function() {
    stepLink2.style.borderBottom = "3px solid black";
}

stepCard3.onmouseover = function() {
    stepLink3.style.borderBottom = "3px solid white";
}

stepCard3.onmouseout = function() {
    stepLink3.style.borderBottom = "3px solid black";
}



 $(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("#menuFooter").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
