
function valida() {
    const sucessAlert = getById('success')
    const failedAlert = getById('failed')
    setVisibility(sucessAlert, 0)
    setVisibility(failedAlert, 0)

    const cpf = document.getElementById("cpf").value
    if (cpf.length == 11) {
        setVisibility(sucessAlert, 1)
    }
    else {
        setVisibility(failedAlert, 1)
    }

}

function getById(id) {
    return document.getElementById(id);
}

function setVisibility(element, status) {
    if (status) {
        element.style.display = 'block'
    } else {
        element.style.display = 'none'
    }

}