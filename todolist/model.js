model={};

model.todoList = undefined ;

model.saveTodo = (todo)=>{
    const db = firebase.firestore();
    db.collection('todoList').add({
        content : todo,
        status : false 
    })
}

model.loadTodo = ()=>{
    const db = firebase.firestore();
    db.collection('todoList').onSnapshot(snapshot=>{
        const todoList = [];
        snapshot.docs.forEach(item => {
            const todo = item.data();
            todo.id = item.id;
            todoList.push(todo);
        });
    if(model.todoList){
        const newTodo = todoList[todoList.length-1];
        app.addToDo(newTodo.content,newTodo.status,newTodo.id);
    }else{
        model.todoList = todoList;
        todoList.forEach((todo)=>{
            app.addToDo(todo.content,todo.status,todo.id);
        })
    }
    });
}

model.removeTodo = (id)=>{

    firebase.firestore().collection("todoList").doc(id).delete();
}

model.updateTodo =(id,name,status)=>{
    firebase.firestore().collection("todoList").doc(id).update({
        content : name,
        status : status
    })
}