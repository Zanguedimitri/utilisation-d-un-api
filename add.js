$(document).ready(function(){
    $("#button").click(function(){
     var number=Math.ceil(Math.random()*150)+1;
       $.ajax({
        type:'get',
        url:'https://pokeapi.co/api/v2/pokemon/'+ number,
        success:function(data){
            var name=data.name;
            var type=data.id;
            var img=data.sprites.front_default;
            $("#image").attr('src',img);
            $("#name").html(name);
            $("#number").html(type);
        },
       });
    });
    });