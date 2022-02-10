const names = document.getElementById("names");
const loc = document.getElementById("location");
const company = document.getElementById("company");
const items = document.getElementById("items");




function submitFun() {
    var arr = [];
    const n = names.value;
    const o = loc.value;
    const p = company.value;
    const obj = {
        name: n,
        loc: o,
        company: p

    }
    if (localStorage.length == 0) {

        localStorage.setItem("data", JSON.stringify([obj]));
        console.log(obj);
        var item = createItem(n, o, p);

    }
    else {

        arr.push(localStorage.setItem("data",JSON.stringify([obj])));

    }




}



function createItem(n, o, p) {


    const divs = document.createElement("div");

    divs.classList.add("container");

    const para1 = document.createElement("p");
    para1.classList.add("para1");
    para1.innerHTML = n;

    divs.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("para2");
    para2.innerHTML = o;

    divs.appendChild(para2);


    const para3 = document.createElement("p");
    para3.classList.add("para3");
    para3.innerHTML = p;
    divs.appendChild(para3);



    const deleteItem = document.createElement("button");
    deleteItem.classList.add("btn-delete")

    deleteItem.innerText = "delete";

    divs.appendChild(deleteItem);

    deleteItem.onclick = function () {

        alert("deleted")

        divs.remove();
        localStorage.removeItem("name");

    }
    names.value = "";
    loc.value = "";
    company.value = "";

    const updateItem = document.createElement("button");
    updateItem.classList.add("btn-update");
    updateItem.innerText = "update";
    divs.appendChild(updateItem);


    updateItem.onclick = function () {

        names.value = para1.innerHTML;
        loc.value = para2.innerHTML;
        company.value = para3.innerHTML;
        targetElement = divs;
    }



    return divs;









}

