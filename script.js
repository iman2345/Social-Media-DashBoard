
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
const usersCtx = document.getElementById('usersChart').getContext('2d');
const usersCtx1 = document.getElementById('usersChart1').getContext('2d');



new Chart(revenueCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Followers',
      data: [3000,3200,3500,3600,4200, 5300],
      borderColor: '#3498db',
      backgroundColor: 'rgba(52, 152, 219, 0.2)',
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});


new Chart(usersCtx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'New Users',
      data: [50, 75, 60, 90, 100, 120],
      backgroundColor: '#2ecc71'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});

new Chart (usersCtx1, {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'New Users',
      data: [50, 75, 60, 90, 100, 120],
      backgroundColor: '#2ecc71'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});


