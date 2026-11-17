function addEmployee() {
    const name = document.getElementById("name").value.trim();
    const position = document.getElementById("position").value.trim();
    const salary = document.getElementById("salary").value.trim();

    if (!name  !position  !salary) {
        alert("Ҳамаи майдонҳоро пур кунед!");
        return;
    }

    const list = document.getElementById("employeeList");
    const row = document.createElement("tr");

    row.innerHTML = 
        <td>${list.rows.length + 1}</td>
        <td></td>
        <td></td>
        <td></td>
        <td><button type="button">Нест кардан</button></td>
    ;

    row.cells[1].textContent = name;
    row.cells[2].textContent = position;
    row.cells[3].textContent = salary + " сомонӣ";

    row.querySelector("button").onclick = function() {
        row.remove();
    };

    list.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("position").value = "";
    document.getElementById("salary").value = "";
}