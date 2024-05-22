function changeTemp(increment) {
    var temp = parseInt(document.getElementById('temp').innerHTML);

    if(increment > 0 && temp < 30) {
        document.getElementById('temp').innerHTML = temp + parseInt(increment) + 'º';
    } else if(increment < 0 && temp > 15) {
        document.getElementById('temp').innerHTML = temp + parseInt(increment) + 'º';
    }
}