// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

// function to create the N_by_M canvas grid
function makeGrid() {
    const newTable = document.getElementById('pixelCanvas');   //existing html table
    const userHeight = document.getElementById('inputHeight').value;    // get the user's height choice
    const userWidth = document.getElementById('inputWidth').value;      // get the user's width choice
    
    event.preventDefault();
    newTable.innerHTML = (null);

    for (let h=0; h<userHeight; h+=1){
        let newRow = newTable.insertRow(h);     // create a table row <TR>
        for (let w=0; w<userWidth; w+=1){
          let newCell = newRow.insertCell(w);   // create the cells in the row <TD>
        }
    }
}

// function that changes the background color of a clicked table cell
function changeColor(event) {
    if (event.target.nodeName === 'TD') {
        const newColor = document.getElementById('colorPicker').value;      // get the user's color choice
        event.target.style.backgroundColor = newColor;
        event.preventDefault();
    }
}


//Event Listeners for grid size, reset and color change
submitButtonClick = document.getElementById("submitButton");
submitButtonClick.addEventListener("click", makeGrid)
pixelCanvas.addEventListener("click", changeColor);






 