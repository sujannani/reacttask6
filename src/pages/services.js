import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import service1 from '../images/service1.svg';
import service2 from '../images/service2.svg';
import service3 from '../images/service3.svg';

export function Services(){
    return(
        <div id='services' class="justify-content-center align-items-center text-center row py-5 mx-5">
                <h2 class="text-center">Services</h2>
                <p class='col-lg-6 col-md-8 col-sm-10'>Our team members are experts in all facets of the design industry including: print design, illustration, branding, identity and more.</p>
                <div class='row justify-content-center'>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 my-sm-2 m-3 p-3 align-items-center services'>
                        <img src={service1} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>UI/UX Design</div>
                        <p class='mx-3'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8  card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services'>
                        <img src={service2} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Flutter Developing</div>
                        <p class='mx-3'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services'>
                        <img src={service3} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Web Developing</div>
                        <p class='mx-3'>Why money's in that office, right If she start giving me some bullshit about it ain't there someplace or anywhere.</p>
                    </div>
                </div>
        </div>
    )
}