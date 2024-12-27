import { useContext, } from "react";
import { WindowSize } from "../Context/ContextWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Header(props){
        
         const WindowContext=useContext(WindowSize)
         const windowSize=WindowContext.windowSize;  

         const backPage=WindowContext.screenshowBlack;   
         const setbackPage=WindowContext.setScreenShowBlack;  

         const setlanguge=WindowContext.setLangugeArbic;  
         const LangugeArbic=WindowContext.langugeArbic ;    

 
      const style_linke={
        color:backPage ?'white':'black',
        textDecoration:'none'

      } 
     
    return (
         <div className="  mt-0  border rounded d-flex align-items-center justify-content-between  flex-wrap container mb-3"
            style={{height:windowSize >441 ?'60px':'80px',width:'85%',margin: 'auto',
                background:backPage ? '#202224':'#e9e9e9' ,  
                position:'fixed',
                zIndex:2,
                top:0 ,
                
            }}>
                <div className="d-flex  gap-2       "
                 style={{                   
                margin:windowSize <441 &&'auto'
                }}>
                {LangugeArbic===true ?
                <p className="m-0 fs-4 ms-3">عزيز الضبري</p>:
                <p className="m-0 fs-4 ms-3">Aziz Aldhubri</p>}
                <img src={require('../imges/aziz.jpg')} width={30}height={30} style={{borderRadius:'100%', marginTop:'3px'}} alt=""></img>
                </div>
                {windowSize >765&&
                    <div className="d-flex align-items-center justify-content-between gap-3 m-0   "  
                    style={{color:'white'}} > 
                         {!LangugeArbic===true ?
                         <>
                            <Link to="/"  style={style_linke} > Home </Link>
                          
                            </>:
                            <>
                            <Link to="/"  style={style_linke} > الرئيسية </Link>
                        
                         </>
                         }
                           <Link to="About" style={style_linke} >About </Link>
                           <Link to="Works" style={style_linke}>Works </Link>
                    </div>
                      }
                <div className="d-flex align-items-center justify-content-between gap-3   "
                style={{   margin:windowSize <441 &&'auto'}}>
                    <div
                    onClick={()=>{ setlanguge(prev =>!prev)}}                    
                    >
                        <div className="border d-flex align-items-center me-3"
                        style={{width:'60px',height:'18px' ,borderRadius:'25px', cursor:"pointer",position:'relative'}}>
                            <div  className="border border-3"
                            style={{width:'20px',height:'20px',borderRadius:'50%',
                                cursor:"pointer",
                            //   marginLeft:props.screenshowBlack? '0':'40%',
                            position:"absolute",
                            right:! LangugeArbic && 0 ,
                                background:!backPage ?'black':'white'
                            }}>
                            
                            

                        </div>
                        
                        {! LangugeArbic ?
                                <p  className="m-0"     style={{
                                    color:backPage?"white":'#535334',fontSize:'22px ',                                
                                    position:"absolute",
                                    fontWeight:"bold"
                                }}>Ar</p>:
                                 <p className="m-0"     style={{
                                    color:backPage?"white":'#535334',fontSize:'22px ',                                 
                                    position:"absolute",
                                    fontWeight:"bold",
                                    right:0
                                }}>En</p>
                                }

                    </div>
                                
                    </div> 
                    <div                  
                     onClick={()=>setbackPage(prev =>!prev)}
                    >
                        <div className="border d-flex align-items-center me-3"
                        style={{width:'60px',height:'18px' ,borderRadius:'25px', cursor:"pointer",position:'relative'}}>
                            <div  className="border border-3"
                            style={{width:'20px',height:'20px',borderRadius:'50%',
                                cursor:"pointer",
                            //   marginLeft:props.screenshowBlack? '0':'40%',
                            position:"absolute",
                            right:! backPage && 0 ,
                                background:!backPage ?'black':'white'
                            }}>                      
                            

                        </div>
                        
                        {! backPage ?
                                <FontAwesomeIcon icon={faMoon}
                                style={{color:"#535334",fontSize:'25px ',                                
                                    position:"absolute",
                                    fontWeight:"bold"
                                }} />:
                                <FontAwesomeIcon icon={faSun}  
                                    style={{color:" yellow ",fontSize:'20px',
                                        position:"absolute",
                                        right:0
                                    }} />
                                }

                    </div>
                                
                    </div> 
                   
                </div>
            </div> 
    )
}