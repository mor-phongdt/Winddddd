const model = {};

model.bookList = undefined;

model.saveBook = (bookInfo) => {
    const db = firebase.firestore();
    db.collection('book-review').add(bookInfo)
    .then(window.alert('Add book completed'))
    .catch((error)=>{
        console.log(error);
        window.alert(error.message);
    });

};

model.loadBook = () =>{
    const db = firebase.firestore();
    db.collection('book-review').orderBy("createdAt").onSnapshot((snapshot) => {
        const bookList = [];
        snapshot.docChanges().forEach((item) => {
            const book = item.doc.data();
            book.id = item.doc.id;
            bookList.push(book);
        });

        if(model.bookList){
            const newBook = bookList[bookList.length-1];
            view.renderBook(newBook);
        }else{
            model.bookList = bookList;
            bookList.forEach((book) =>{
                view.renderBook(book);
            })
        }
    })
};

model.clearBook = () => {
    model.bookList = undefined;
}