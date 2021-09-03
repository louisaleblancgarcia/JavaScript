

function buscaUsuario(){
    
    var inputId =  document.getElementById("inputId").value;
    var inputName = document.getElementById("inputName");
    var inputMail = document.getElementById("inputMail");
    fetch(`https://jsonplaceholder.typicode.com/users/${inputId}`)
    .then(response => { 
        if(!response.ok) throw Error(response.status);
        return response.json()
    })
    .then(response => {
        
        inputName.value = response.name;
        inputMail.value = response.email;
         
    })

}

