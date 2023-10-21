import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
export function Nav(){
    const [click,setClick]=useState(1);
    return(
        <nav class='navbar navbar-expand-sm d-flex flex-row justify-content-between px-4 rounded shadow fixed-top bg-light col-lg-12 col-sm-6'>
             <div class="container-fluid col-12">
                <div class="navbar-brand d-flex flex-row  align-items-center">
                    <h1 class='btn btn-success'>S</h1>
                    <span style={{width:'5px'}}></span>
                    <a href="#" class="nav-link h1 col-1">Gnana Tirumala Sujan</a>
                </div>
                <button
                    class='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span class='navbar-toggler-icon'></span>
                </button>
                <div class='collapse navbar-collapse col-11 justify-content-around' id='navbarSupportedContent'>
                    <div className="col-lg-3 col-md-3 col-sm-2"></div>
                    <ul class='navbar-nav justify-content-center'>
                        <li class="nav-item"><a href="#home"  class={(click===1)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(1)}>Home</a></li>
                        <li class="nav-item"><a href="#about"  class={(click===2)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(2)}>About</a></li>
                        <li class="nav-item"><a href="#services"  class={(click===3)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(3)}>Services</a></li>
                        <li class="nav-item"><a href="#projects"  class={(click===4)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(4)}>Projects</a></li>
                        <li class="nav-item"><a href="#skills" class={(click===5)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(5)}>Skills</a></li>
                        <li class="nav-item"><a href="#contact" class={(click===6)?`nav-link text-light btn bg-success mx-2`:`nav-link text-dark btn mx-2`} onClick={()=>setClick(6)}>Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}