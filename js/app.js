$(document).ready(function () {
    $('#content').load('pages/homePage.html');

    $('.menu').click(function (e) { 
        e.preventDefault();
                
        var menu = $(this).attr('id');

        if(menu == "home"){
            $('#content').load('pages/homePage.html');
        } else if(menu == "member") {
            $('#content').load('pages/member.html');
        } else if (menu == "reactJS") {
            $('#content').load('pages/App.js');
        } else if (menu == "jqueryJS") {
            $('#content').load('pages/jquery.html');
        } else if (menu == "chartsJS") {
            $('#content').load('pages/charts.html', function() {
                $.getScript("https://cdn.jsdelivr.net/npm/chart.js", function() {
                    // Inisialisasi chart setelah halaman dimuat
                    const ctx = document.getElementById('myChart').getContext('2d');
                    const myChart = new Chart(ctx, {
                        type: 'bar',
                        data: {
                            labels: ['Farhan', 'Rian', 'Andika', 'Dio', 'Adrian', 'Anang'],
                            datasets: [{
                                label: '# Vote Ketua Kelas',
                                data: [1, 19, 9, 5, 7, 4],
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                        },
                        options: {
                            scales: {
                                y: {
                                    beginAtZero: true
                                }
                            },
                            plugins: {
                                legend: {
                                    labels: {
                                        color: 'rgba(0, 0, 0, 0.7)',
                                        font: {
                                            size: 14
                                        }
                                    }
                                }
                            }
                        }
                    });
                });
            });
        }
    });
});
