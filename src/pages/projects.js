import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import service1 from '../images/service1.svg';
import service2 from '../images/service2.svg';
import service3 from '../images/service3.svg';

export function Projects(){
    return(
        <div id='projects' class="justify-content-center align-items-center text-center row py-4 mx-5">
                <h2 class="text-center">Projects</h2>
                <p class='col-lg-6 col-md-8 col-sm-10'>My recent projects in Ui, Flutter and React</p>
                <div class='row justify-content-center'>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 my-sm-2 p-3 m-3 align-items-center services text-lg-start'>
                        <img src={service1} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>TechTeach</div>
                        <div class='h6'>Admin DashBoard Ui Design</div>
                        <div class='col-12'>
                            <div class='col-3 ms-3 my-2 card bg-success' style={{height:'5px'}}></div>
                        </div>
                        <p class='mx-3'>A carefully crafted Admin Dashboard UI. It's all about making data management a breeze. I focused on keeping things clear, functional, and looking sharp.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8  card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services text-lg-start'>
                        <img src={service2} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Tic Tac Toe</div>
                        <div class='h6'>Flutter Based Application</div>
                        <div class='col-12'>
                            <div class='col-3 ms-3 my-2 card bg-success' style={{height:'5px'}}></div>
                        </div>
                        <p class='mx-3'>A fun and interactive mobile application that brings the classic game to life on the digital platform. This project demonstrates my proficiency in Flutter for mobile, web, and desktop from a single codebase.</p>
                    </div>
                    <div class='col-lg-3 col-md-6 col-sm-8 card m-lg-5 m-md-3 m-sm-1 m-3 p-3 align-items-center services text-lg-start'>
                        <img src={service3} class="card-image-top img-fluid col-6 mb-3"/>
                        <div class='h5'>Portfolio</div>
                        <div class='h6'>React Based Website</div>
                        <div class='col-12'>
                            <div class='col-3 ms-3 my-2 card bg-success' style={{height:'5px'}}></div>
                        </div>
                        <p class='mx-3'>A sleek portfolio built with React! This isn't just a static display; it's a responsive design that adapts seamlessly to various screen sizes.</p>
                    </div>
                </div>
        </div>
    )
}