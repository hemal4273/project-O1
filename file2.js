$(window).on("scroll", function(){
    if($(window).scrollTop()){
        $("#content").addClass("new");

    }
    else{
        $("#content").removeClass("new");
    }
})
console.log("harsh");