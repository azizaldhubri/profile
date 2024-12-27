import { useContext, useState } from "react"; 
import { WindowSize } from "../Context/ContextWindowSize"; 
import { Outlet } from "react-router-dom";
import './TabsWithBackground.css' ;
import '../index.css'; 
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function HomePage(){
     
     const WindowContext=useContext(WindowSize) 
     const windowSize=WindowContext.windowSize;  
     const backPage=WindowContext.screenshowBlack;      
      
          
 
    return(
        <div className="w-100     d-flex  justify-content-center align-items-center flex-column "
        style={{background:backPage ?'#1a1a1a':'white' ,
            color:backPage ?'white':'black',     

         }}>
                <Header/>
                <Outlet/>        
              { windowSize<765&&
                 <Footer/> 
              }

           

       </div>
    )
}