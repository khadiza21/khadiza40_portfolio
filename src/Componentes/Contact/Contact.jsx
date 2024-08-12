import React from 'react';
import { Container } from 'react-bootstrap';
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRef } from 'react';
const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        console.log(e);

        // emailjs.sendForm('service_jwjttgk', 'template_npae9y9', form.current, {
        //     publicKey: 'CQ5OKwfRskTWUvM5e',
        // })
        //     .then(
        //         (result) => {
        //             console.log(result.text, 'SUCCESS!');
        //             toast.success("Successfully Sent Message !");
        //         },
        //         (error) => {
        //             console.log('FAILED...', error.text);
        //         },
        //     );
        // e.target.reset();
    }


    return (
        <div>

            <div id='contact' className="m-0 p-0" style={{ backgroundColor: "#000000" }}>
                <Container className='py-5'>
                    <h1 className=" fw-bold text-center text-white display-4 mt-5">GET In <span className='text-primary'>Touch!</span></h1>

                    <div className="card w-100 shadow-lg">
                        <form ref={form} onsubmit={sendEmail} className="card-body">
                            <div className="mb-3">

                                <input type="text" placeholder="name" className="form-control px-4 py-3 shadow-lg shadow-primary input-opacity rounded-5" name="user_name" required />
                            </div>
                            <div className="mb-3">

                                <input type="email" name="user_email" placeholder="email" className="form-control px-4 py-3 shadow-lg shadow-primary input-opacity rounded-5" required />
                            </div>
                            <div className="mb-3">

                                <input type="text" name="subject" placeholder="subject" className="form-control px-4 py-3 shadow-lg shadow-primary input-opacity rounded-5" required />
                            </div>
                            <div className="mb-3">

                                <textarea id="message" name="message" placeholder="Message" className="form-control px-4 py-3 shadow-lg shadow-primary input-opacity rounded-5" rows="4"></textarea>
                            </div>

                            <div className="mt-4 text-center">

                                <button className="btn btn-primary rounded-5 py-3  fw-bold" type="submit"> <span>Send Message</span> <i class="fa fa-paper-plane" aria-hidden="true"></i> </button>
                            </div>
                        </form>
                    </div></Container>
            </div>


            <ToastContainer />
        </div>
    );
};

export default Contact;