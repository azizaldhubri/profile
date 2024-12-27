
let note=document.querySelector('#note')
let gameOver=false ;
let lastRenderTime =0 ;

let state=0 ;
function stop(){
    state=1 ;

}
function start(){
    state=0 ;

}



const gameBoard=document.getElementById('game-board')


function main(currentTime){
    // console.log('test')
   
    if(gameOver){
        if(confirm( 'Youe lost.press ok to restart .')){
            window.location="";
        }
        return ;     
    }
    window.requestAnimationFrame(main);
 const secondsSincelastRender=(currentTime-lastRenderTime)/1000 ;
 if(secondsSincelastRender<1/SNAKE_SPEED) return ;

 lastRenderTime=currentTime ;

updatee();
draw();

}

window.requestAnimationFrame(main);

 function updatee(){
    updateFood();
    updateSnake();
    checkDeath();
 }

 function draw(){
    gameBoard.innerHTML='';

    drawSnake(gameBoard);
    drawFood(gameBoard);
 }

 function checkDeath(){
     gameOver=outsideGrid(getSnakeHead())|| snakeIntersection();
 }

 //------------------------
let SNAKE_SPEED= 3 ;
 let spn=document.getElementById('spn');



function select_speed(value){
 
    // addEventListener('keydown', (e)=>{

    //     switch(e.key){ case 'ArrowDown':  break;
    //     case 'ArrowUp':  break; }})
   
    if(value==='سهل') { 
        SNAKE_SPEED=3 ;
        
        spn.innerHTML=' المستوى السهل'
    }
   
     else if (value==='متوسط') {
          SNAKE_SPEED=5 ;
          spn.innerHTML='المستوي  المتوسط'
       }
        
        
    else if(value==='صعب') {
        spn.innerHTML='المستوى الصعب'
     SNAKE_SPEED=10 ;
    }
    
}


let newSegment =0;
const snakeBody=[

    {x:11,y:11}
   
]

// export
 function updateSnake(){
    
    addSegment();
    console.log(snakeBody.length)
   
    if(state==1) return ;
  let inputDirection=  getInputDirection();
    for(let i=snakeBody.length-2;i>=0 ;i--){
        snakeBody[i+1]={...snakeBody[i]};
    }
    snakeBody[0].x +=inputDirection.x;
    snakeBody[0].y +=inputDirection.y;

    
}




// export 
function  drawSnake(gameBoard){
    
    snakeBody.forEach(segment =>{
        const snakeElement=document.createElement('div');
        snakeElement.style.gridColumnStart= segment.x ;
        snakeElement.style.gridRowStart= segment.y ;
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement);


    });

 }

  function expandSnake(amount){
      newSegment +=amount ;
 }

 function onSnake(position,{ignorHead=false}= {}){
    return snakeBody.some((segment, index) =>{

        if (ignorHead && index===0) return false;

        return equalPositions(segment,position)
    })
}

// export
 function  getSnakeHead(){
    return snakeBody[0];
}

// export 
function snakeIntersection(){

    return  onSnake (snakeBody[0],{ignorHead:true})


}

 function equalPositions(pos1,pos2){
    return(
        pos1.x===pos2.x && pos1.y===pos2.y
    )
}

function addSegment(){

    for(let i=0 ;i<newSegment ;i++){

        snakeBody.push({...snakeBody[snakeBody.length-1]});

        // snakeBody[snakeBody.length]={...snakeBody[snakeBody.length-1]}
    }
    newSegment=0 ;
}


///        input snake

let inputDirection ={x: 0 , y: 0};
let lastInputDirection={x: 0 , y: 0}



addEventListener('keydown', (e)=>{   


    switch(e.key){
            case 'ArrowUp':
                if(lastInputDirection.y !==0 )break;
                note.innerHTML='';
               inputDirection={x:0 ,y:-1};
                 break;
            case 'ArrowDown':
                if(lastInputDirection.y !==0 )break;
                note.innerHTML='';
               inputDirection={x:0 ,y:1};
                 break;
            case 'ArrowLeft':
                if(lastInputDirection.x !==0 )break;
                note.innerHTML='';
               inputDirection={x:-1 ,y:0};               
                 break;
           case 'ArrowRight':
            if(lastInputDirection.x !==0 )break;
            note.innerHTML='';
               inputDirection={x:1 ,y:0};
                 break;
            default:
                break   

    }
})

// export 
function getInputDirection(){
    lastInputDirection=inputDirection;


    return inputDirection;}

    //------------------------------------gride snake

const GRID_SIZE=21
// export 
function randomGridPosition(){
    return{
        x:Math.floor(Math.random()*GRID_SIZE)+ 1,
        y:Math.floor(Math.random()*GRID_SIZE) +1
    
    }

    }

    // export
     function outsideGrid(position){
        return(

        position.x<1 ||
         position.x>GRID_SIZE ||
        position.y<1  ||
         position.y>GRID_SIZE
        )
    }
    // -----------------------------------------------------food snake
let food=getRandomFoodPosition() ;

const EXPANSION_RATE =1;   // مقدار الزياده للثعبان عندما ياكل قطعه واحده
// export 
function updateFood(){
   if(onSnake(food)){
       expandSnake(EXPANSION_RATE)
       food=getRandomFoodPosition();
   }
     
  }
  

   function drawFood(gameBoard){
      
          const foodElement=document.createElement('div');
          foodElement.style.gridColumnStart= food.x ;
          foodElement.style.gridRowStart= food.y ;
          foodElement.classList.add('food')
          gameBoard.appendChild(foodElement);
        
  
   }

   function getRandomFoodPosition(){
       let newFoodPosotion;
       while(newFoodPosotion==null || onSnake(newFoodPosotion)){
           newFoodPosotion=randomGridPosition();
       }

       return newFoodPosotion ;
   }



   
