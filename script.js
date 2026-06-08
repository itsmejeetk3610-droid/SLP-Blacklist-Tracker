fetch("employees.csv")
.then(response => response.text())
.then(data => {

    console.log("CSV Loaded");

    let rows = data.trim().split("\n");

    console.log("Rows Found:", rows.length);

    let total = 0;
    let warned = 0;
    let blacklisted = 0;
    let terminated = 0;

    rows.slice(1).forEach(row => {

        if(!row.trim()) return;

        let cols = row.split("\t");

        console.log(cols);

        total++;

        let status = cols[10]
            ? cols[10].trim().toUpperCase()
            : "";

        if(status === "WARN"){
            warned++;
        }

        if(status === "BLACKLISTED"){
            blacklisted++;
        }

        if(status === "TERMINATED"){
            terminated++;
        }

    });

    console.log({
        total,
        warned,
        blacklisted,
        terminated
    });

    document.getElementById("totalEmployees").innerText = total;
    document.getElementById("warnedCount").innerText = warned;
    document.getElementById("blacklistedCount").innerText = blacklisted;
    document.getElementById("terminatedCount").innerText = terminated;

})
.catch(error => console.error(error));
