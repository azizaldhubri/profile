import { useContext} from "react";
 
import TabsWithBackground from "./TabsWithBackground";
import { WindowSize } from "../Context/ContextWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub,  faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import './TabsWithBackground.css' ;
import '../index.css';
import Myworks from "./Myworks";
 
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 

export default function Home(){
     
     const WindowContext=useContext(WindowSize)     
     const backPage=WindowContext.screenshowBlack; 
     const langugeArbic=WindowContext.langugeArbic ;

     const phoneNumber = '967770515088';  
     const message = 'مرحباً! كيف يمكنني مساعدتك؟'; 
     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     const email = 'azizaldhubri@gmail.com';  
   
    
      const mailtoLink = `mailto:${email}`
            
    return(
        <div className="w-100     d-flex  justify-content-center align-items-center flex-column mt-5 "
        
    >
            
             
                <div className="col-lg-10 col-sm-12 col-12 col-md-10   mt-5    
              d-flex  justify-content-center  flex-wrap  gap-5           " style={{marginBottom:'-50px'}}  >
                  
                  <div className="  boxShadow col-lg-4 col-sm-8 col-md-5 col-10   d-flex align-items-center flex-column  gap-2 mt-2  "
                    style={{                     
                      background:backPage ? '#202224':'#e9e9e9' , }}>
                      <img                       
                      src={require('../imges/aziz.jpg')}
                      style={{borderRadius:'100%',width:'100%',maxWidth:'300px'}}  alt=""></img>
                      {langugeArbic===true ?<>
                          <h3>عزيز الضبري</h3>
                          <h4 style={{color:backPage ?'white ':'#444'}}>أنا احول الحلم الى حقيقة</h4>
                          <p className="mt-3"> : للتواصل معي  </p>
                        </>
                        :<>
                          <h3>Aziz Aldhubri</h3>
                          <h4 style={{color:backPage ?'white ':'#444'}}>I'm turning ideas into reality.</h4>
                          <p className="mt-3">  To contact me via:</p>
                       </>
                      }
                      <div className="d-flex align-items-center   justify-content-center gap-4  w-50 mb-3  p-2 fs-3" 
                      style={{ margin:'auto'}}> 
                          <Link to='https://www.facebook.com/profile.php?id=100004740935402'>
                          <FontAwesomeIcon icon={faFacebook} />
                          </Link>                      
                          <Link to='https://github.com/azizaldhubri'>
                          <FontAwesomeIcon icon={faGithub} style={{color:backPage?'white':'black' , }} />
                          </Link>                             

                          <Link to={waLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon  icon={faWhatsapp} style={{color:'green'}}/>        
                          </Link>

                          <Link to={mailtoLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon  icon={faEnvelope} style={{color:'red'}}/>        
                          </Link>                 
                          
                          
                      </div>
                      
                  </div>
                <div className=" 
                  col-lg-7 col-sm-8 col-md-5 col-10 d-flex align-items-center  
                  justify-content-between  flex-column    gap-5    mt-2   " style={{flex:1}}>
                    <div className="px-3 py-2 d-flex align-items-between  flex-column boxShadow  gap-3 col-md-12  col-lg-12 col-sm-8 col-10  " 
                    style={{ background:backPage ? '#202224':'#e9e9e9' ,  }}>
                      {langugeArbic===true ?
                      <p className="m-0 text-end   "> مرحبا بك</p>: 
                      <p className="m-0 text-start   ">Hello There!</p> }
                      {langugeArbic===true ?
                       <p className="m-0 fs-2 text-end "> 
                          أنا عزيز الضبري، مطور واجهة أمامية أقوم بإنشاء تجارب ويب سلسة باستخدام أكواد نظيفة  وتقنيات حديثة</p> 
                      : <p className="m-0 fs-2 ">I'm Aziz Aldhubri, a frontend developer creating seamless web experiences 
                          with clean code and modern technologies.</p>}       

                         
                          <a href='/files/cv2.pdf' download="cv2.pdf" className=" rounded fs-3 ps-1 pe-1 "
                        style={{background:'#ffae00',color:'black'}}  >
                          {!langugeArbic===true ?<p className="m-0">Downlaod Cv</p>  :<p  className="m-0 text-end">تحميل السيرة الذاتية</p>}  </a>
                        </div>
                    <div className="   mt-2 boxShadow p-3 col-md-12  col-lg-12 col-sm-8 col-10 "style={{
                      background:backPage ? '#202224':'#e9e9e9' ,  
                    }}>
                          <TabsWithBackground/>                        
                    </div>
                  </div>
               </div>
 
            
              
            <Myworks 
             color={backPage}
            />
                 

        </div>
    )
}