jQuery(document).ready(function($) {
    $('#prepend-form').on('submit', function(e) {
        e.preventDefault();

        var text = document.getElementById("prepend-text").value;     
        if (text == "") {
            alert("Invalid Input");
            return false;
        }

        $("#tasks").prepend(text);
    });
})