/**
 * Color 1 : #607EAA
 * Color 2 : #AC7088
 * Color 3 : #EED180
 * Color 4 : #F37878
 * Color 5 : #90C8AC
 * Color 6 : #D8CCA3
 * Color 7 : #82A284
 */

let todoList = [
  {
    id: 1,
    date: "2022-08-10",
    time: "11:30",
    todo: "Belanja Mingguan",
    color: "#90C8AC",
  },
  {
    id: 2,
    date: "2022-08-10",
    time: "10:30",
    todo: "Memasak makanan",
    color: "#F37878",
  },
  {
    id: 3,
    date: "2022-08-20",
    time: "17:30",
    todo: "Belajar Coding",
    color: "#EED180",
  },
  {
    id: 4,
    date: "2022-08-13",
    time: "14:30",
    todo: "Bersih-bersih rumah",
    color: "#82A284",
  },
  {
    id: 5,
    date: "2022-08-16",
    time: "19:30",
    todo: "Mencuci Baju",
    color: "#607EAA",
  },
];

var todo = document.getElementById("list-todo");

// render data todo list to html todo
function renderTodoList(data) {
  todo.innerHTML = "";
  data.forEach((item) => {
    todo.innerHTML += `
        <div class="todo-item" style="background-color: ${item.color}">
        <h5>${item.todo}</h5>
        <p>${item.time}</p>
        <h6>${item.date}</h6>

        <a onclick="deleteTodoList(${item.id})">Delete</a>
        </div>
        `;
  });
}

function sortAscending() {
    todoList.sort(function (a, b) {
      // Convert date and time strings to Date objects
      const dateA = new Date(a.date + 'T' + a.time);
      const dateB = new Date(b.date + 'T' + b.time);
  
      // Compare dates and times
      if (dateA > dateB) {
        return 1;
      } else if (dateA < dateB) {
        return -1;
      } else {
        return 0;
      }
    });
    renderTodoList(todoList);
  }
  


function sortDescending() {
    todoList.sort(function (a, b) {
      // Convert date and time strings to Date objects
      const dateA = new Date(a.date + 'T' + a.time);
      const dateB = new Date(b.date + 'T' + b.time);
  
      // Compare dates and times
      if (dateB > dateA) {
        return 1;
      } else if (dateB < dateA) {
        return -1;
      } else {
        return 0;
      }
    });
    renderTodoList(todoList);
  }


// create function to search data and filter data based on keyword
function searchTodoList() {
  let search = document.getElementById("search").value;
  let filter = todoList.filter((item) => {
    return item.todo.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filter);
  todo.innerHTML = "";
  renderTodoList(filter);
}

function addTodoList() {
    let todo = document.getElementById("inputTodo").value;
    let date = document.getElementById("inputDate").value;
    let time = document.getElementById("inputTime").value;
    let color =  document.querySelector('input[name="colorOption"]:checked').value;
    let colorCode = ';'
    console.log(color)
    if (color == "color1") {
        colorCode = "#607EAA"
    } else if (color == "color2") {
        colorCode = "#AC7088"
    } else if (color == "color3") {
        colorCode = "#EED180"
    } else if (color == "color4") {
        colorCode = "#F37878"
    } else if (color == "color5") {
        colorCode = "#90C8AC"
    } else if (color == "color6") {
        colorCode = "#D8CCA3"
    } else {
        colorCode = "#82A284"
    }
    let newTodo = {
        id: todoList.length + 1,
        todo: todo,
        date: date,
        time: time,
        color: colorCode,
    }
    todoList.push(newTodo) 
    renderTodoList(todoList)
    document.getElementById("inputTodo").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputTime").value = "";
    document.querySelector('input[name="colorOption"]:first-of-type').checked = true;

}
        

// create function to delete data todo list
function deleteTodoList(id) {
    // clear searchbar
    document.getElementById("search").value = "";
  let filter = todoList.filter((item) => {
    return item.id != id;
  });
  todoList = filter;
  renderTodoList(filter);
}

renderTodoList(todoList);
