

function createGrid(){

    const container = document.querySelector(".container");

    for(let i = 0; i < 16; i++){
        let row = document.createElement("div");
        row.className="row";
        row.style.margin = 5;
        row.style.padding = 5;

        let rowContent = document.createTextNode(row.className);
        row.appendChild(rowContent);

        for(let j = 0; j<16; j++){
            let column = document.createElement("div");
            column.className="column";

            let columnContent = document.createTextNode(column.className);
            column.appendChild(columnContent);

            row.appendChild(column);
        }

        container.appendChild(row)

    }

}

createGrid();