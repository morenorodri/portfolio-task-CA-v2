async function fetchStackData() {
    try {
        const respons = await fetch("json/stack.json");
        const data = await respons.json();
        const stackData = data.stack;

        renderStackData(stackData);
        
    } catch (error) {
        console.error("An error occurred:", error);
    } 
}
fetchStackData()



let copyStackData = [];

function renderStackData(stackData) {
    copyStackData = stackData;
    const ulParent = document.querySelector(".js-techList");
    const liReset = document.createElement("li");

    const liChild = copyStackData.map(item => {
        return `<li id="${item.stackId}" class="js-stackClick"><img src="${item.srcLink}" id="${item.stackId}" alt="${item.altText}"></li>  `;
    });
    ulParent.innerHTML = liChild.join("");


    if (copyStackData.length === 0) {
        liReset.textContent = "reloading the stack"
        ulParent.appendChild(liReset);
        setTimeout(fetchStackData, 3000);
    }


    const stackElement = document.querySelectorAll(".js-stackClick");
    stackElement.forEach(item => {
        item.addEventListener("click", (event) => {
            const itemId = event.target.id;

            popStack(copyStackData, itemId);
        });
    });
};



function popStack(copyStackData, itemId) {
    const id = Number(itemId);

    const reducedStack = copyStackData.filter(item => {
        if (item.stackId !== id) {
            return item;
        }
    });

    copyStackData = reducedStack;

    renderStackData(copyStackData);
}