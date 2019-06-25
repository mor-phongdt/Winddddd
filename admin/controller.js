const controller = {};

controller.validateAddBook = (bookInfo) => {
    if(!bookInfo.name){
        view.renderErrorMessage('name-error-message','Enter a name');
    }else{
        view.renderErrorMessage('name-error-message','');
    }

    if(!bookInfo.author){
        view.renderErrorMessage('author-error-message','Enter a name author');
    }else{
        view.renderErrorMessage('author-error-message','');
    }

    if(!bookInfo.category){
        view.renderErrorMessage('category-error-message','Enter a category');
    }else{
        view.renderErrorMessage('category-error-message','');
    }

    if(!bookInfo.decription){
        view.renderErrorMessage('textarea-error-message','Enter a decription');
    }else{
        view.renderErrorMessage('textarea-error-message','');
    }

    if(!bookInfo.imageUrl){
        view.renderErrorMessage('image-error-message','Please upload a image');
    }else{
        view.renderErrorMessage('image-error-message','');
    }

    if(bookInfo.name && bookInfo.author && bookInfo.category && bookInfo.decription && bookInfo.imageUrl){
        model.saveBook(bookInfo);
        view.clearAddBookForm();
    }
}
