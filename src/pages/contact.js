import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import location from '../images/location.svg';

import github from '../images/github.svg';
import instagram from '../images/instagram.svg';
import twitter from '../images/twitter.svg';
import linkedin from '../images/linkedin.svg';


export function Contact(){
    return(
            <div id='contact' class='justify-content-center align-items-center text-center'>
                <h2>Contact Me</h2>
                <div class='row justify-content-center mx-auto my-3 container'>
                    <div class='card col-lg-5 col-md-8 col-sm-12 border-0 '>
                        <div class="d-flex flex-row justify-content-around container col-8 my-2">
                            <a href="https://github.com/sujannani" target='_blank'><img src={github}/></a>
                            <a href="https://www.instagram.com/_sujan12_/" target='_blank'><img src={instagram}/></a>
                            <a href="https://www.linkedin.com/in/sujan-kommalapati-aaa250227/" target='_blank'><img src={linkedin}/></a>
                            <a href="https://www.instagram.com/_sujan12_/" target='_blank'><img src={twitter}/></a>
                        </div>
                        <div class='row m-3 d-flex align-items-center justify-content-start'>
                            <div class='bg-success rounded-3 col-2 d-flex align-items-center justify-content-center' style={{width:'60px',height:'60px'}}>
                                <img src={phone} class='my-3'/>
                            </div>
                            <div class='text-start col-8'>
                                <p style={{color:'grey'}}>Call Me</p>
                                <p class='h6'>+91 9440931256</p>
                            </div>
                        </div>
                        <div class='row m-3 d-flex align-items-center justify-content-start'>
                            <div class='bg-success rounded-3 col-2 d-flex align-items-center justify-content-center' style={{width:'60px',height:'60px'}}>
                                <img src={mail} class='my-3'/>
                            </div>
                            <div class='text-start col-8'>
                                <p style={{color:'grey'}}>Main Me</p>
                                <p class='h6'>sujan.kommalapati@gmail.com</p>
                            </div>
                        </div>
                        <div class='row m-3 d-flex align-items-center justify-content-start'>
                            <div class='bg-success rounded-3 col-2 d-flex align-items-center justify-content-center ' style={{width:'60px',height:'60px'}}>
                                <img src={location} class='my-3'/>
                            </div>
                            <div class='text-start col-8'>
                                <p style={{color:'grey'}}>Location</p>
                                <p class='h6'>Guntur, Andhra Pradesh, India</p>
                            </div>
                        </div>
                    </div>
                    <div class='card col-lg-5 col-md-8 col-sm-12 p-3 border-0 form-check'>
                        <div class='row justify-content-between my-1'>
                            <div class='col-6'>
                                <input class='form-control py-3' type='text' placeholder='Full Name'/>
                            </div>
                            <div class='col-6'>
                                <input class='form-control py-3' type='text' placeholder='Last Name'/>
                            </div>
                        </div>
                        <div class='row justify-content-between my-1'>
                            <div class='col-6'>
                                <input class='form-control py-3' type='mail' placeholder='Mail'/>
                            </div>
                            <div class='col-6'>
                                <input class='form-control py-3' type='tel' placeholder='Phone Number'/>
                            </div>
                        </div>
                        <div class='my-1'>
                            <div class='col-12'>
                                <textarea class='form-control py-3' type='text' placeholder='Message' style={{height:'200px'}}/>
                            </div>
                        </div>
                        <div class='align-content-end text-end mt-1'>
                            <div class='btn btn-success text-light col-lg-4 col-md-5 col-sm-6'>Send Message</div>
                        </div>
                    </div>
                </div>
            <hr/>
            <div class='m-2 p-2'>
                <div class='d-flex flex-row justify-content-between '>
                    <p>@ 2023. All Rights Reserved</p>
                    <p>Designed By Gnana Tirumala Sujan</p>
                </div>
            </div>
        </div>
    )
}