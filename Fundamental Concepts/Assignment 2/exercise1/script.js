titleref = document.getElementById('grocery');
listref = document.getElementById('item');

const AddTitle = () => {
    let List_title = document.getElementById('title').value;
    titleref.innerHTML = List_title;
}

const AddItem = () => {
    let itemref = document.getElementById('list').value;
    let arr = []
    arr.push(`<div class="input"><input type="checkbox" class="checkbox" name="" id="checkbox"><label for="checkbox">${itemref}</label></div>`);
    console.log(arr);
    listref.innerHTML += [arr];
}
