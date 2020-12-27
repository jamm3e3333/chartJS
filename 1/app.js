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
            cubicInterpolationMode: 'default',
            fill: 'origin',
            lineTension: 0.4,
            pointBackgroundColor: ['brown','pink','green','silver','yellow','yellow','yellow',
            'yellow','yellow','yellow','yellow','yellow'],
            pointBorderColor: 'pink',
            pointBorderWidth: 1.5,
            pointRadius: 5, //if it's set to 0, points are not shown
            pointStyle: 'circle',
            pointHitRadius: 20,
            pointHoverBackgroundColor: 'lightseagreen',
            pointHoverBorderColor: 'yellow',
            pointHoverBorderWidth: 25,  
            pointHoverRadius: 5,
            showLine: true,
            spanGaps: true, //if some value is missing it will fill the gap
            //steppedLine: 'middle',
            //pointStyle: image,
            data: [-2, 3, 7, 2, 0, -10, 8,,2,8,-3,6]
        },
        {
            label: 'My profits',
            backgroundColor: 'rgba(180, 115, 255,0.5)',
            borderColor: 'yellow',
            borderWidth: 1.5,
            fill: 'origin',
            lineTension: 0.4,
            data: [-2, 3, 7, 2, 0, -10, 8,13,2,8,-3,6]
        }
    ]},
    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        }
    }
});