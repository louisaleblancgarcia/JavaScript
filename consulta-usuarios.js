
$("#btnIngresar").on("click", function(){

    //alert("Hola");
    var Id = $("#inputId").val();
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/users/${Id}`,
        contentType: "application/json",
        dataType: 'json',
        type: 'get',
       // data: '{id: "'+$("#inputId").val()+'"}',
        success: function(result){

            $("#inputName").val(result.name);
            $("#inputMail").val(result.email);
           
            //console.log(result.name);
        },
        error: function(result){
            console.log("La llamada no se pudo completar");
        }
    });
    

});