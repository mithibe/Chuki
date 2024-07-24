
const data = {
    labels: [
    'Non-hate',
    'Hate'
  ],
  datasets: [{
    label: 'Hate Speech analysis',
    data: [75, 25],
    backgroundColor: [
      '#050',
      '#a00'
    ],
    hoverOffset: 4
  }]
};

const ctx = document.getElementById('myChart');
new Chart(ctx, {
    type: 'doughnut',
    data: data,
});

