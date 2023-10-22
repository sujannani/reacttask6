import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import service1 from '../images/service1.svg';
import service2 from '../images/service2.svg';
import service3 from '../images/service3.svg';

export function Services(){
    return(
        <div id='services' class="justify-content-center align-items-center text-center row py-5 mx-5">
                <h2 class="text-center">Services</h2>
                <p class='col-lg-6 col-md-8 col-sm-10'>In Flutter development, web development, and UI design, I specialize in creating unified cross-platform mobile applications, dynamic web experiences, and visually striking interfaces. Elevate your digital presence with a blend of innovation and design excellence.</p>
                <div class='row justify-content-center'>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 my-sm-2 m-3 p-3 align-items-center services'>
                        <img src={service1} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>UI/UX Design</div>
                        <p class='mx-3'>Crafting visually captivating interfaces that seamlessly merge aesthetics with functionality. Elevate your user experience with a touch of design excellence.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8  card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services'>
                        <img src={service2} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Flutter Developing</div>
                        <p class='mx-3'>Specializing in Flutter development to create cross-platform mobile applications with a focus on seamless user experiences. Transform your ideas into innovative and responsive digital solutions.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services'>
                        <img src={service3} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Web Developing</div>
                        <p class='mx-3'>Bringing concepts to life through web development, I create interactive and dynamic online experiences. Elevate your online presence with modern and responsive design solutions.</p>
                    </div>
                </div>
        </div>
    )
}