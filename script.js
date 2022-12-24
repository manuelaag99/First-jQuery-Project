
var extraText = "<button>Click here!</button>";



$(document).keypress(function() {
    //must check the status of the "event" property 
    var press = event.key;

    switch (press) {
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
            
        default: 
        console.log(press);
            break;
    }


})
