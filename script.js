
var extraText = "<button>Click here!</button>";

//this section assigns letter values to each box 
$("#after").click(function() {
    var click = "a";
    buttonsAction(click);
})

$("#before").click(function() {
    var click = "s";
    buttonsAction(click);
})

$("#append").click(function() {
    var click = "d";
    buttonsAction(click);
})

$("#prepend").click(function() {
    var click = "f";
    buttonsAction(click);
})

$("#return").click(function() {
    var click = "r";
    buttonsAction(click);
})


//this section 
$(document).keypress(function() {
    var press = event.key;
    buttonsAction(press);
})

function buttonsAction(input) {
    switch (input) {
        case "a":
            $("h4").text("<h2>Sample text</h2>" + extraText); //"after"
            $("h2").html("<h2>Sample text</h2>" + extraText); //"after"            
            break;
            
        case "s":
            $("h4").text(extraText + "<h2>Sample text</h2>"); //"before"
            $("h2").html(extraText + "<h2>Sample text</h2>"); //"before"
            break;
    
        case "d":
            $("h4").text("<h2>Sample text" + extraText + "</h2>"); //"append"
            $("h2").html("<h2>Sample text" + extraText + "</h2>"); //"append"
            break;
                
        case "f":
            $("h4").text("<h2>" + extraText + "Sample text</h2>"); //"prepend"
            $("h2").html("<h2>" + extraText + "Sample text</h2>"); //"prepend"
            break;
        
        case "r":
            $("h4").text("Sample text"); 
            $("h2").html("Sample text"); 
            break;
            
        default: 
        console.log(input);
            break;
    }
}

function clickAction()