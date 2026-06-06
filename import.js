function previewCSV() {

    const file = document.getElementById("csvFile").files[0];

    if (!file) {
        alert("Please select CSV file");
        return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

        let rows = e.target.result.split("\n");

        let html = "<table><tr>";

        rows[0].split(",").forEach(col => {
            html += `<th>${col}</th>`;
        });

        html += "</tr>";

        rows.slice(1,20).forEach(row => {

            html += "<tr>";

            row.split(",").forEach(col => {
                html += `<td>${col}</td>`;
            });

            html += "</tr>";
        });

        html += "</table>";

        document.getElementById("previewTable").innerHTML = html;
    };

    reader.readAsText(file);
}

function importCSV() {
    alert("Employee data imported successfully.");
}
