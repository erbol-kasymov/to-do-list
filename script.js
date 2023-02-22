let main = document.createElement('main');
main.classList.add('container');

document.body.prepend(main);

let projectName = document.createElement('h1');
projectName.innerHTML = "Let's do it";
main.append(projectName);

let listBlock = document.createElement('div');
listBlock.className = 'mainBlock';
main.append(listBlock);

let firstDiv = document.createElement('div');
listBlock.append(firstDiv);

let texIn = document.createElement('input');
texIn.setAttribute('placeholder', 'Gonna do');
texIn.className = 'textIn';
firstDiv.append(texIn);

let setDate = document.createElement('input');
setDate.setAttribute('type', 'date');
firstDiv.append(setDate);

let addBtn = document.createElement('button');
addBtn.innerHTML = 'ADD';
addBtn.id = 'addBtn';
firstDiv.append(addBtn);

let divTodo = document.createElement('div');
listBlock.append(divTodo);

let ul = document.createElement('ul');
divTodo.append(ul);

let btnClear = document.createElement('button');
// btnClear.className = 'btn_clear';
btnClear.innerHTML = 'Clear';
listBlock.append(btnClear);
// btnClear.append(imgClear);

let todosArray = [
    ...JSON.parse(localStorage.getItem('todos'))
]



const addToddo = () => {

    if (texIn.value != ""){

        todosArray.push({
            text: texIn.value,
            date: setDate.value,
            checked: false,
        })

        localStorage.setItem('todos', JSON.stringify(todosArray))
        renderTodoItem()
    }


    texIn.value = '';
    setDate.value = '';
}

const renderTodoItem = () => {
    todosArray.map((todo, id) => {
        let li = document.createElement('li');
        // li.innerHTML = `<span class='sp'>${texIn.value}</span> <span>${setDate.value}</span>`;
        li.append(texIn.value);
        li.append(setDate.value);
        ul.append(li);

        // let label = document.createElement('label')
        // label.append(todo.text + ' ' + todo.date)
        // li.append(label)

        let imgCheck = document.createElement('img');
        imgCheck.setAttribute('src', './img/check_circle.svg');
        li.append(imgCheck);

        let imgDelete = document.createElement('img');
        imgDelete.setAttribute('src', './img/delete.svg');
        li.append(imgDelete);

        imgCheck.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });

        imgDelete.addEventListener('click', () => {
            li.parentNode.removeChild(li);
        });

        btnClear.addEventListener('click', () => {
            li.parentNode.removeChild(li);
        });
    })
}


addBtn.addEventListener('click', addToddo);