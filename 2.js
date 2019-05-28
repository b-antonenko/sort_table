colRow.sort((A, B) => {
    const rowA = A.cells[columnNum].textContent;
    const rowB = B.cells[columnNum].textContent;
    if (sortData === 'string') {
        return rowA.localeCompare(rowB);
    }
    if (sortData === 'number') {
        return +rowA - +rowB;
    }
});

function sortNum() =