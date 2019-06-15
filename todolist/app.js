const app = {};
window.onload = ()=>{
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCgocZ-H5gus50Q54dMbyarVVfIIyFJHs",
    authDomain: "mytodolist-993df.firebaseapp.com",
    databaseURL: "https://mytodolist-993df.firebaseio.com",
    projectId: "mytodolist-993df",
    storageBucket: "mytodolist-993df.appspot.com",
    messagingSenderId: "411217082834",
    appId: "1:411217082834:web:6873c5a1cefbf912"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



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
    
    
    //add to do function
    app.addToDo=(toDo,status,id)=>{
    
        const circle = status ? CHECK : UNCHECK;
        const line = status ? LINE_THROUGH : "";
        const item = `<li class="item">
                        <i class="fa ${circle} co" job="complete" id-data="${id}" name="${toDo}" status="${status}"></i>
                        <p class="text ${line}" ">${toDo}</p>
                        <i class="fa fa-trash-o de" job="delete" id-data="${id}"></i>
                        </li>`;
        const position ="beforeend";
        list.insertAdjacentHTML(position,item);
    };

    model.loadTodo();
    //show day
    const options = {weekday : "long", month:"short", day:"numeric"};
    const today = new Date();
    dateElement.innerHTML = today.toLocaleDateString("en-US", options);
    
    
    
    
    //add an item to list todo
    document.addEventListener('keyup',(event)=>{
        if(event.keyCode==13){
            const toDo = input.value;
    
            if(toDo){
                model.saveTodo(toDo);
            }
            input.value="";
        }
        
    });
    
    app.completeToDo =(elements)=> {
       elements.classList.toggle(UNCHECK);    // classList.toggle de xoa hoac them
        elements.classList.toggle(CHECK);
        elements.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);       // querySelector dung de truy cap de the dau tien co class .text
        model.updateTodo(elements.getAttribute("id-data"),elements.getAttribute("name"));
        

    };
    
    app.removeToDo= (elements)=> {
        model.removeTodo(elements.getAttribute("id-data"));
        elements.parentNode.parentNode.removeChild(elements.parentNode);    // parentNode để ra thẻ bố . 2 lần là ra thẻ ông. vv
        
    };
    
    
    list.addEventListener("click",(event)=>{
        const elements = event.target;
        const elementsJob = elements.attributes.job.value;
        
    
        if(elementsJob=="complete"){
            app.completeToDo(elements);
        }else if(elementsJob=="delete"){
            app.removeToDo(elements);
        }
    });
}