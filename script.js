fetch("employees.csv")
.then(response => response.text())
.then(data => {

    let rows = data.split("\n");

    let total = 0;
    let blacklisted = 0;
    let warned = 0;
    let terminated = 0;

    rows.slice(1).forEach(row => {

        if(row.trim() === "") return;

        total++;

        let cols = row.split(",");

        let status = cols[5] ? cols[5].trim().toUpperCase() : "";

        if(status === "BLACKLISTED"){
            blacklisted++;
        }

        if(status === "WARNED"){
            warned++;
        }

        if(status === "TERMINATED"){
            terminated++;
        }

    });

    // Dashboard Cards
    document.getElementById("totalEmployees").innerText = total;
    document.getElementById("blacklistedCount").innerText = blacklisted;
    document.getElementById("terminatedCount").innerText = terminated;
    document.getElementById("warnedCount").innerText = warned;

    // Pie Chart
    new Chart(document.getElementById('pieChart'), {
        type:'pie',
        data:{
            labels:['Warned','Blacklisted','Terminated'],
            datasets:[{
                data:[warned, blacklisted, terminated],
                backgroundColor:['#3498db','#ff6384','#f39c12']
            }]
        }
    });

    // Bar Chart
    new Chart(document.getElementById('barChart'), {
        type:'bar',
        data:{
            labels:['Warned','Blacklisted','Terminated'],
            datasets:[{
                label:'Cases',
                data:[warned, blacklisted, terminated],
                backgroundColor:[
                    '#3498db',
                    '#ff6384',
                    '#f39c12'
                ]
            }]
        }
    });

    // Line Chart
    new Chart(document.getElementById('lineChart'), {
        type:'line',
        data:{
            labels:['Total','Warned','Blacklisted','Terminated'],
            datasets:[{
                label:'Employees',
                data:[total, warned, blacklisted, terminated],
                borderColor:'#2563eb',
                fill:false,
                tension:0.3
            }]
        }
    });

})
.catch(error => {
    console.log("CSV Error:", error);
});
