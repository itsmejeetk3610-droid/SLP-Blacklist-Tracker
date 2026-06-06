fetch("blacklist_tracker_import_template%2012.csv")
.then(response => response.text())
.then(data => {

    let rows = data.split("\n");
    let tableBody = document.getElementById("employeeTable");

    rows.slice(1).forEach(row => {

        let cols = row.split(",");

        if(cols.length > 10){

            tableBody.innerHTML += `
            <tr>
                <td>${cols[1]}</td>   <!-- Name -->
                <td>${cols[2]}</td>   <!-- Employee ID -->
                <td>${cols[3]}</td>   <!-- Vendor -->
                <td>${cols[4]}</td>   <!-- Location -->
                <td>${cols[8]}</td>   <!-- Case Type -->
                <td>${cols[10]}</td>  <!-- Status -->
            </tr>
            `;
        }

    });

});
