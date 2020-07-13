function getupdate(){
    console.log("updating..");
    cour = document.getElementById('course').value;
    cred = document.getElementById('credit').value;
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        itemJsonArray.push([cour,cred]);
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray =JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([cour,cred]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
    }
    update();
}



function update(){
    if (localStorage.getItem('itemsJson')==null){
        itemJsonArray = [];
        localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray))
    }
    else{
        itemJsonArrayStr = localStorage.getItem('itemsJson')
        itemJsonArray =JSON.parse(itemJsonArrayStr);
    }
    // polpulate the table
    let tableBody = document.getElementById("tableBody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class=" btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getupdate);
update();
function deleted(itemIndex){
    console.log("Delete", itemIndex);
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray =JSON.parse(itemJsonArrayStr);
    // delete iten index element from array
    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem('itemsJson',JSON.stringify(itemJsonArray));
    update();
}
function clearStorage(){
    if (confirm("Do you really want to claer?")){
        console.log('Clearing the Storage')
        localStorage.clear();
        update()
    }
}