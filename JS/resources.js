var room120 = JSON.parse(localStorage.getItem(120));
var room130 = JSON.parse(localStorage.getItem(130));
var room140 = JSON.parse(localStorage.getItem(140));
var room150 = JSON.parse(localStorage.getItem(150));
var printer1 = JSON.parse(localStorage.getItem(1));
var printer2 = JSON.parse(localStorage.getItem(2));

if (room120.available == 1 || room120 == null)
    document.getElementById('120').style.background = '#33FF00';
else
    document.getElementById('120').style.background = 'red';

if (room130.available == 1 || room130 == null)
    document.getElementById('130').style.background = '#33FF00';
else
    document.getElementById('130').style.background = 'red';

if (room140.available == 1 || room140 == null)
    document.getElementById('140').style.background = '#33FF00';
else
    document.getElementById('140').style.background = 'red';

if (room150.available == 1 || room150 == null)
    document.getElementById('150').style.background = '#33FF00';
else
    document.getElementById('150').style.background = 'red';

if (printer1.available == 1 || printer1 == null)
    document.getElementById('1').style.background = '#33FF00';
else
    document.getElementById('1').style.background = 'red';

if (printer2.available == 1 || printer2 == null)
    document.getElementById('2').style.background = '#33FF00';
else
    document.getElementById('2').style.background = 'red';







