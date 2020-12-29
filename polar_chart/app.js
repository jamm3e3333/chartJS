var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'polarArea',
    data:{
        labels: ['January','February','March','April','May'],
        datasets: [{
            backgroundColor: ['rgba(66, 135, 245,0.4)','rgba(66, 245, 197,0.4)','rgba(170, 245, 66,0.4)',
                                'rgba(245, 239, 66,0.4)','rgba(245, 72, 66,0.4)'],
            borderColor: 'white',
            borderWidth: 3,
            hoverBackgroundColor: 'grey',
            hoverBorderColor: 'white',
            hoverBorderWidth: 1,
            data: [23,90,62,32,15]
        }]
    },
    options: {
        startAngle: -0.5*Math.PI,
        animation: {
            animateRotate: true,
            animateScale: false
        }
    }
})