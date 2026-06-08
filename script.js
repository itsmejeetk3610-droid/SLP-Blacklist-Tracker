fetch("employees.csv")
.then(response => response.text())
.then(data => {

    let rows = data.split("\n");

    let total = 0;
    let warned = 0;
    let blacklisted = 0;
    let terminated = 0;

    rows.slice(1).forEach(row => {

        if(row.trim() === "") return;

        total++;

        let cols = row.split(",");

        let status = cols[10] ? cols[10].trim().toUpperCase() : "";

        if(status.includes("WARN")){
            warned++;
        }

        if(status.includes("BLACKLIST")){
            blacklisted++;
        }

        if(status.includes("TERMINATED")){
            terminated++;
        }

    });

    document.getElementById("totalEmployees").innerText = total;
    document.getElementById("warnedCount").innerText = warned;
    document.getElementById("blacklistedCount").innerText = blacklisted;
    document.getElementById("terminatedCount").innerText = terminated;

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

    new Chart(document.getElementById('barChart'), {
        type:'bar',
        data:{
            labels:['Warned','Blacklisted','Terminated'],
            datasets:[{
                label:'Cases',
                data:[warned, blacklisted, terminated]
            }]
        }
    });

    new Chart(document.getElementById('lineChart'), {
        type:'line',
        data:{
            labels:['Total','Warned','Blacklisted','Terminated'],
            datasets:[{
                label:'Employees',
                data:[total, warned, blacklisted, terminated],
                borderColor:'#2563eb',
                tension:0.4
            }]
        }
    });

})
.catch(error => console.log(error));
