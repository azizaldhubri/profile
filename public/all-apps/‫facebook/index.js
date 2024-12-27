

let budy_content=document.getElementById('budy_content');
let text_area=document.getElementById('text_area');

let body_post=document.getElementById('body_post');


let id ;
let datapro;
function delet(){
   localStorage.clear();
   datapro.splice(0);
}


if(localStorage.data !=null){
    datapro=JSON.parse(localStorage.data);

}else {datapro=[]};

// localStorage.setItem('prudect',JSON.stringify(datapro));

//add dragable to event




function add_post(){

let new_post ={
   text_area:text_area.value ,
   id:new Date()
   
  
}
console.log(new_post.id)

datapro.push(new_post);
localStorage.setItem('data',JSON.stringify(datapro)); 
text_area.value='';
show_page();
}


show_page();
function show_page(){


     
     let budy_content=document.getElementById('budy_content');

     budy_content.innerHTML='';
     
   for(let i=datapro.length ;i>=1 ;i--){

      let post=document.createElement('div');
      post.className='post';

      let part_top=document.createElement('div');
      part_top.className='part_top';

      let profil=document.createElement('div');
      profil.className='profil';

      let state=document.createElement('div');
      state.className='state';

      let n_post=document.createElement('div');
      n_post.className='n_post';
      n_post.appendChild(document.createTextNode('Aziz aldhubri'));

      let datee=document.createElement('h6');
      datee.className='datee';
      datee.appendChild(document.createTextNode(datapro[i-1].id));
      n_post.appendChild(datee)


      profil.appendChild(state); 
         
       part_top.appendChild(profil);
       part_top.appendChild(n_post);
    

     
     post.appendChild(part_top);
//-------------------------------------------

let part_bottom=document.createElement('div');
part_bottom.className='part_bottom';

let text_area=document.createElement('textarea');
text_area.className='text_area';

text_area.appendChild(document.createTextNode(datapro[i-1].text_area));



part_bottom.appendChild(text_area);


//------------------------------------------------------------------------------
let contain_post=document.createElement('div');
contain_post.className='contain_post';
//------------------------------------------- div share---------
let share=document.createElement('div');   
share.className='share';

let page_share=document.createElement('div');    
page_share.className='page_share';


let title_share=document.createElement('div');   
title_share.className='title_share';


title_share.appendChild(document.createTextNode('share'));

share.appendChild(page_share);
share.appendChild(title_share);



contain_post.appendChild(share);
//---------------------------------------- div comment
let comment=document.createElement('div');   
comment.className='comment';

let page_comment=document.createElement('div');    
page_comment.className='page_comment';


let title_comment=document.createElement('div');   
title_comment.className='title_comment';


title_comment.appendChild(document.createTextNode('comment'));

comment.appendChild(page_comment);
comment.appendChild(title_comment);
contain_post.appendChild(comment);
//----------------------------------div like
let like=document.createElement('div');   
like.className='like';

let page_like=document.createElement('div');    
page_like.className='page_like';


let title_like=document.createElement('div');   
title_like.className='title_like';


title_like.appendChild(document.createTextNode('like'));

like.appendChild(page_like);
like.appendChild(title_like);
contain_post.appendChild(like);


//---------------------------------------------------------------------
part_bottom.appendChild(contain_post);

post.appendChild(part_bottom);
//-------------------------------------------------------------


  budy_content.appendChild(post);


   }

 
    


}