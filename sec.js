var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['IPhone 14', 'IPhone 12', 'IPhone 13', 'IPhone X'],

        datasets: [{
            label: 'Employees',
            data: [42, 12, 8, 6],
            backgroundColor: [
                '#386641',
                '#6a994e',
                '#a7c957',
                '#f2e8cf'

            ],
            borderColor: [
                '#274c77',
                '#6096ba',
                '#a3cef1',
                '#e7ecef'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});
