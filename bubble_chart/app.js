var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'bubble',
    data:{
        datasets: [{
            label: 'bubble chart',
            backgroundColor: ['rgba(164, 66, 245,0.4)','rgba(66, 138, 245,0.4)','rgba(66, 245, 182,0.4)',
                                'rgba(209, 245, 66,0.4)','rgba(245, 72, 66,0.4)'],
            borderColor: 'silver',
            borderWidth: 2.5,
            hoverBackgroundColor: 'rgba(245, 66, 66,0.2)',
            hoverBorderColor: 'red',
            hoverBorderWidth: 3,
            hoverRadius: 5,
            hitRadius: 10,
            pointStyle: 'rectRot',
            data: [
                {
                    x:0,y:5,r:14
                },
                {
                    x:2,y:10,r:20
                },
                {
                    x:4,y:3,r:30
                },
                {
                    x:6,y:20,r:15
                },
                {
                    x:8,y:12,r:50
                }
            ]
        }]
    },
    options: {
        
    }
})