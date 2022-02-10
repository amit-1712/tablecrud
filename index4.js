const names = document.getElementById("names");
const loc = document.getElementById("location");
const company = document.getElementById("company");
const items = document.getElementById("items");




let targetElement;
var arr = JSON.parse(localStorage.getItem("data"));

if(arr){
    displayNotes();

}
else{
    localStorage.setItem("data",JSON.stringify([]));
}


function displayNotes(){
    items.innerHTML = "";

    arr.forEach((x,i)=>{
        
        items.appendChild(createItem(x.n,x.o,x.p,i));
    })

}





function submitFun() {



    if (names.value.length == 0 || loc.value.length==0 || company.value.length==0) {

        alert("please fill all the inputs");
    }
    else {

        const n = names.value;
        const o = loc.value;
        const p = company.value;

        if (targetElement) {
            // updateFun(targetElement, n, o, p);
            
            arr = arr.map((e,j)=>{
            if(j==targetElement.id){
                return {
                    n,o,p
                }
            }
            return e;
            

        })
        displayNotes();
        localStorage.setItem("data",JSON.stringify(arr));
        targetElement = "";
        

        }
        else {


            var item = createItem(n, o, p);

            items.appendChild(item);
            arr.push({
                n,o,p
            });

            localStorage.setItem("data",JSON.stringify(arr));
            displayNotes();



        }


    }





}



function updateFun(targetElement, n, o, p) {
    targetElement.querySelector(".para1").innerHTML = n;
    targetElement.querySelector(".para2").innerHTML = o;
    targetElement.querySelector(".para3").innerHTML = p;


}



function createItem(n, o, p,i) {
    console.log(n);
    console.log(o);
    console.log(p);

    const divs = document.createElement("div");

    divs.classList.add("container");
    divs.setAttribute("id",i);

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

        // divs.remove();
        arr = arr.filter((e,j)=>{
            return j!==i;

        })
        
        displayNotes();
        localStorage.setItem("data",JSON.stringify(arr));
        

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

