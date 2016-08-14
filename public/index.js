textbool = true;

$(function() {
    $(".blue").click(
        function() {
            $.get("/jokes",function(data){
                // TODO: change HTML instead of alert
                $("#setup").html(data.setup);
                $("#punchline").html(data.punchline);
            },"json")
        }
    );
});

$(function() {
    $("#clicktoShow").click(
      function toggleClass() {
        if (textbool) {
          textbool = false;
          $(this).html("Click to show punchline!");
          // $(this).addClass("spanSub");
          $(this).css({
            "font-family": "Roboto",
            "color": "white"
          });
        }
        else {
          textbool = true;
          $(this).html("Click to hide punchline!");
          // $(this).addClass("spanSub");
          $(this).css({
            "font-family": "Roboto",
            "color": "white"
          });
        }

        document.getElementById("reveal").classList.toggle("on");
        document.getElementById("reveal").classList.toggle("off");
        }
    );
});
