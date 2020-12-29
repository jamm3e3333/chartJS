var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx,{
    type: 'bubble',
    data:{
        labels: ['January','February','March','April','May'],
        datasets: [{
            label: 'bubble chart',
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