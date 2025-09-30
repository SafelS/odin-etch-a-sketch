
let isMouseDown = false;


function createGrid(gridSize){

    const container = document.querySelector(".container");

    container.innerHTML="";


    for(let i = 0; i < gridSize; i++){
        let row = document.createElement("div");
        row.className="row";

        for(let j = 0; j<gridSize; j++){
            let column = document.createElement("div");
            column.className="column";
            column.addEventListener("mouseover", () => {
                if (isMouseDown) {
                    column.classList.add("hovored");
                }
            });

            row.appendChild(column);
        }

        container.appendChild(row)

    }

}

document.body.addEventListener("mousedown", () => {
  isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});




function openPrompt(){
    let gridNumber = Number(prompt("Enter a number for the Grid Size"));
    createGrid(gridNumber);
    
}
