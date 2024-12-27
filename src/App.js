 import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
 
import './Pages/TabsWithBackground.css';
import About from './Pages/About';
import Myworks from './Pages/Myworks';
import Header from './component/Header';
import Home from './Pages/Home';


function App() {
  return (
    <div className="App h-100"style={{height:'100vh'}}>
      {/* <HomePage/> */}
      
      <Routes>
          
        <Route path='/' element={<HomePage/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/works' element={<Myworks/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          
        </Route>         
         
      </Routes>
      
    </div>
  );
}

export default App;
// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       {/* Header Section */}
//       <header className="d-flex justify-content-between align-items-center px-4 py-3 bg-dark text-white">
//         <h2>Fouda</h2>
//         <nav>
//           <a href="#home" className="mx-2 text-white text-decoration-none">Home</a>
//           <a href="#about" className="mx-2 text-white text-decoration-none">About</a>
//           <a href="#services" className="mx-2 text-white text-decoration-none">Services</a>
//           <a href="#works" className="mx-2 text-white text-decoration-none">Works</a>
//           <a href="#contact" className="mx-2 text-white text-decoration-none">Contact</a>
//         </nav>
//         <button className="btn btn-outline-warning btn-sm">🌙</button>
//       </header>

//       {/* Profile Section */}
//       <section className="container my-5 d-flex justify-content-center align-items-center text-white">
//         <div className="profile-card d-flex flex-column flex-md-row align-items-center">
//           <div className="profile-image me-4">
//             <img
//               src="https://via.placeholder.com/200" 
//               alt="profile"
//               className="rounded-circle"
//             />
//           </div>
//           <div>
//             <h1>Ahmed Fouda</h1>
//             <p>I'm turning ideas into reality.</p>
//             <span className="text-success">🟢 Available for Freelancing</span>
//             <div className="mt-3">
//               <button className="btn btn-warning">Download CV ⬇</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Skills Section */}
//       <section className="container my-5">
//         <h3 className="text-center text-white mb-4">My Skills</h3>
//         <div className="d-flex flex-wrap justify-content-center gap-3">
//           <span className="badge bg-secondary p-2">CSS</span>
//           <span className="badge bg-secondary p-2">JavaScript</span>
//           <span className="badge bg-secondary p-2">Bootstrap</span>
//           <span className="badge bg-secondary p-2">Clean Code</span>
//           <span className="badge bg-secondary p-2">Responsive Design</span>
//           <span className="badge bg-secondary p-2">Web Performance</span>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default App;

