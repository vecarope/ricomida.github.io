$(function() {

    $("#enviarcorreo").click(function() {
        event.preventDefault();
        $('#send_success').modal('show');
        $("h1").css({
            fontSize: "50px",
        })

    });

    $("#boton2").click(function() {
        $("h1").css({
            fontSize: "32px",
        });

        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        });

    });

});