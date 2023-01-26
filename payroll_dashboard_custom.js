<script>

    const config = {
        type: 'bar',
        data: {
            labels: [
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange',
                'Red',
                'Blue',
                'Yellow',
                'Green',
                'Purple',
                'Orange'
            ],
            datasets: [{
                label: 'Hours',
                data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
                borderWidth: 1,
                backgroundColor: [
                    "#f44336",
                    "#9c27b0",
                    "#e91e63",
                    "#2196f3",
                    "#ffeb3b",
                    "#03a9f4",
                    "#673ab7",
                    "#00bcd4",
                    "#ff9800",
                    "#4caf50",
                    "#795548",
                ]
            }],

        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            elements: {
                bar: {
                    borderWidth: 2,
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                },
                title: {
                    display: true,
                    text: 'Hours'
                }
            }
        },
    };

    const ctx = document.getElementById('myChart');

    new Chart(ctx, config);
</script>