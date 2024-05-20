function changeTemp(increment) {
    var temp = parseInt(document.getElementById('temp').innerHTML);

    document.getElementById('temp').innerHTML = temp + parseInt(increment) + 'º';
}