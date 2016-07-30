$(function() {
    $("#getJoke").click(
        function() {
            $.get("/jokes",function(data){
                // TODO: change HTML instead of alert
                $("#setup").html(data.setup);    
                $("#punchline").html(data.punchline);
            },"json")
        }
    );
});