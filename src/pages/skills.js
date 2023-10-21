import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import skills from '../images/skills.jpg';


export function Skills(){
    return(
        <div class="justify-content-center align-items-center text-center row" id='skills'>
                <h2>My Skills</h2>
                <div class="justify-content-center align-items-center text-center row py-5 col-10">
                    <img src={skills} class='image-fluid col-lg-4 col-md-6 col-sm-8 container'/>
                    <div class='col-lg-6 col-md-10 col-sm-12 card rounded-4 shadow text-start p-4 m-3'>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>Java</h5>
                                <h5>70%</h5>
                            </div>
                            <div class='my-1 java rounded ' style={{height:'5px'}}></div>
                        </div>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>Python</h5>
                                <h5>75%</h5>
                            </div>
                            <div class='my-1 python rounded' style={{height:'5px'}}></div>
                        </div>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>Flutter</h5>
                                <h5>50%</h5>
                            </div>
                            <div class='my-1 flutter rounded' style={{height:'5px'}}></div>
                        </div>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>HTML,CSS,JavaScript</h5>
                                <h5>60%</h5>
                            </div>
                            <div class='my-1 web rounded' style={{height:'5px'}}></div>
                        </div>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>MySQL</h5>
                                <h5>50%</h5>
                            </div>
                            <div class='my-1 sql rounded' style={{height:'5px'}}></div>
                        </div>
                        <div class='my-1'>
                            <div class='d-flex flex-row justify-content-between'>
                                <h5>React</h5>
                                <h5>40%</h5>
                            </div>
                            <div class='my-1 react rounded' style={{height:'5px'}}></div>
                        </div>
                    </div>
                </div>
            </div>
    )
}