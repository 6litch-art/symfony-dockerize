
// custom 'scrolldelta' event extends 'scroll' event
jQuery.event.special.scrolldelta2 = {

    delegateType: "scroll",
    bindType: "scroll",
    handle: function (event) {
        var handleObj  = event.handleObj;
        var targetData = jQuery.data(event.target);

        var ret   = null;
        var elem  = event.target;
        var isDoc = elem === document;
        var oldTop         = targetData.top || 0;
        var oldLeft        = targetData.left || 0;

        targetData.top  = isDoc ? elem.documentElement.scrollTop  + elem.body.scrollTop  : elem.scrollTop;
        targetData.topCounter  = (targetData.top  == 0 ? targetData.topCounter+1  : targetData.topCounter ) || 0;
        targetData.left = isDoc ? elem.documentElement.scrollLeft + elem.body.scrollLeft : elem.scrollLeft;
        targetData.leftCounter = (targetData.left == 0 ? targetData.leftCounter+1 : targetData.leftCounter) || 0;

        event.scrollTop      = targetData.top;
        event.scrollTopDelta = targetData.top - oldTop;
        event.scrollTopCounter = targetData.topCounter || 0;

        event.scrollLeft      = targetData.left;
        event.scrollLeftDelta = targetData.left - oldLeft;
        event.scrollLeftCounter = targetData.leftCounter || 0;

        event.type = handleObj.origType;
        ret = handleObj.handler.apply(this, arguments);
        event.type = handleObj.type;
        return ret;
    }
};

if (localStorage.getItem("app/scroll/toggle") === null)
    localStorage['app/scroll/toggle'] = false ;

function scrollDelta(e)
{
    var scrollTopDelta = e.scrollTopDelta || 0;
   
    var _breakpoint;
        _breakpoint = breakpoint || undefined;
    
    if(_breakpoint === undefined) return;
    if( $("#page").data("layout") == "layout1" ) {

        var aside = $("#page > aside");
        if(aside) {

            if (window.scrollY <= 0) aside.fadeIn().css("display", "flex");
            else aside.fadeOut();
        }

    } else if( $("#page").data("layout") == "layout2" ) {

        switch(_breakpoint) {

            case "tablet":
            case "mobile":

            if (scrollTopDelta > 2 && window.scrollY > 50) {

                $("#page > nav  > hr").addClass("shrink");
                $("#page > nav  > header").addClass("shrink");

                $("#page > main ").addClass("shrink");
                $("#page > header").addClass("shrink");

                localStorage['app/scroll/toggle'] = true;
                dispatchEvent(new Event('app/scroll/shrink'));
            }
        }
    }
}

function showMap(forceShow = false) {

    var exitMap = $("#exitMap");

    var footer  = $("#page");
    if (footer) {
        if (footer.css("display") == "none" || forceShow == true) {

            footer.fadeIn();
            exitMap.css("opacity", 0).fadeOut();
        } else {

            footer.fadeOut();
            exitMap.css("opacity", 1).fadeIn();
        }
    }
}

var resetScrollTopCounter = false;
$(window).on('load', function (e) {

    $(".showMap").off("click.showMap");
    $(".showMap").on("click.showMap", function () { showMap(); });
    
    resetScrollTopCounter = true;
    if(window.scrollY <= 50 || localStorage['app/scroll/toggle']) e.scrollTopDelta = -5;
    else e.scrollTopDelta = 5;

    return scrollDelta(e);
});

$(window).on('scrolldelta2', function (e) {

    if (resetScrollTopCounter) {
        resetScrollTopCounter = false;
        e.scrollTopCounter = 0;
    }

    return scrollDelta(e);
});



/**
 * Handle menu toggler
 */
if (localStorage.getItem("app/menu/toggle") === null) {
    localStorage['app/menu/toggle'] = true;
}

if($("html.menu-open").length) 
    localStorage['app/menu/toggle'] = true;

    __menu__(localStorage.getItem("app/menu/toggle"));
    
$(document).on("click", function(event) { 

    var _toggle = !$("#page > nav").hasClass("shrink");

    var target = $(event.target);
    if(!target.closest('sidebar').length && !target.closest('#toggle').length && _toggle)
        __menu__();
});
    
$(window).on('load.menu', function (e)   {

    $('#toggle').off('click.menu');
    $('#toggle').on('click.menu', function() {
        return __menu__();
    });
    $("#page > nav > sidebar li:not(.dropdown-locale-toggler) a ").off('click.menu');
    $("#page > nav > sidebar li:not(.dropdown-locale-toggler) a ").on('click.menu', function() {
        return __menu__(false);
    });
    $("form").off("submit.menu");
    $("form").on("submit.menu", function() {
        return __menu__(false);
    });
    
    $(".dropdown-locale-toggler").off("click.menu");
    $(".dropdown-locale-toggler").on("click.menu", function() {
        return __menu_locale__();
    });

    $(".dropdown-locale-wrapper .dropdown-item").off("click.menu");
    $(".dropdown-locale-wrapper .dropdown-item").on("click.menu", function() 
    {
        return __menu_locale__(false);
    });

    var toggle = (localStorage['app/menu/toggle'] != "false");
    if(breakpoint == "mobile" || breakpoint == "tablet") return __menu__(toggle);
});

function __menu_locale__(_toggle = null) {

    if (_toggle === null)
        _toggle = $(".dropdown-locale-wrapper").hasClass("shrink");

    if(_toggle) $(".dropdown-locale-wrapper").removeClass("shrink");
    else $(".dropdown-locale-wrapper").addClass("shrink");
}

function __menu__(_toggle = null) {

    if (_toggle === null)
        _toggle = $("#page > nav").hasClass("shrink");

    if( $("#page").data("layout") != "layout1" ) return;
    if( breakpoint == "laptop" ||  breakpoint == "desktop") return;

    localStorage['app/menu/toggle'] = _toggle;
    if(_toggle) {
        
        $("#page > nav").removeClass("shrink");
        $("#page > nav main").removeClass("shrink");
        $("#page > nav header").removeClass("shrink");
        $("#page > nav sidebar").removeClass("shrink");
        $("#page > nav sidebar>header").removeClass("shrink");
        $("#page > nav sidebar>ul").fadeIn();
        $("#page > aside").addClass("shrink");
        $("#page > header").addClass("shrink");
        $("#page > main").addClass("shrink");

    } else {

        $("#page > nav").addClass("shrink");
        $("#page > nav main").addClass("shrink");
        $("#page > nav header").addClass("shrink");
        $("#page > nav sidebar").addClass("shrink");
        $("#page > nav sidebar>header").addClass("shrink");
        $("#page > nav sidebar>ul").fadeOut();
        $("#page > aside").removeClass("shrink");
        $("#page > header").removeClass("shrink");
        $("#page > main").removeClass("shrink");
    }

    dispatchEvent(new Event('app/menu/toggle'));
}

$(window).on('load', function (e) {

    $(window).off("scroll.dock");
    $(window).on("scroll.dock", function() {

    var dock = $(".dock");
    if(dock) {
        if (window.scrollY <= 0) $(dock).removeClass('visible');
        else $(dock).addClass('visible');
    }

    });

    $(".dock").off("mouseover");
    $(".dock").on("mouseover",'.item', function(){

        if( breakpoint != "laptop" &&  breakpoint != "desktop") return;
        $(this).closest('.item').addClass('item-bigger');
        $(this).next('.item').addClass('item-medium');
        $(this).next('.item').next('.item').addClass('item-smaller');
        $(this).prev('.item').addClass('item-medium');
        $(this).prev('.item').prev('.item').addClass('item-smaller');

    });

    $(".dock").off("mouseout");
    $(".dock").on("mouseout",'.item',function(){

        if( breakpoint != "laptop" &&  breakpoint != "desktop") return;
        $(this).closest('.item').removeClass('item-bigger');
        $(this).next('.item').removeClass('item-medium');
        $(this).next('.item').next('.item').removeClass('item-smaller');
        $(this).prev('.item').removeClass('item-medium');
        $(this).prev('.item').prev('.item').removeClass('item-smaller');

    });
});