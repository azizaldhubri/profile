let container=document.querySelector('.container');
let amount=document.getElementById('amount');
let my_mysales=document.querySelector('.my_mysales');
let show_product=document.querySelector('.show_product');
let picpest=document.querySelector('.picpest');
let total_Purches=document.querySelector('.total-Purches')
 let delet=document.getElementById('delete')
 let inpt_delet=document.getElementById('inpt_delet')
let save=document.getElementById('save')
let name_product=document.getElementById('name_product')
let price_product=document.getElementById('price_product')
let name=document.querySelector('.name')
let price=document.querySelector('.price')
let nmbr_purches=0;
let total_price=0 ;
let my_Purches ;

//--------------------------------
save.disabled='true'
delet.disabled=true
name_product.disabled=true
price_product.disabled=true
save.onclick=add_product ;
let data_product;
if(localStorage.storeg_broduct !=null){
    data_product=JSON.parse(localStorage.storeg_broduct);

}else {data_product=[]}

// localStorage.removeItem('storeg_broduct');
// data_product.splice(0);


let info=document.getElementById('info');
let new_product ;
let test_img;
function displayImg(event){
    
     let imgpath=document.querySelector('input[type=file]').files[0];
     let reader = new FileReader();

     reader.addEventListener('load',function(){
    
    test_img=reader.result ;
    if(test_img!=null){

        name_product.disabled=false
        price_product.disabled=false
    }
    info.innerHTML="";
    let tmp_img=document.createElement('img')
    tmp_img.src=reader.result
    info.appendChild(tmp_img)

    

    }, false);
    if(imgpath){
        reader.readAsDataURL(imgpath)
    }
              
}

name_product.onkeyup=chek_inputs ;
price_product.onkeyup=chek_inputs ;

 function chek_inputs(){
    if(name_product.value==''||price_product.value==''||test_img==null ){
        save.disabled=true
    }else{save.disabled=false} 

 }
function add_product(){
          new_product='';
         new_product={
        name:name_product.value ,
        price:price_product.value,
        imge:test_img,
        id:Date.now()
        
   }
   data_product.push(new_product);
    
      localStorage.setItem('storeg_broduct',JSON.stringify(data_product));
       show_producte();
       price_product.value='';
       name_product.value=''
       info.innerHTML='Enter New Product'
       save.disabled=true
        
}

function show_producte(){
    if(data_product.length>0){
        show_product.innerHTML='';
        // viewImg.innerHTML='';
        for(let i=0 ;i<data_product.length;i++){

            let product=document.createElement('div');
            product.classList='product';
            // product.setAttribute('id',data_product[i].id)

            let spn_name=document.createElement('span');
            spn_name.classList='name';            
            spn_name.innerHTML=`${data_product[i].name}  ${data_product[i].price} $` ;
           
             spn_name.setAttribute('id',i);
                      
            let img_01=document.createElement('img'); 
            let picture=data_product[i].imge;
               img_01.src=picture ;

               product.appendChild(img_01);
               product.appendChild(spn_name);
               show_product.appendChild(product);
               container.appendChild(show_product)
          
        }
    }
}
show_producte();
    
   

container.addEventListener('click',(e)=>{
    if(e.target.classList.contains('name')) {
       
        let n=e.target.getAttribute('id')*1 
        Add_purches(data_product[n].name,data_product[n].price)
                      
    }  
   
})

//-------------------------------------------------------------------------------

if(localStorage.product != null){
    my_Purches=JSON.parse(localStorage.product);
}else{my_Purches=[]};

function total_mysales(){
    total_price=0;
    if(my_Purches.length>0){
        for(let i=0 ;i<my_Purches.length;i++){
             total_price+=my_Purches[i].price_product
                }
        
    }
    total_Purches.innerHTML='';
    total_Purches.innerHTML=`Total-price= ${total_price} $`;
}total_mysales();



function nmb_purches(){
    amount.innerHTML='';
nmbr_purches=my_Purches.length ;
amount.appendChild(document.createTextNode(nmbr_purches));


}nmb_purches();


// localStorage.removeItem('product');
// my_Purches.splice(0);
        
picpest.onmouseenter=showPurches ;
show_product.onmouseenter=hidePurches ;

my_mysales.onmouseleave=hidePurches ;

function Add_purches(name_product,price){
    let new_purches={
        
        name:name_product.toLowerCase() ,
        price_product:+price
        
    }
    my_Purches.push(new_purches);
    
      localStorage.setItem('product',JSON.stringify(my_Purches))
    amount.innerHTML='';
    nmbr_purches=my_Purches.length ;
    amount.appendChild(document.createTextNode(nmbr_purches));
    total_price+=+price;
  
    
}
function showPurches(){
    my_mysales.classList.add('active')
    let table='';
    if(my_Purches.length>0){
        for(let i=0 ;i<my_Purches.length;i++){
            table+=`
            
            <tr>
                <td>${my_Purches[i].name}</td>
                <td>${my_Purches[i].price_product}</td>
                <td><button onclick='delet_sales(${i})'>delet</button></td>
                
            </tr>
            
           
            `
        }
       

    }
    let t_body=document.querySelector('.t_body')
        
    t_body.innerHTML=table;

    total_mysales();
}

function hidePurches(){
    my_mysales.classList.remove('active')
}

function delet_sales(i){
       my_Purches.splice(i,1);
    localStorage.setItem('product',JSON.stringify(my_Purches));
 
    showPurches();
    nmb_purches();
    total_mysales();

}

let del ;
function srch_product(srch){
    delet.disabled=true
    if(data_product.length>0){
               for(let i=0 ;i<data_product.length;i++){
            if(srch==data_product[i].name){
               
                delet.disabled=false;
                del=i

            }
            
        }
    }

}

delet.onclick=delet_product;
function delet_product(){
   
    data_product.splice(del,1);
    localStorage.setItem('storeg_broduct',JSON.stringify(data_product));
    show_producte();
    delet.disabled=true ;
    inpt_delet.value='';
}

function search_pruduct(srch){
    show_product.innerHTML='';
    if(data_product.length>0){
            for(let i=0 ;i<data_product.length;i++){
            // if(data_product[i].name.includes(value.toLowerCase())
            
            if(data_product[i].name.includes(srch.toLowerCase())){
                let product=document.createElement('div');
                        product.classList='product';
                                
                        let spn_name=document.createElement('span');
                        spn_name.classList='name';            
                        spn_name.innerHTML=`${data_product[i].name}  ${data_product[i].price} $` ;
                       
                         spn_name.setAttribute('id',i);
                                  
                        let img_01=document.createElement('img'); 
                        let picture=data_product[i].imge;
                           img_01.src=picture ;
                                    
                           product.appendChild(img_01);
                           product.appendChild(spn_name);
                           show_product.appendChild(product);
                           container.appendChild(show_product)                      
                              
                
            }
            
        }
    }
}
