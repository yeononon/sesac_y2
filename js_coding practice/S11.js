function writeNote() {
    const Writer = document.getElementById('writer').value.trim();
    const Content = document.getElementById('content').value.trim();
    const Day = new Date().toLocaleString();

    if (Writer !== '' && Content !== '') {
        const newRow = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.textContent = Writer;
        td2.textContent = Content;
        td3.textContent = Day;
        newRow.append(td1, td2, td3);

        const table = document.getElementById('table');
        table.appendChild(newRow);
        console.log(newRow);
    }

    Writer.value = '';
    Content.value = '';
}
