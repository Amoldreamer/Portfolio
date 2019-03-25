$(document).ready(function(){
    var page_url = $(location).attr("href");
    var page_id = page_url.substring(page_url.lastIndexOf("#")+1);
    
    if(page_id == "about"){
        $("html, body").animate({
            scrollTop: $('#scroll-' + page_id).offset().top
        }, 1000);
    }
    else if(page_id == "services"){
        $("html, body").animate({
            scrollTop: $('#scroll-' + page_id).offset().top
        }, 1000);
    } else if (page_id == "portfolio"){
        $("html, body").animate({
            scrollTop: $('#scroll-' + page_id).offset().top - 20
        }, 1000);
    }
    else if (page_id == "contact"){
        $("html, body").animate({
            scrollTop: $('#scroll-' + page_id).offset().top - 20
        }, 1000);
    }

});