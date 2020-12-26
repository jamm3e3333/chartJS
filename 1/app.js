var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','December'],
        datasets: [
        {
            label: 'My profits',
            backgroundColor: 'rgba(0, 212, 183,0.1)',
            borderColor: 'blue',
            borderWidth: 2.5,
            borderDash: [10],
            borderDashOffset: 10,
            borderCapStyle: 'square',
            borderJoinStyle: 'bevel',
            cubicInterpolationMode: 'default',
            data: [-2, 3, 7, 2, 0, -10, 8,13,2,8,-3,6,8]
        }
    ]},
    // Configuration options go here
    options: {}
});