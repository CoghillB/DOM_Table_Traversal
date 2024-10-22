document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('table');

    function highlightEvenRows() {
        const rows = table.getElementsByClassName('data');
        for (let i = 1; i < rows.length; i += 2) {
            rows[i].style.backgroundColor = 'lightblue';
        }
    }

    function sumAllNums() {
        const rows = table.getElementsByClassName('data');
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            for (let j = 0; j < cells.length; j++) {
                sum += parseInt(cells[j].textContent, 10) || 0;
            }
        }
        let sumElement = document.getElementById('sumDisplay');
        if (!sumElement) {
            sumElement = document.createElement('div');
            sumElement.id = 'sumDisplay';
            table.parentElement.appendChild(sumElement);
        }
        sumElement.innerText = `Sum: ${sum}`;
    }

    function changeFirstCol() {
        const rows = table.getElementsByClassName('data');
        for (let i = 0; i < rows.length; i++) {
            const cells = rows[i].getElementsByTagName('td');
            if (cells.length > 0) {
                cells[0].textContent = Math.floor(Math.random() * 100) + 1;
            }
        }
    }

    function addRandomRow() {
        const newRow = document.createElement('tr');
        newRow.className = 'data';


        for (let i = 1; i < 4; i++) {
            const newCell = document.createElement('td');
            newCell.textContent = Math.floor(Math.random() * 100) + 1;
            newRow.appendChild(newCell);
        }

        table.appendChild(newRow);
    }

    document.getElementById('EvenRows').addEventListener('click', highlightEvenRows);
    document.getElementById('SumNumbers').addEventListener('click', sumAllNums);
    document.getElementById('RandNums').addEventListener('click', changeFirstCol);
    document.getElementById('AddRandRow').addEventListener('click', addRandomRow);
});
