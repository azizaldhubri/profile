
let name=document.getElementById('name');
let phone=document.getElementById('phone');
let address=document.getElementById('address');
let city=document.getElementById('city');
let search=document.getElementById('search');
let delet=document.getElementById('delet');
let update=document.getElementById('update');
let save=document.getElementById('save'); 
let bdy=document.querySelector('.bdy'); 
let deletAll=document.getElementById('deletAll'); 
let srch=document.getElementById('srch');

let mod= 'save' ;
let tmp =0 ;

let datapro ;
// // datapro.splice(0);
// localStorage.clear(data_custom)
if(localStorage.data_custom != null){
    datapro=JSON.parse(localStorage.data_custom) ;
}else{ datapro=[]}

save.onclick=add_customer ;
deletAll.onclick=deletAl;

function add_customer(){
if(name.value=='') {return ;} 
   
     let newcustom ={
        name:name.value.toLowerCase(),
        phone:phone.value,
        address:address.value ,
        city:city.value
    }
    if(mod=== 'save'){datapro.push(newcustom);}
    else{datapro[tmp]=newcustom;
    mod='save';
    save.innerHTML='Save';} 
   
    
    localStorage.setItem('data_custom',JSON.stringify(datapro));
    showData();
    clear() ;
    
}
showData();
function showData(){
    let table ='' ;
    if(datapro.length>0){
       
        for(let i=0 ;i<datapro.length;i++){
           table +=` <tr><td>${i}</td>
           <td>${datapro[i].name}</td>
           <td>${datapro[i].phone}</td>
           <td>${datapro[i].address} </td>
           <td>${datapro[i].city} </td>
           <td><button onclick=update_data(${i})>تحديث</button> </td>
           <td> <button onclick=deletee(${i})>حذف</button></td>
           
           
       </tr>`
        }

       
      
       
    }
    bdy.innerHTML=table ;
}
function clear(){
   name.value='' ;
    phone.value='';
 address.value='' ;
   city.value=''
}
function update_data(i){
    
   
    name.value=datapro[i].name ;
    phone.value=datapro[i].phone;
 address.value=datapro[i].address ;
   city.value=datapro[i].city ;
   mod= 'update' ;
 tmp =i ;
 save.innerHTML='Update';
//  add_customer();
}

function deletee(i){
    
    datapro.splice(i,1);
    localStorage.setItem('data_custom',JSON.stringify(datapro));
    showData();

}

function deletAl(){
    let confirm_delet= confirm('Are You Sure Delete All');
    if(confirm_delet ==false) return ;
    datapro.splice(0);
    localStorage.setItem('data_custom',JSON.stringify(datapro));
    showData();

}

function Searche(value){

    console.log(value.toLowerCase());
    let table='';

    if(datapro.length>0){
        for(let i=0 ; i<datapro.length;i++){
            // if(datapro[i].title.includes(value.toLowerCase()))
            
            if(datapro[i].name.includes(value.toLowerCase())){

              
            table +=` <tr><td>${i}</td>
            <td>${datapro[i].name}</td>
            <td>${datapro[i].phone}</td>
            <td>${datapro[i].address} </td>
            <td>${datapro[i].city} </td>
            <td><button onclick=update_data(${i})>تحديث</button> </td>
            <td> <button onclick=deletee(${i})>حذف</button></td>
            
            
        </tr>`
         }
       
           
        }
        
 
        
       
        
     
     bdy.innerHTML=table ;




        


    }

}