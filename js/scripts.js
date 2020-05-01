console.log("JavaScript carregado")

function valida() {
    const cpf = document.getElementById("cpf").value
    console.log(`CPF: ${cpf}`)
    if(cpf.length==11) { 
        document.getElementById('success').style.display = 'block';
    }

}


