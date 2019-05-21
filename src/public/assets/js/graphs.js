const cont1 = document.getElementById('cont1').textContent
const cont2 = document.getElementById('cont2').textContent
const cont3 = document.getElementById('cont3').textContent
const cont4 = document.getElementById('cont4').textContent
const cont5 = document.getElementById('cont5').textContent

const array = [cont1, cont2, cont3, cont4]

var config = {
    type: 'pie',
    data: {
        datasets: [{
            data: array,
            backgroundColor: [
                '#ff7777',
                '#e8e8e8',
                '#f9fa9b',
                '#a8e6cf'
            ],
            label: 'Dataset 1'
        }],
        labels: [
            'Rotas',
            'Sin iniciar',
            'En proceso',
            'Cumplidas'    
        ]
    },
    options: {
        responsive: true
    }
};

window.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    window.myPie = new Chart(ctx, config);
};
