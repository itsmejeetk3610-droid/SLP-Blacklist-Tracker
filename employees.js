fetch("employees.csv")
.then(response => response.text())
.then(data => {

    let rows = data.split("\n");

    let tableBody = document.getElementById("employeeTable");

    let totalRecords = 0;

    rows.slice(1).forEach(row => {

        if(row.trim() === "") return;

        let cols = row.split(",");

        totalRecords++;

        tableBody.innerHTML += `
        <tr>
            <td>${cols[1] || ""}</td>
            <td>${cols[2] || ""}</td>
            <td>${cols[3] || ""}</td>
            <td>${cols[4] || ""}</td>
            <td>${cols[8] || ""}</td>
            <td>${cols[10] || ""}</td>
        </tr>
        `;
    });

    document.getElementById("recordCount").innerText = totalRecords;

})
.catch(error => console.log(error));
