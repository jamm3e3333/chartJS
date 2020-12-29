var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'bar',
    data:{
        labels: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        datasets: [{
            label: 'Monthly Sales',
            backgroundColor: 'rgba(0, 196, 207,0.2)',
            borderColor: 'rgb(0, 152, 207)',
            borderWidth: 1,
            borderSkipped: 'bottom',
            hoverBackgroundColor: 'rgba(162, 0, 207,0.4)',
            hoverBorderColor: 'purple',
            hoverBorderWidth: 3,
            pointStyle: 'rect',
            data: [3,4,6,-2,6,2,-9,1,3,-9,2,10]
        },
        {
            label: 'Monthly Price',
            backgroundColor: 'rgba(0, 207, 107,0.2)',
            borderColor: 'rgb(0, 207, 169)',
            borderWidth: 1,
            borderSkipped: 'bottom',
            hoverBackgroundColor: 'rgba(207, 193, 0,0.4)',
            hoverBorderColor: 'orange',
            hoverBorderWidth: 3,
            pointStyle: 'line',
            data: [3,4,6,-2,6,2,-9,1,3,-9,2,10],
            type: 'line'
        }]
    },
    options: {
       legend: {
           labels: {
               usePointStyle: true
           }
       }
    }
})