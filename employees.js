fetch("blacklist_tracker_import_template%2012.csv")
.then(response => response.text())
.then(data => {

    let rows = data.split("\n");
    let tableBody = document.getElementById("employeeTable");

    rows.slice(1).forEach(row => {

        let cols = row.split(",");

        if(cols.length > 5){

            tableBody.innerHTML += `
            <tr>
                <td>${cols[0]}</td>
                <td>${cols[1]}</td>
                <td>${cols[2]}</td>
                <td>${cols[3]}</td>
                <td>${cols[4]}</td>
                <td>${cols[5]}</td>
            </tr>
            `;
        }

    });

});
