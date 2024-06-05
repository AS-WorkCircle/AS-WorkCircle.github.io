

// Submit file
function submitFile() {
    var submit = document.getElementById('submit');
    var input = document.createElement('input');
    if (localStorage.getItem(localStorage.getItem('loggedUser') + '_fileUploaded')) {
        printFile();
        return;
    }
    input.type = 'file';
    input.onchange = function(event) {
        var file = event.target.files[0];
        var fileName = file.name;
        var fileType = file.type;
        if (fileType.startsWith('image/') || fileType.startsWith('application/pdf')) {
            localStorage.setItem(localStorage.getItem('loggedUser') + '_fileUploaded', fileName);
            document.getElementById('submit').textContent = "Enviar para a impressora";
        } else {
            alert('Invalid file type. Please select an image or a PDF document.');
        }
    }
    input.click();
}

// Send file to printer
function printFile() {
    alert("A imprimir " + localStorage.getItem(localStorage.getItem('loggedUser') + '_fileUploaded'));
    document.getElementById('submit').textContent = "Submeter Outro Ficheiro";
    localStorage.removeItem(localStorage.getItem('loggedUser') + '_fileUploaded');
}