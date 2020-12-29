var image = document.getElementById('source');
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'],
        datasets: [
        {
            label: 'My profits',
            backgroundColor: 'rgba(0, 212, 183,0.5)',
            borderColor: 'blue',
            borderWidth: 1.5,
            borderDash: [10],
            borderDashOffset: 10,
            borderCapStyle: 'square',
            borderJoinStyle: 'bevel',
            fill: 'origin',
            pointBorderColor: 'pink',
            pointBorderWidth: 1.5,
            pointRadius: 5, //if it's set to 0, points are not shown
            pointHitRadius: 20,
            pointHoverBackgroundColor: 'lightseagreen',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 25,  
            pointHoverRadius: 5,
            showLine: true,
            spanGaps: true, //if some value is missing it will fill the gap
            //steppedLine: 'middle',
            //pointStyle: image,
            data: [-2, 3, 7, 2, 0, -10, 8,13,2,8,-3,6]
        }
    ]},
    // Configuration options go here
    options: {
        title: {
            display: true,
            text: ['Monthly profits','Made by Jackop'],
            position: 'bottom',
            fontSize: 20,
            fontFamily: 'Helvetica',
            fontColor: 'lightseagreen',
            fontStyle: 'bold',
            padding: 8,
            lineHeight: 1.2
        }
    }
});