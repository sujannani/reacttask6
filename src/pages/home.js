import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import profileImage from '../images/sujan.jpg';
import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';
import string2 from '../images/string2.svg';

import '../styles/home.css';

export function Home(){
    return(
        <div id='home' className="row p-5 justify-content-center container col-10" style={{marginTop:'100px'}}>
            <div class='col-10 col-lg-7 col-md-9 col-sm-10 ms-lg-5 z-3'>
                <p class='h5'>Hello, I am</p>
                <h1 class="text-success">Sujan</h1>
                <div class='d-flex flex-row align-items-md-end '>
                   <h1 class='h1' style={{fontSize:'54px'}}>UI & UX Designer</h1>
                   <span style={{width:'10px'}}></span>
                   <div class="bg-success rounded" style={{height:'10px',width:'10px'}}></div>
                </div>
                <p class='col-lg-7 col-md-10 col-sm-12'>AI/ML student at VIT, familiar with Flutter, web development, and UI design. Enthusiastic about learning and solving tech challenges.</p>
                <div class="d-flex flex-row justify-content-around col-lg-4 col-sm-10">
                    <a href="https://github.com/sujannani" target='_blank'><img src={github}/></a>
                    <a href="https://www.instagram.com/_sujan12_/" target='_blank'><img src={instagram}/></a>
                    <a href="https://www.linkedin.com/in/sujan-kommalapati-aaa250227/"><img src={linkedin}/></a>
                    <a href="https://www.instagram.com/_sujan12_/"><img src={twitter}/></a>
                </div>
                <button class="btn btn-success mt-4" onClick={()=>{window.open('https://docs.google.com/document/d/1zlvHcFkp9GEImm_I_VAprmaOwnLt8ovK/edit?usp=sharing&ouid=104923872672109735445&rtpof=true&sd=true', '_blank');}}>Resume</button>
            </div>
               <img src={string2} class="col-5 image-fluid" style={{position:'absolute',paddingTop:'160px'}}/>
            <div class='col-1'>
                  <div class="bg-success img" style={{borderRadius:'50%',height:'550px',width:'370px',transform: 'rotate(45deg)',position:'absolute'}}></div>
                  <img class="img-fluid " src={profileImage} style={{height:'500px',borderRadius:'50%',position:'absolute'}}/>
            </div>
        </div>
    )
}   