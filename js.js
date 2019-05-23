'use strict';

const table = document.querySelector('#grid');
const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');


tHead.addEventListener('click', (event) => {
    const th = document.querySelector('th');
    const sortData = th.dataset.type;
    const columnNum = th.cellIndex;
    const colRow = [...tBody.children];

    if (!th)
        return ;
    colRow.sort((A, B) => {
        switch(sortData) {
            case "string":
            return A.cells[columnNum].textContent > B.cells[columnNum].textContent ? 1 : -1;
            break;
            case "number":
                return +A.cells[columnNum].textContent - +B.cells[columnNum].textContent;
                break;
        }});

    for (let i of colRow) {
        tBody.append(i);
    }
})