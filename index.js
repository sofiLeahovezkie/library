const butnEl = document.getElementById("button");
const infoEl = document.getElementById("form");
const cont = document.getElementById("mainContainer")
const nameBook = document.querySelectorAll(".name")
const nameAuthor = document.querySelectorAll(".author")
const pages = document.querySelectorAll(".pages")
const submit = document.getElementById("submit")
const statusEl = document.getElementById("status")
const trash = document.getElementById("trash-1")
const read =document.getElementById("check-1")
let myLibrary = []


submit.addEventListener("click", ()=> {
    const name = nameBook[0].value;
    const Author = nameAuthor[0].value;
    const numPages = pages[0].value;
    console.log(name, Author, numPages,  )
    let newBook = new book(name, Author, numPages, )
    console.log(newBook)

   addBookToLibrary(newBook)
    }
        );
        
       function book(title, author, pages, read ){
            this.title= title;
            this.author = author
            this.pages = pages
           
            this.info = function(){
              console.log((`${title} by ${author}, ${pages} pages, ${read}`))
              
            }}


function addBookToLibrary(x){            
    myLibrary.push(x)
    display(myLibrary)
    console.log(myLibrary.length);
}


function display(array){
    const lastObj = myLibrary[myLibrary.length-1]
    const bookditails = document.createElement('ul')
        bookditails.classList.add("newBookAdded")
        list.appendChild(bookditails)
        let titlteOf =document.createElement("ul")
        titlteOf.innerHTML = lastObj.title
        titlteOf.classList.add("added")
        bookditails.appendChild(titlteOf)
        let authorOf =document.createElement("ul")    
        authorOf.innerHTML = lastObj.author
        authorOf.classList.add("added")
        bookditails.appendChild(authorOf)
        let pageOf =document.createElement("ul")  
        pageOf.innerHTML = lastObj.pages
        pageOf.classList.add("added")
        bookditails.appendChild(pageOf)
        list.appendChild(bookditails)
        console.log(lastObj);
        
       let read = document.createElement("div")
       read.innerHTML = '<i class="fa-solid fa-check"> not read yet'
       read.setAttribute('id', 'check-1')
       bookditails.appendChild(read)
       let trash = document.createElement("div")
       trash.innerHTML = '<i class="fa-solid fa-trash"> click to dispose'
       trash.setAttribute('id', 'trash-1')
       bookditails.appendChild(trash)


       read.addEventListener('click',()=> {
        bookditails.style.backgroundColor= "#7B7F7F"
        read.innerHTML = 'read'
        console.log('f')
    })

    trash.addEventListener('click',()=> {
        bookditails.remove()
        console.log('f')
    })

}



 console.log(myLibrary.length)
//    
