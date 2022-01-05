
const designIcon = document.querySelector(".iconDesign")
const developmentIcon = document.querySelector(".devIcon")
const projectIcon = document.querySelector("projIcon")


$(document).ready(function(){
    $(".design").click( function(){
        $(".description").toggle();
        designIcon.style.display="none"
    },

    )
})

$(document).ready(function(){
    $(".development").click( function(){
        $(".dev").toggle();
        designIcon.style.display="none"
    },

    )
})

$(document).ready(function(){
    $(".management").click( function(){
        $(".project").toggle();
        designIcon.style.display="none"
    },

    )
})

