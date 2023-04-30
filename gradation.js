



$(function() {

    $("#select1").click(function(){
      $("body").css("background","linear-gradient(90deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
      //Write on CSS!
      $(".vertical").css("display", "block");
      $(".horizontal").css("display", "none");
      $(".circle").css("display","none");
      $(".angle3").css("display","none");
      $(".angle6").css("display","none");
      $(".angle18").css("display","none");
      $(".angle21").css("display","none");
      $(".angle24").css("display","none");
      $(".angle27").css("display","none");
      })

      $("#select2").click(function(){
        $("body").css("background","linear-gradient(0deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
        $(".horizontal").css("display", "block");
        $(".vertical").css("display", "none");
        $(".circle").css("display","none");
        $(".angle3").css("display","none");
        $(".angle6").css("display","none");
        $(".angle18").css("display","none");
        $(".angle21").css("display","none");
        $(".angle24").css("display","none");
        $(".angle27").css("display","none");
        })

        $("#select3").click(function(){
          $("body").css("background","radial-gradient(#fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
        $(".circle").css("display","block");
        $(".horizontal").css("display","none");$(".vertical").css("display", "none");
        $(".angle3").css("display","none");
        $(".angle6").css("display","none");
        $(".angle18").css("display","none");
        $(".angle21").css("display","none");
        $(".angle24").css("display","none");
        $(".angle27").css("display","none");
       })


          //VERY IMPORTANT!!!↓↓↓ Not elif
          $('#select4').click(function(){
            		// value値を取得
		        const str1 = $("select#select4").val();
            if (str1 === "red"){
              $("body").css("background","linear-gradient(30deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
              $(".circle").css("display","none");
        $(".horizontal").css("display","none");$(".vertical").css("display", "none");
        $(".angle3").css("display","block");
        $(".angle6").css("display","none");
        $(".angle18").css("display","none");
        $(".angle21").css("display","none");
        $(".angle24").css("display","none");
        $(".angle27").css("display","none");
            }
              else if (str1 === "orange"){
                $("body").css("background","linear-gradient(60deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
                $(".circle").css("display","none");
                $(".horizontal").css("display","none");$(".vertical").css("display", "none");
                $(".angle3").css("display","none");
                $(".angle6").css("display","block");
                $(".angle18").css("display","none");
                $(".angle21").css("display","none");
                $(".angle24").css("display","none");
                $(".angle27").css("display","none");}
                else if (str1 === "green"){
                  $("body").css("background","linear-gradient(180deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
                  $(".circle").css("display","none");
                  $(".horizontal").css("display","none");$(".vertical").css("display", "none");
                  $(".angle3").css("display","none");
                  $(".angle6").css("display","none");
                  $(".angle18").css("display","block");
                  $(".angle21").css("display","none");
                  $(".angle24").css("display","none");
                  $(".angle27").css("display","none");}
                  else if (str1 === "water"){
                    $("body").css("background","linear-gradient(210deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
                    $(".circle").css("display","none");
                    $(".horizontal").css("display","none");$(".vertical").css("display", "none");
                    $(".angle3").css("display","none");
                    $(".angle6").css("display","none");
                    $(".angle18").css("display","none");
                    $(".angle21").css("display","block");
                    $(".angle24").css("display","none");
                    $(".angle27").css("display","none");}
                    else if (str1 === "blue"){
                      $("body").css("background","linear-gradient(240deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
                      $(".circle").css("display","none");
                      $(".horizontal").css("display","none");$(".vertical").css("display", "none");
                      $(".angle3").css("display","none");
                      $(".angle6").css("display","none");
                      $(".angle18").css("display","none");
                      $(".angle21").css("display","none");
                      $(".angle24").css("display","block");
                      $(".angle27").css("display","none");}
                      else if (str1 === "purple"){
                        $("body").css("background","linear-gradient(270deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");
                        $(".circle").css("display","none");
                        $(".horizontal").css("display","none");$(".vertical").css("display", "none");
                        $(".angle3").css("display","none");
                        $(".angle6").css("display","none");
                        $(".angle18").css("display","none");
                        $(".angle21").css("display","none");
                        $(".angle24").css("display","none");
                        $(".angle27").css("display","block");}


          })

        });
         /*Below this is a failure example */
        /*    $(".r").click(function(){
              $("body").css("background","linear-gradient(60deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)")})

              $(".aa").click(function(){
                $("body").css("background","linear-gradient(180deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)")})

                $(".t").click(function(){
                  $("body").css("background","linear-gradient(210deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)")})

                  $(".i").click(function(){
                    $("body").css("background","linear-gradient(240deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)")})

                   $(".o").click(function(){
                      $("body").css("background","linear-gradient(270deg, #fcb045, #FF8C00 30%, #fd1d1d 60%, #833ab4)");*/
/*""←Don't forget! */
