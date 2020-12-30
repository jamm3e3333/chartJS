var image = document.getElementById('source');
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
        {
            label: 'My profits',
            backgroundColor: 'rgba(0, 212, 183,0.5)',
            data: [-2, 3, 7, 2, 0, -10]            
        },
        {
            label: 'My sales',
            backgroundColor: 'rgba(247, 94, 109,0.5)',
            data: [4, -16, 4, -2, 6, 3]
        }
    ]},
    // Configuration options go here
    options: {
        scales: {
            yAxes: [{
                stacked: true
            }]
        },
        tooltips: {
            enabled: true,
            mode: 'index', //'dataset','nearest' - default
            intersect: false,
            position: 'nearest', //average by default
            backgroundColor: 'rgba(255,255,255,0.5)',
            titleFontFamily: 'helvetica',
            titleFontSize: 20,
            titleFontStyle: 'normal',
            titleFontColor: 'black',
            bodyFontColor: 'black'

        }
    }
});