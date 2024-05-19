async function fetchData() {
    const response = await fetch('../JS/resources.json');

    const data = await response.json();

    data.resources.forEach(element => {
        let id = document.getElementById(element.room);
        let stat = element.available;
        
        if ( stat == 0)
            id.style.background = '#33FF00';
        else 
            id.style.background = 'red';

    });

}

fetchData();



