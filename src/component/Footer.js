 import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import { faHome, faList,  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WindowSize } from "../Context/ContextWindowSize";

export default function Footer(){
   const WindowContext=useContext(WindowSize)
         

         const backPage=WindowContext.screenshowBlack; 
    const style_linke={
        color:backPage ?'white':'black',
        textDecoration:'none'
      } 

    return(
        <div className="w-75  m-4 d-flex align-items-center justify-content-between fs-3   "
        style={{
            position:'fixed',
              bottom: "20px",
              zIndex:2
        }}>
            <Link to='/Works'className="d-flex flex-column" style={style_linke}>
              <FontAwesomeIcon icon={faList} /> 
               Works
              </Link>
              <Link to='/'className="d-flex flex-column" style={{color:'#ffae00'}}>
            <FontAwesomeIcon icon={faHome} />
            Home  
            </Link>
            <Link to='/About'className="d-flex flex-column"style={style_linke}>
            <FontAwesomeIcon icon={faAddressCard} /> 
            About 
            </Link>
        </div>
    )
}