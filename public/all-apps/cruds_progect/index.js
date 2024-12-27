
let title =document.getElementById('title')
let price =document.getElementById('price')
let taxes =document.getElementById('taxes')
let ads =document.getElementById('ads')
let discount =document.getElementById('discount')
let total =document.getElementById('total')
let count =document.getElementById('count')
let category =document.getElementById('category')
let submit =document.getElementById('submit')
let mood = 'create' ;

let tmp ;




// get total
function getTotal()
{
if(price.value != ''){
   let result = (+ price.value + +taxes.value + +ads.value) -(+discount.value );
   total.innerHTML = result ;
   total.style.background ='#040'
}
else{
   total.innerHTML = ' ' ;
   total.style.background ='#a00d02'

}

}



//create prudect
 let datapro ;
if(localStorage.pruduct != null){
    datapro = JSON.parse(localStorage.pruduct)
}else{
    datapro=[] ;
}


submit.onclick  = function(){
   let newPro ={
      title:title.value.toLowerCase(),
      price:price.value,
      taxes:taxes.value,
      ads:ads.value,
      discount:discount.value,
            count:count.value,
      category:category.value.toLowerCase() ,
      total:total.innerHTML

   }

   if(title.value != ''
    && price.value !=''
   
    &&count.value <=100


   
   
   ){
    if(mood=== 'create' ){
        if (newPro.count>1){
            for(let i=0 ;i<newPro.count;i++){
             datapro.push(newPro);
             
     
            }
     
     
        }else{datapro.push(newPro);
           
        };
    
    
    
       }else{
           datapro[tmp]=newPro ;
           mood= 'create' ;
           submit.innerHTML ="Create" ;
           count.style.display ='block';
       }
       clearData();

   }
   

  
   
   // save data in locall storage

   localStorage.setItem('pruduct',JSON.stringify(datapro))
   
   showData()
 
}

//-----




// cleare inputes

function clearData(){

    title.value='' ;
    price.value= '';
    taxes.value='',
    ads.value=''
   discount.value='',
   total.innerHTML = ''
   count.value='' ,
 category.value=''

}



//read

function showData(){
    getTotal();
 let table ='';
 for(let i=0 ;i< datapro.length ;i++){
     table += `
     <tr>
     <td>${i+1}</td>
     <td>${datapro[i].title}</td>
     <td>${datapro[i].price}</td>
     <td>${datapro[i].taxes}</td>
     <td>${datapro[i].ads}</td>
     <td>${datapro[i].discount}</td>
     <td>${datapro[i].total}</td>
     <td>${datapro[i].category}</td>
     <td><button onclick="updateData(${i})" id="update">update</button></td>
     <td><button onclick="deletData(${i})" id="delet">delet</button></td>

     
 </tr>     
         
     `
    
 }
 


document.getElementById('tbody').innerHTML=table;
let btndelet =document.getElementById('deletAll');

if(datapro.length> 0){
    btndelet.innerHTML= `<button onclick ="deleteAll()">deletAll(${datapro.length})</button>`
}else { btndelet.innerHTML= ''}


}showData()




//count

//delete
function deletData(i){
   datapro.splice(i,1);
   localStorage.pruduct =JSON.stringify(datapro);
   showData()


}

// deletall
function deleteAll()
{
    localStorage.clear();
    datapro.splice(0);
    showData()



}
// update
function updateData(i){
    title.value=datapro[i].title ;
    price.value=datapro[i].price ;
    taxes.value=datapro[i].taxes ;
    ads.value=datapro[i].ads ;
    category.value=datapro[i].category ;
    getTotal();
    count.style.display ='none';
    submit.innerHTML ="update" ;
    mood= 'update' ;
    tmp= i ;
    scroll({
        top:0 ,
        behavior:'smooth'
    })

 
}


//search

let searchMood ='title';

function getsearchMood(id){
    let search = document.getElementById('search');

    if(id== 'searchTitle'){
      // search.placeholder = " Search by Title"
        searchMood ='title';
    }else{
        //search.placeholder = " Search by Category";

        searchMood ='category';
    }
            search.placeholder = " Search by "+searchMood;
            search.focus();
            search.value ='';
            showData();

}

function searchData(value)
{
    let table = '';
    for(let i=0 ;i<datapro.length;i++){
if(searchMood=='title'){
        // for(let i=0 ;i<datapro.length;i++){
                if(datapro[i].title.includes(value.toLowerCase())){
                    table += `
            <tr>
            <td>${i}</td>
            <td>${datapro[i].title}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxes}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updateData(${i})" id="update">update</button></td>
            <td><button onclick="deletData(${i})" id="delet">delet</button></td>

            </tr>            
            `           

                }

        // }

}else{
            // for(let i=0 ;i<datapro.length;i++){
                    if(datapro[i].category.includes(value.toLowerCase())){
                        table += `
                <tr>
                <td>${i}</td>
                <td>${datapro[i].title}</td>
                <td>${datapro[i].price}</td>
                <td>${datapro[i].taxes}</td>
                <td>${datapro[i].ads}</td>
                <td>${datapro[i].discount}</td>
                <td>${datapro[i].total}</td>
                <td>${datapro[i].category}</td>
                <td><button onclick="updateData(${i})" id="update">update</button></td>
                <td><button onclick="deletData(${i})" id="delet">delet</button></td>

                </tr>            
                `           

                    }

            // }

}
    }

document.getElementById('tbody').innerHTML=table;

}











// clean data
