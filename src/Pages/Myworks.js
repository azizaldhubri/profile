import { useContext, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { WindowSize } from '../Context/ContextWindowSize';

export default function Myworks(){
  
  const[isSelected,setIsSelected]=useState('All');
 
       
       const WindowContext=useContext(WindowSize)     
       const backPage=WindowContext.screenshowBlack; 
       const langugeArbic=WindowContext.langugeArbic; 
   function handelChangeApp(e){     
    setIsSelected(e)
   }
   
  
    return(
        <div className="col-lg-12 col-md-12 col-sm-9 col-10     d-flex align-items-center justify-content-center flex-column   mb-5"
        style={{color:(!backPage ===true ) ? '#202224' : 'white' ,marginTop:'60px' }}>
        <div className="col-lg-10 col-md-10 col-12   mt-5 d-flex align-items-center justify-content-center flex-column  
        mb-5 boxShadow " style={{background:backPage ===true ? '#202224':'#e9e9e9' }}>
           {langugeArbic===true ?
           <>           
            <p className="text-center"style={{fontSize:'50px'}}>المشاريع والاعمال</p>         
            <p className="col-lg-10 col-md-10 col-11 m-0 mt-3  fs-4 text-center"> هذه بعض من مشاريعيي الذي عملتها اثناء التدريب.</p>
          </>:
          <>
            <p className="text-center"style={{fontSize:'50px'}}>Works & Projects</p>         
            <p className="col-lg-10 col-md-10 col-11 m-0 mt-3  fs-4 text-center">These are some of my projects that I did during the training.</p>
           
          </>}
           <ul className="d-flex  gap-3 m-3 pb-2    align-content-center ms-3 justify-content-end "
            style={{listStyle:'none' ,           
            direction:"rtl"}}>
                <li>
                    <button className="   selectlist   "
                    style={{background:'0',color:isSelected==='React'?'#ffae00':( backPage ===true  ?'white':'#202224') }}onClick={()=>handelChangeApp('React')}>React </button>
                </li>            
                <li>
                <button className=" selectlist  "
                style={{background:'0',color:isSelected==='JavaScript'?'#ffae00':( backPage ===true  ?'white':'#202224')}}onClick={()=>handelChangeApp('JavaScript')}> JavaScript</button>
                </li>
                <li>
                <button className=" selectlist  "style={{background:'0',color:isSelected==='Html'?'#ffae00':( backPage ===true  ?'white':'#202224')}}onClick={()=>handelChangeApp('Html')}> Html,Css</button>
                </li>
                <li className="  ms-0" style={{ }} onClick={()=>handelChangeApp('All')}>
                <button className=" selectlist"style={{background:'0',color:isSelected==='All'?'#ffae00':( backPage ===true  ?'white':'#202224'),  borderBottom: '1px solid white'}} onClick={()=>handelChangeApp('All')}> All</button>
                </li>
            </ul> 
          
            <div className='w-100     col-lg-12 col-md-12 col-sm-12 col-12  mt-3 d-flex     flex-wrap  '>
              {(isSelected==='Html'|| isSelected==='All') &&
              <>
                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12 d-flex flex-column  '>
                  <img src={require('../img1/css1.JPG')} style={{width:'90%'}} alt=''></img>
                  <p>dashboard with Html ,css</p>                  
                  <a href="/all-apps/dashboard/index.html" target="_blank" rel="noopener noreferrer">dashboard</a>                   
                </div>

                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                  <img src={require('../img1/facebook.JPG')} style={{width:'90%'}} alt=''></img>
                  <p>facebook with Html ,css</p>                                             
                  <a href="/all-apps/‫facebook/facebook.html" target="_blank" rel="noopener noreferrer">dashboard</a>                   
                </div>
              </>}
              
              {(isSelected==='JavaScript'|| isSelected==='All') &&
              <>
                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                  <img src={require('../img1/proj4.JPG')} style={{width:'90%'}} alt=''></img>
                  <p>opensooq with  JavaScript</p>                                                
                  <a href="../all-apps/opensooq/index.html" target="_blank" rel="noopener noreferrer">opensooq</a>                   
                </div>

                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                  <img  src={require('../img1/proj3.JPG')} style={{width:'90%',border:'1px solid white'}} alt=''></img>
                  <p>Crud1 with  JavaScript</p>                                                
                  <a href="/all-apps/cruds_progect/indexi.html" target="_blank" rel="noopener noreferrer">Crud1</a>                   
                </div>
 
                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                  <img src={require('../img1/proj1.JPG')} style={{width:'90%'}}alt=''></img>
                  <p>Crud2 with  JavaScript</p>                                                
                  <a href="/all-apps/custum_bussnis/index.html" target="_blank" rel="noopener noreferrer">Crud2</a>                   
                </div>

                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                  <img src={require('../img1/proj2.JPG')} style={{width:'90%'}} alt=''></img>
                  <p>gameSnake with  JavaScript</p>                                                
                  <a href="/all-apps/snake/snake.html" target="_blank" rel="noopener noreferrer">gameSnake</a>                   
                </div>

                </>}
                {(isSelected==='React'|| isSelected==='All') &&
              <>
                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                   <img src={require('../img1/react1.1.JPG')} style={{width:'90%'}}alt=''></img>
                  <p>gameSnake with  React</p>                                                
                  <Link to="https://ecommerce-tasks-5.vercel.app/" target="_blank" rel="noopener noreferrer">e-commerce</Link>                  
                               
                </div>

                <div className='px-3 py-3 col-lg-6 col-md-12 col-sm-12 col-12    '>
                     <p className='text-end border p-4'>  بناء مشروع عملي لمهام الموظفين ولكن لم اعرض رابط المشروع نظرا لحقوق الملكية 
                   لدى الشركة التي تستخدم الموقع
                  </p>  
                                    
                </div>

                </>}


                
            </div> 
        </div>
                <div className='p-5 d-flex align-items-center justify-content-center flex-column col-lg-10 col-md-10 col-12 col-sm-11  boxShadow p-3 row-10 mb-5 text-center'
                style={{margin:'0 auto',
                  background:backPage ===true ? '#202224':'#e9e9e9' 
                }}>
                  {langugeArbic===true ?<>
                  <p className='m-0 fs-2 col-lg-6 col-12 text-center  '>هل أنت مستعد لبدء مشروعك بلمسة من السحر؟ </p>
                  <p className='m-0 mt-3 fs-4 col-12'
                  style={{color:backPage===true ? '#FFFFFFB3':'#00000080', }}
                  >  دعنا نتواصل ونجسد الأفكار ✨. أنا منفتح على فرص العمل بدوام كامل أو مستقل لإنشاء تجارب ويب مؤثرة</p>
                  </>:
                  <>
                  <p className='m-0 fs-2 col-lg-6 text-center'>Are You Ready to kickstart your project with a touch of magic?  </p>
                  <p className='m-0 mt-3 fs-4'
                  style={{color:backPage ===true ? '#FFFFFFB3':'#00000080', }}
                  >Let's connect and bring ideas to life ✨. I'm open to full-time or freelance opportunities to create impactful web experiences.</p>
                   </>}
                </div>

        </div>
         

        // </section>
    )
}
