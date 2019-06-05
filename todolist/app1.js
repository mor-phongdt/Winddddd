window.onload = ()=>{
    
//class names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";

// Select the Elements
const list = document.getElementById("list");
const clear = document.querySelector(".clear");
const input = document.getElementById("input");
const dateElement = document.getElementById('date');

//Variables
let LIST,id;

//add to do function
const addToDo=(toDo,id,done,trash)=>{
    if(trash){return;}

    const circle = done ? CHECK : UNCHECK;
    const line = done ? LINE_THROUGH : "";

    const item = `<li class="item">
                    <i class="fa ${circle} co" job="complete" id="${id}"></i>
                    <p class="text ${line}">${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                    </li>`;
    const position ="beforeend";
    list.insertAdjacentHTML(position,item);
};
//function load item
const loadList=(array)=>{
    for (let item of array) {
        addToDo(item.name, item.id, item.done, item.trash);
    }
};

//get item form localstorage
let data = localStorage.getItem("TODO");  //TODO is key item which saved into localStorage

// check item from localStorage
if(data){
    LIST = JSON.parse(data);
    id = LIST.length;       // set the id to the last one in the list
    loadList(LIST);         //show list
}else{                      // if data isn't empty
    LIST=[];
    id=0;
}



//clear the localstorage
clear.addEventListener('click',(event)=>{
    localStorage.clear();
    location.reload();
});

//show day
const options = {weekday : "long", month:"short", day:"numeric"};
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US", options);




//add an item to list todo
document.addEventListener('keyup',(event)=>{
    if(event.keyCode==13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo,id,false,false);
            // add item to LIST
            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            })
            //add LIST to localStorage
            localStorage.setItem("TODO",JSON.stringify(LIST));

            id++;
        }
        input.value="";
    }
    
});

const completeToDo =(elements)=> {
    elements.classList.toggle(UNCHECK);    // classList.toggle de xoa hoac them
    elements.classList.toggle(CHECK);
    document.querySelector(".text").classList.toggle(LINE_THROUGH);       // querySelector dung de truy cap de the dau tien co class .text

    LIST[elements.id].done = LIST[elements.id].done ? false : true ;       // neu LIST[elements.id].done đúng thì sửa thành sai
};

const removeToDo= (elements)=> {
    elements.parentNode.parentNode.removeChild(elements.parentNode);    // parentNode để ra thẻ bố . 2 lần là ra thẻ ông. vv
    LIST[elements.id].trash=true;
};


list.addEventListener("click",(event)=>{
    const elements = event.target;
    const elementsJob = elements.attributes.job.value;
    

    if(elementsJob=="complete"){
        completeToDo(elements);
    }else if(elementsJob=="delete"){
        removeToDo(elements);
    }

    localStorage.setItem("TODO", JSON.stringify(LIST));    //cap nhap lai list trong localStorage
});
}