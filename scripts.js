const container = document.querySelector("#container");
reset(16);

function generateGrid(gridSize){
    for(let i=0 ; i<(gridSize*gridSize) ; i++){
        const gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridItem.style.width = `${90/gridSize}vw`;
        gridItem.style.height = `${90/gridSize}vw`;
        gridItem.addEventListener('mouseover', () => {
            gridItem.classList.add("gridItemHover");
        });
        container.appendChild(gridItem);
    }
}

function displayUI(){
    const changeSizeBtn = document.createElement("button");
    changeSizeBtn.textContent = "adjust size";
    container.appendChild(changeSizeBtn);
    const input = document.createElement("input");
    container.appendChild(input);
    changeSizeBtn.addEventListener('click', () => {
        reset(input.value);
    });
}

//removes all elements within container and regenerates grid / UI
function reset(gridSize){
    while (container.firstChild) { 
        container.firstChild.remove(); 
    }
    gridSize <= 50 ? generateGrid(gridSize) : generateGrid(50);
    displayUI();
}

