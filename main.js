const input =document.querySelector(".input");
const addBtn= document.querySelector (".addBtn");
const list =document.querySelector (".taskList");

 let tasks = [];


 addBtn.addEventListener("click",()=>{
    // инпуттан ашыкча пробелдерди trim() менен алып салабыз
const task= input.value.trim() ;

// push() менен данныйлардын баарын массивтин ичине тушуробуз
tasks.push(task);
const item =document.createElement("li");

// li нин ичинен эмне ачсак аны innerHTML ге барабарлап ача беребиз
 item.innerHTML=`
 <span>${task}</span>
<button onClick= "deleteTask(${tasks.length -1 })">X</button>
<button onClick= "editTask(${tasks.length -1 })">edit</button>
 `;
list.append(item);
input.value=""

 });

 function deleteTask(index){
    tasks.splice(index,1 );
    list.innerHTML="";
    tasks.forEach((task,index)=>{
        const item =document.createElement("li");

// li нин ичинен эмне ачсак аны innerHTML ге барабарлап ача беребиз
 item.innerHTML=`
 <span>${task}</span>
<button  onClick= "deleteTask()" >X</button>

 `;
list.append(item);
    })
 }

 function editTask(index){
   const newTask= prompt("Измените  задачу :",tasks[index]) ;
   tasks[index]= newTask;
list.children[index].children[0].innerHTML=newTask
 }

