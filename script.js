$(document).ready(function(){

   var formula = [];
   var temp = []
   var num = 0;
   var result;
   var total;
   var summed = false;

   $("#zero").on("click" , function(){
      if (summed === true) {
         temp = [];
         summed = false;
      };
      if (temp.length < 9) {
         if (num !== 0) {
            temp.push('0');
            num = temp.join('');
         } else {
            temp = [0];
         }};
         $("#display").html(num);
      });

      $("#one").on("click" , function(){
         if (summed === true) {
            temp = [];
            summed = false;
         };
         if (temp.length < 9) {
            temp.push('1');
            num = temp.join('');}
            $("#display").html(num);
         });

         $("#two").on("click" , function(){
            if (summed === true) {
               temp = [];
               summed = false;
            };
            if (temp.length < 9) {
               temp.push('2');
               num = temp.join('');}
               $("#display").html(num);
            });

            $("#three").on("click" , function(){
               if (summed === true) {
                  temp = [];
                  summed = false;
               };
               if (temp.length < 9) {
                  temp.push('3');
                  num = temp.join('');}
                  $("#display").html(num);
               });

               $("#four").on("click" , function(){
                  if (summed === true) {
                     temp = [];
                     summed = false;
                  };
                  if (temp.length < 9) {
                     temp.push('4');
                     num = temp.join('');}
                     $("#display").html(num);
                  });

                  $("#five").on("click" , function(){
                     if (summed === true) {
                        temp = [];
                        summed = false;
                     };
                     if (temp.length < 9) {
                        temp.push('5');
                        num = temp.join('');}
                        $("#display").html(num);
                     });

                     $("#six").on("click" , function(){
                        if (summed === true) {
                           temp = [];
                           summed = false;
                        };
                        if (temp.length < 9) {
                           temp.push('6');
                           num = temp.join('');}
                           $("#display").html(num);
                        });

                        $("#seven").on("click" , function(){
                           if (summed === true) {
                              temp = [];
                              summed = false;
                           };
                           if (temp.length < 9) {
                              temp.push('7');
                              num = temp.join('');}
                              $("#display").html(num);
                           });

                           $("#eight").on("click" , function(){
                              if (summed === true) {
                                 temp = [];
                                 summed = false;
                              };
                              if (temp.length < 9) {
                                 temp.push('8');
                                 num = temp.join('');}
                                 $("#display").html(num);
                              });

                              $("#nine").on("click" , function(){
                                 if (summed === true) {
                                    temp = [];
                                    summed = false;
                                 };
                                 if (temp.length < 9) {
                                    temp.push('9');
                                    num = temp.join('');}
                                    $("#display").html(num);
                                 });

                                 $("#point").on("click" , function(){
                                    if (summed === true) {
                                       temp = [];
                                       summed = false;
                                    };
                                    if (num == 0) {
                                       temp=['0.'];
                                    }else{
                                       if (temp.length < 9) {
                                          temp.push('.');}
                                          num = temp.join('');}
                                          $("#display").html(num);
                                       });

                                       $("#clearAll").on("click" , function(){
                                          formula = [];
                                          temp = [];
                                          num=0;
                                          $("#display").html(num);
                                       });

                                       $("#clearEntry").on("click" , function(){
                                          temp = [];
                                          num = 0;
                                          $("#display").html(num);
                                       });

                                       $("#plus").on("click" , function(){
                                          num = temp.join('');
                                          formula.push(num + '+');
                                          $("#display").html("+");
                                          temp = [];
                                       });

                                       $("#minus").on("click" , function(){
                                          num = temp.join('');
                                          formula.push(num + '-');
                                          $("#display").html("-");
                                          temp = [];
                                       });

                                       $("#multiply").on("click" , function(){
                                          num = temp.join('');
                                          formula.push(num + '*');
                                          $("#display").html("*");
                                          temp = [];
                                       });

                                       $("#divide").on("click" , function(){
                                          num = temp.join('');
                                          formula.push(num + '/');
                                          $("#display").html("/");
                                          temp = [];
                                       });

                                       $("#equals").on("click" , function(){
                                          num = temp.join('');
                                          formula.push(num);
                                          result = formula.join('');
                                          total = Math.round(eval(result) * 1000000000000) / 1000000000000;
                                          total = total.toString();
                                          if (total.length > 9) {
                                             $("#display").html("ERROR");
                                          } else {
                                          $("#display").html(total);}
                                          num = 0;
                                          formula = [];
                                          temp = [total];
                                          summed = true;
                                          console.log(total.length);
                                       })
                                       $("#display").html(num);
                                    });
