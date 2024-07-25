document.addEventListener('DOMContentLoaded', function() {
    const dataSource = document.getElementById('dataSource');
    const speechText = document.getElementById('speechText');
    const nonHatePercent = document.getElementById('nonHatePercent');
    const hatePercent = document.getElementById('hatePercent');
    const verdict = document.getElementById('verdict');
    const dataTable = document.getElementById('dataTable').getElementsByTagName('tbody')[0];

    dataSource.addEventListener('submit', function(event) {
        event.preventDefault();

        const newRow = dataTable.insertRow();
        const newCell1 = newRow.insertCell(0);
        const newCell2 = newRow.insertCell(1);
        const newCell3 = newRow.insertCell(2);
        const newCell4 = newRow.insertCell(3);

        newCell1.textContent = speechText.value;
        newCell2.textContent = nonHatePercent.value;
        newCell3.textContent = hatePercent.value;
        newCell4.textContent = verdict.value;

        speechText.value = '';
        nonHatePercent.value = '';
        hatePercent.value = '';
        verdict.value = '';
        speechText.focus();
    });
});
