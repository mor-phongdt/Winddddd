const components = {}

components.adminPage = `
<div id="page-admin">
            <div id="menu">
                    <ul id="accordion" class="accordion">
                            <li>
                                <div class="link">Book<i class="fa fa-chevron-down"></i></div>
                                <ul class="submenu">
                                    <li><a href="#" id="list-book">List Book</a></li>
                                    <li><a href="#" id="add-book">Add Book</a></li>
                                </ul>
                            </li>
                        </ul>          
            </div>
            <div id="container">
                <h2 id="title">List Book</h2>
                <hr>
                <div>
                    <div class="search-wrapper"><input class="form-control" id="search" type="text" placeholder="Search.."></div>
                    <table  class="table table-bordered table-dark table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Author</th>
                                <th>Category</th>
                                <th class="detail">Detail</th>
                                <th>Image</th>
                                <th>Delette</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody id="table-book">
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
`;

components.addBook = `
<div id="page-add-book">
<div id="menu">
        <ul id="accordion" class="accordion">
                <li>
                    <div class="link">Book<i class="fa fa-chevron-down"></i></div>
                    <ul class="submenu">
                        <li><a href="#" id="list-book">List Book</a></li>
                        <li><a href="#" id="add-book">Add Book</a></li>
                    </ul>
                </li>
            </ul>          
</div>
<div id="container">
    <h2 id="title">Add Book</h2>
    <hr>
    <form id="form-add-book">
        <div class="input-wrapper form-group">
            <label class="book-detail">Name Book</label>
            <input class="form-control" type='text' name="nameBook" placeholder="Please Enter Namebook">
            <div id='name-error-message' class="error"></div>
        </div>
        <div class="input-wrapper form-group">
            <label class="book-detail">Name Author</label>
            <input class="form-control" type='text' name="nameAuthor" placeholder="Please Enter NameAuthor">
            <div id='author-error-message' class="error"></div>
        </div>
        <div class="input-wrapper form-group">
            <label class="book-detail">Category</label>
            <input class="form-control" type='text' name="category" placeholder="Please Enter Category">
            <div id='category-error-message' class="error"></div>
        </div>
        <div class="input-wrapper form-group">
            <label class="book-detail">Detail</label>
            <textarea class="form-control" rows="4" cols="50" name="textArea" placeholder="Please Enter Detail"></textarea>
            <div id='textarea-error-message' class="error"></div>
        </div>
        <div class="input-wrapper">
            <label >Image</label>
            <input id="file-button" type="file" name="image" class="form-control-file border">
            <div id='image-error-message' class="error"></div>
        </div>
        <div class="input-wrapper button"><input class="btn btn-primary" type="submit" value="Add"></div>
    </form>
</div>
</div>
`;