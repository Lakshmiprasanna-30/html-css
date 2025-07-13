const tables=[
    { id:"table1", name:"Table-1", total:0, items:{} },
    { id:"table2", name: "Table-2", total:0, items:{} },
    { id:"table3", name: "Table-3", total:0, items:{} }
]
const menuItems=[
    {id:"item1", name:"Biryani",price:100.00,type:"main course"},
    {id:"item2", name:"Pizza",price:100.00,type:"main course"},
    {id:"item1", name:"Panner tikka",price:100.00,type:"stater"}
]
document.addEventListener("DOMContentLoaded",()=>{
    renderTable(tables);
    renderMenu(menuItems);
})
function renderTable(tables){
    const tableContainer=document.getElementById("table-container");
    tableContainer.innerHTML = "";
    tables.forEach((table)=>{
        const tableCard=document.createElement("div");
        tableCard.className="table-card";
        tableCard.id=table.id;
        tableCard.innerHTML=`
        <h3>${table.name}</h3>
        <p>total: ${table.total.toFixed(2)}</p>
        <p>items:${Object.values(table.items).reduce((a,b)=>a+b.quality,0)}</p>`;
        tableContainer.append(tableCard);
        tableCard.addEventListener("dragover",dragover);
        tableCard.addEventListener("drop",dropItem);
    })
}
function renderMenu(menuItems){
    const menuContainer=document.getElementById("menu-container");
    menuContainer.innerHTML = "";
    menuItems.forEach((item)=>{
        const menuItem=document.createElement("div");
        menuItem.className="menu-item";
        menuItem.id = item.id;
        menuItem.draggable=true;
        menuItem.dataset.name=item.name;
        menuItem.dataset.type=item.type;
        menuItem.dataset.price=item.price;

        menuItem.innerHTML=`
        <h4>${item.name}</h4>
        <p>${item.price.toFixed(2)}-${item.type}</p>`
        menuContainer.append(menuItem);
        menuItem.addEventListener("dragstart",dragStart);
    })
}
function filterTable(){
    const searchedItem=document.getElementById("table-search").value.toLowerCase();
    const filteredItem=tables.filter((table)=>
        table.name.toLowerCase().includes(searchedItem)
        
);
renderTable(filteredItem);
}

function filterMenu(){
    const searchedItem=document.getElementById("menu-search").value.toLowerCase();
    const filteredMenu=menuItems.filter((item)=>
        item.name.toLowerCase().includes(searchedItem)
    );
    renderMenu(filteredMenu);
}