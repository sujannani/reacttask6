import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import about from '../images/about.jpg';

export function About(){
    return(
        <div id='about' class="d-flex flex-lg-row flex-column container my-5 col-10 justify-content-center align-items-center" style={{paddingTop:'100px'}}>
        <img class='col-lg-6 col-md-10 col-sm-12 col-12' src={about}/>
        <div class='col-lg-6 col-md-10 col-sm-12 text-lg-start text-md-start text-center'>
            <div>
                <h2>About Me</h2>
                <div class='col-2 bg-success' style={{height:'5px'}}></div>
            </div>
            <div class='my-4'>
                <p>Hello, I'm Gnana Tirumala Sujan, a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning at Vellore Institute of Technology.</p>
                <p>I excel in Flutter development, crafting cross-platform mobile apps with a focus on seamless user experiences. My skills also extend to UI design, where I merge aesthetics with functionality for visually appealing interfaces. Additionally, I'm adept at web development, transforming ideas into dynamic online experiences</p>
                <p>Eager to advance my knowledge, I'm actively seeking opportunities to contribute my skills to innovative projects and continue evolving in the ever-evolving tech landscape.</p>
            </div>
            <div class='row'>
                <button className='btn bg-success text-light col-lg-2 col-sm-3 col-3 mx-3'>Hire Me</button>
                <button className='btn border-success text-success border-3 col-lg-2 col-sm-3 col-3 mx-3' onClick={()=>{window.open('https://docs.google.com/document/d/1zlvHcFkp9GEImm_I_VAprmaOwnLt8ovK/edit?usp=sharing&ouid=104923872672109735445&rtpof=true&sd=true', '_blank');}}>Resume</button>
            </div>
        </div>
    </div>
    )
}