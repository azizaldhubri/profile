const allboxes=document.querySelectorAll('.box');
const allTaskes=document.querySelectorAll('.task');
let todo_btn=document.getElementById('todo-btn');
let todo_input=document.getElementById('todo-input');   
let form=document.getElementById('add-form'); 
let doing=document.getElementById('doing'); 
let to_do=document.getElementById('to-do'); 
// array_ToDo=Array.from(document.querySelectorAll('#to-do p'));
// console.log(array_ToDo);

let array_ToDo;
let array_doing ;
let array_done ;


//  localStorage.clear();
// array_ToDo.splice(0);
// array_doing.splice(0);


if(localStorage.task !=null){
  array_ToDo=JSON.parse(localStorage.task) ;
}else {array_ToDo=[];}

if(localStorage.task_doing !=null){
  array_doing=JSON.parse(localStorage.task_doing) ;
}else {array_doing=[];}

if(localStorage.task_done !=null){
  array_done=JSON.parse(localStorage.task_done) ;
}else {array_done=[];}


// allTaskes.forEach(task =>{

//   task.addEventListener('dragstart',()=>{
//     task.classList.add('is-dragging');   
//   })

//   task.addEventListener('dragend',()=>{
//      task.classList.remove('is-dragging');   
//   })

// })


allboxes.forEach(box =>{
 
  box.addEventListener('dragover',(e)=>{
    e.preventDefault();
    const curTask=document.querySelector('.is-dragging');
    box.appendChild(curTask);
   
   

  })
})


 todo_btn.onclick=add_Task ;
 //-----------------------------add taskes
 function add_Task(){
 
  if(todo_input.value !='') {
   
    array_ToDo.push(todo_input.value);
 
    localStorage.setItem('task',JSON.stringify(array_ToDo));
    showTask_TODO();
       todo_input.value='';
  }

}


function showTask_TODO(){

  to_do.innerHTML='';
  let h3=document.createElement('h3');
  h3.appendChild(document.createTextNode('TO DO'));

  to_do.appendChild(h3);
 
   if(array_ToDo.length>0){
   
    for(let i=0 ;i <array_ToDo.length ; i++){
     
      const newTask=document.createElement('p');
    newTask.classList.add('task');
    newTask.appendChild(document.createTextNode(array_ToDo[i]));
    newTask.setAttribute('draggable','true');
    
    newTask.addEventListener('dragstart',()=>{
      newTask.classList.add('is-dragging');
    
    })
    newTask.addEventListener('dragend',()=>{
      newTask.classList.remove('is-dragging');
         
      updata_toDo();
      updata_doing();
      updata_done();      
      
         
    })
      
    localStorage.setItem('task',JSON.stringify(array_ToDo));
     to_do.appendChild(newTask);

    }

  }

}
showTask_TODO();


  function updata_toDo(){
    array_ToDo.splice(0);
    let  task1 ;

  let test=Array.from(document.querySelectorAll('#to-do p'));

   for(let i=0 ;i<test.length ;i++){
     task1=test[i].innerHTML ;
     array_ToDo.push(task1);
   
       }
  

   localStorage.setItem('task',JSON.stringify(array_ToDo));
   showTask_TODO();
   

 }
//-----------------------------------------------------------------------------

 function updata_doing(){
  array_doing.splice(0);
  let  task3 ;


let test2=Array.from(document.querySelectorAll('#doing p'));

 for(let i=0 ;i<test2.length ;i++){
   task3=test2[i].innerHTML ;
   array_doing.push(task3);
   
     }
    
     localStorage.setItem('task_doing',JSON.stringify(array_doing));
     showTask_doing();
   }


let doingi=document.getElementById('doing')

function  showTask_doing(){
  doingi.innerHTML='';
  let h3=document.createElement('h3');
  h3.appendChild(document.createTextNode('Doing'));

  doingi.appendChild(h3);
 
   if(array_doing.length>0){
   
    for(let i=0 ;i <array_doing.length ; i++){
     
      const newTaski=document.createElement('p');
    newTaski.classList.add('task');
    newTaski.appendChild(document.createTextNode(array_doing[i]));
    newTaski.setAttribute('draggable','true');
    
    newTaski.addEventListener('dragstart',()=>{
      newTaski.classList.add('is-dragging');
    
    })
    newTaski.addEventListener('dragend',()=>{
      newTaski.classList.remove('is-dragging');
          
      updata_toDo();
      updata_doing();
      updata_done();
      // showTask_doing();
    
        localStorage.setItem('task_doing',JSON.stringify(array_doing));
          
    })
      
    doingi.appendChild(newTaski);

    }

  }

}
showTask_doing();

//------------------------------------------------------------------------

function updata_done(){
  array_done.splice(0);
  let  task4 ;


let test3=Array.from(document.querySelectorAll('#done p'));


 for(let i=0 ;i<test3.length ;i++){
   task4=test3[i].innerHTML ;
   array_done.push(task4);
   
     }
    
     localStorage.setItem('task_done',JSON.stringify(array_done));
     showTask_done();
   }


let done=document.getElementById('done')

function  showTask_done(){
  done.innerHTML='';

  let h3=document.createElement('h3');
  h3.appendChild(document.createTextNode('Done'));

  done.appendChild(h3);
 
   if(array_done.length>0){
   
    for(let i=0 ;i <array_done.length ; i++){
     
      const newTask=document.createElement('p');
    newTask.classList.add('task');
    newTask.appendChild(document.createTextNode(array_done[i]));
    newTask.setAttribute('draggable','true');
    
    newTask.addEventListener('dragstart',()=>{
      newTask.classList.add('is-dragging');
    
    })
    newTask.addEventListener('dragend',()=>{
      newTask.classList.remove('is-dragging');
          
      updata_toDo();
      updata_doing();
      updata_done();
      // showTask_doing();
    
       
          
    })
    localStorage.setItem('task_done',JSON.stringify(array_done));
    done.appendChild(newTask);

    }

  }

}
showTask_done();







// form.addEventListener('submit', e=>{
//  e.preventDefault();
//  const newTaskText =todo_input.value;
//  if(todo_input.value =='') return ;
//  const newTask=document.createElement('p');
//     newTask.classList.add('task');
//     newTask.setAttribute('draggable','true');
//     newTask.innerHTML=newTaskText;

//     // newTask.addEventListener('dragstart',()=>{
//     //   newTask.classList.add('is-dragging');
//     // })
//     // newTask.addEventListener('dragend',()=>{
//     //   newTask.classList.remove('is-dragging');
//     // })
//     to_do.appendChild(newTask);
//     todo_input.value='';
// })










