$(document).ready(function() {
    $("#corporate").click(function() {
        if (document.getElementById("box2").style.display !== "none") {
            document.getElementById("box2").style.display = "none";
            $("#box1").slideToggle("slow");
        } else {
            $("#box1").slideToggle("slow");
        }
    })
    $("#world").click(function() {
        if (document.getElementById("box1").style.display !== "none") {
            document.getElementById("box1").style.display = "none";
            $("#box2").slideToggle("slow");
        } else {
            $("#box2").slideToggle("slow");
        }
    })
})