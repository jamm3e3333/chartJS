var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'doughnut',
    data: {
        labels: ['January','February','March','April'],
        datasets: [{
            label: 'Donut Chart',
            backgroundColor: ['pink','yellow','#61c8ff','lightblue'],
            borderAlign: 'innner',
            borderColor: 'white',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(97, 255, 121,0.4)',
            hoverBorderColor: 'rgba(97, 255, 194)',
            hoverBorderWidth: 4,
            data: [20,20,15,45]
        },
        {
            label: 'Donut Chart',
            backgroundColor: ['pink','yellow','#61c8ff','lightblue'],
            borderAlign: 'innner',
            borderColor: 'white',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(97, 255, 121,0.4)',
            hoverBorderColor: 'rgba(97, 255, 194)',
            hoverBorderWidth: 4,
            data: [9,30,89,39]
        },
        {
            label: 'Donut Chart',
            backgroundColor: ['pink','yellow','#61c8ff','lightblue'],
            borderAlign: 'innner',
            borderColor: 'white',
            borderWidth: 4,
            hoverBackgroundColor: 'rgba(97, 255, 121,0.4)',
            hoverBorderColor: 'rgba(97, 255, 194)',
            hoverBorderWidth: 4,
            data: [19,23,45,94]
        }]
    },
    options: {
        cutoutPercentage: 30,
        rotation: -0.25*Math.PI,
        circumference: 2*Math.PI,
        animation: {
            animateRotate: true,
            animateScale: true
        }
    }
})