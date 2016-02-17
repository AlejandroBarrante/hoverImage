(function ($) {

    //THIS IS THE NAME OF THE FUNCTION THAT WILL BE CALLED IN THE HTML

    $.fn.hoverImage = function () {

        //FUNCTION WHEN YOU ENTER THE MOUSE INTO THE ELEMENT WHERE YOU WANT TO TRIGGER THE EVENT. 
        //
        //If you changed the class in the HTML, change the name in the next line.
        $(".composition").mouseenter(function () {
            //With the use of AddClass, we can create animations and modifications on CSS in a generic way
            $(this).addClass("hovered");
            $(".hovered .image").addClass("imagehover");
            $(".hovered .text").addClass("texthover");
            //Here we animate the text in order to elevate it from below the picture
            $(".hovered .text").animate({"bottom": '+20%'});

        });

        //FUNCTION WHEN YOU LEAVE THE MOUSE FROM THE ELEMENT WHERE YOU WANT TO TRIGGER THE EVENT
        //
        //If you changed the class in the HTML, change the name in the next line.
        $(".composition").mouseleave(function () {

            //Here we remove all the classes and animate the text again to its original place.
            $(this).removeClass("hovered");
            $(".image").removeClass("imagehover");
            $(".text").removeClass("texthover");
            $(".text").animate({"bottom": '-20%'});

        });

        //FUNCTION WHEN YOU CLICK INTO THE ELEMENT WHERE YOU WANT TO TRIGGER THE EVENT
        //
        //If you changed the class in the HTML, change the name in the next line.
        $(".composition").click(function () {

            $(this).addClass("hovered");
            //Here we set the width and height of the picture to 0 with an animation.
            $(".hovered .image").animate({"width": "0px", "height": "0px"});
            $(".hovered .text").animate({"width": "0px", "height": "0px"}, function () {
                //With a Callback we can unbind the events previously triggered.
                $(".composition").unbind("mouseleave");
                $(".composition").unbind("mouseenter");

            });

        });

    };

})(jQuery);
