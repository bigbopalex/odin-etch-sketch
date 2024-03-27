const container = document.querySelector("#container");

for(let i=0 ; i<256 ; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridItem.addEventListener('mouseover', () => {
        gridItem.classList.add("gridItemHover");
    });
    container.appendChild(gridItem);
}