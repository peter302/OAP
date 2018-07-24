
function upload(){
  var img=document.getElementById('myCanvas');
  var app=document.getElementById('cool');
  var out= new SimpleImage(app);
  out.drawTo(img)};
  $(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var input1=$("#input1").val()
      var input2=$("#input2").val()
      var input3=$("#input3").val()
      var input4=$("#input4").val()
      var input5=$("#now").val()
      $("#t1").text(input1);
      $("#t").text(input2);
      $("#e").text(input3);
      $("#m").text(input4);
      $("#b").text(input5);
      $("#get").text(input4)

    });

});
  });
