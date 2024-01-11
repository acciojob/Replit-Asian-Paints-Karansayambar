const blockIdInput = document.getElementById("block_id");
const colorIdInput = document.getElementById("color_id");
const gridItems = document.querySelectorAll(".grid-item");
const changeColor = document.getElementById("change_button");
const reset = document.getElementById("Reset");
changeColor.addEventListener("click", ()=>{
	const blockId = blockIdInput.value;
	const colorId = colorIdInput.value;
	gridItems.forEach(item =>{
		if(item.id === `grid-item-${blockId}`){
			item.style.backgroundColor = colorId;
			item.style.color = "white";
		}
	});
});
reset.addEventListener("click", () => {
    gridItems.forEach(item => {
        item.style.backgroundColor = "transparent";
		item.style.color = "black";
    });
});

