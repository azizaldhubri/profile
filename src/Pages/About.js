import { useContext, useState } from "react"; 
import { WindowSize } from "../Context/ContextWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGithub,   faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";  
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function About(){   
         const WindowContext=useContext(WindowSize)     
         const backPage=WindowContext.screenshowBlack; 
         const langugeArbic=WindowContext.langugeArbic; 
   
     const phoneNumber = '967770515088';  
     const message = 'مرحباً! كيف يمكنني مساعدتك؟';  
     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

     const email = 'azizaldhubri@gmail.com'; // استبدل بعنوان البريد الإلكتروني الخاص بك
   
   
      const mailtoLink = `mailto:${email}`
    const[screenshowBlack,setScreenShowBlack]=useState(true)
    function handelChangescreenshow(){
        setScreenShowBlack(!screenshowBlack)
    }
     
            {/* <TabsWithBackground/> */}
            {/* <Skills skills={mySkills} /> */}
    return(
        <div className="w-100     d-flex  justify-content-center align-items-center flex-column "
        style={{background:backPage ?'#1a1a1a':'white' ,
            color:backPage ?'white':'black',     

         }}>
            
             
             <section id="Home" className="   m-0  col-lg-12 col-sm-12 col-12 col-md-12   d-flex  justify-content-center  flex-wrap mt-5 ">
                <div className="col-lg-10 col-sm-12 col-12 col-md-10 m-3 mt-5     
                     d-flex  justify-content-center  flex-wrap  gap-5      mb-3 pb-3    "  >
                  
                  <div className="  boxShadow col-lg-4 col-sm-8 col-md-5 col-10   d-flex align-items-center flex-column  gap-2 mt-2  "
                    style={{                     
                      background:backPage ? '#202224':'#e9e9e9' , }}>
                      <img                       
                      src={require('../imges/aziz.jpg')}
                      style={{borderRadius:'100%',width:'100%',maxWidth:'300px'}} alt="" ></img>
                           {langugeArbic===true ?<>
                          <h3>عزيز الضبري</h3>
                          <h4 className="text-center" style={{color:backPage ?'white ':'#444'}}>أنا احول الحلم الى حقيقة</h4>
                          <p className="mt-3"> للتواصل معي :</p>
                        </>
                        :<>
                          <h3>Aziz Aldhubri</h3>
                          <h4  className="text-center" style={{color:backPage ?'white ':'#444'}}>I'm turning ideas into reality.</h4>
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
               
                    <div className="mt-2 fs-5  px-3 py-2 d-flex align-items-between  flex-column boxShadow  gap-3 col-md-5  col-lg-7 col-sm-8 col-10  " 
                      style={{ background:backPage ? '#202224':'#e9e9e9' ,  }}>
                      {langugeArbic===true ?<>                 
                      <p className="m-0  fs-3 text-center">                     
                       مرحبًا! أنا عزيز الضبري، مطور واجهة المستخدم    
                      </p>
                      <p  className="text-end" style={{color:backPage ==true ? '#FFFFFFB3':'#00000080',}}>
                        المؤهل العلمي :حاصل على درجة الباكالاريوس  نظم معلومات بنسبة جيد جدا من جامعة صنعاء
                        
                        </p> 
                      <p  className="text-end" style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                        الدورات التدريبية
                        
                        </p> 
                      <p  className="text-end" style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                        دورة في تحليل البيانات , Html,css , bootstrap , laravel ,react
                        </p> 
                      <p  className="text-end" style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                       عملت عدة مشاريع وبإشراف مبرمج محترف 
                        </p> 
                        
                        <a href='/files/cv2.pdf' download="cv2.pdf"  className=" rounded fs-3 ps-1 pe-1 text-end"
                        style={{background:'#ffae00',color:'black'}}  > تحميل السيرة الذاتية </a>
                          
                          </>:
                          <>
                              <p className="m-0  fs-3 ">
                      Hello! I’m Aziz Aldhubri, a Frontend Developer.
                      </p>
                      <p  style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                      Academic qualification: Bachelor’s degree in Information Systems with a very good grade from Sana’a University.

                        </p>
                        <p className="m-0" style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                        Training courses
                        </p>

                        <p style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                        Course in data analysis, Html, CSS, Bootstrap, Laravel, React                      
                        
                        </p> 
                        <p style={{color:backPage ===true ? '#FFFFFFB3':'#00000080',}}>
                        I worked on several projects under the supervision of a professional programmer.
                        </p> 
                       
                        <a href='/files/cv2.pdf' download="cv2.pdf"    className=" rounded fs-3 ps-1 pe-1 "
                        style={{background:'#ffae00',color:'black'}}  >Downlaod Cv </a>
                          </>
                          
                        } 
                        </div>              
                
               </div>

            </section>

             
           
           

           

        </div>
    )
}