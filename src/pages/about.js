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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad iste fugiat architecto aliquid deleniti vel consequuntur molestias quas sapiente laboriosam facere aut? Earum fugiat aut ullam quisquam dolores ratione.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ad iste fugiat architecto aliquid deleniti vel consequuntur molestias quas sapiente laboriosam facere aut? Earum fugiat aut ullam quisquam dolores ratione.</p>
            </div>
            <div class='row'>
                <button className='btn bg-success text-light col-lg-2 col-sm-3 col-3 mx-3'>Hire Me</button>
                <button className='btn border-success text-success border-3 col-lg-2 col-sm-3 col-3 mx-3' onClick={()=>{window.open('https://docs.google.com/document/d/1zlvHcFkp9GEImm_I_VAprmaOwnLt8ovK/edit?usp=sharing&ouid=104923872672109735445&rtpof=true&sd=true', '_blank');}}>Resume</button>
            </div>
        </div>
    </div>
    )
}