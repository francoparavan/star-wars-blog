import React from "react";
import "../../styles/index.css";


const ContactUs = () => {
    return (
        <div className="contact container">
            <div className="row">
                {/* Primera sección: Información relevante de Star Wars */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">History</h2>
                            <p className="text-white">
                                In a galaxy far, far away, a war was being fought between the oppressive and technologically advanced Galactic Republic and the separatists led by Count Dooku. Amidst this conflict, a young man named Anakin Skywalker, gifted with extraordinary abilities in the Force, is discovered by Jedi Master Qui-Gon Jinn. Convinced of his potential, Qui-Gon brings him before the Jedi Council on Coruscant, where he is trained by Obi-Wan Kenobi.
                            </p>
                            <p className="text-white">
                                Anakin, despite his talent, constantly struggles with his own emotions and desires, especially his secret love for Padmé Amidala, the Senator of Naboo. Eventually, Anakin becomes the legendary Jedi Knight, but his destiny is overshadowed by the prophecy that he will bring balance to the Force, though he could also fall into darkness.
                            </p>
                            <p className="text-white">
                                The story of Star Wars spans generations, with epic space battles, political intrigues, and a constant struggle between good and evil. Iconic characters like Darth Vader, Luke Skywalker, Leia Organa, and many more have left an indelible mark on galactic popular culture.
                            </p>

                            <p className="card-title text-warning">
                                ¡MADE THE FORCE BE WITH YOU!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Segunda sección: Formulario de contacto */}
                <div className="col-md-6">
                    <div className="mb-3">
                        <div className="">
                            <h2 className="card-title text-warning">Contact Us</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label text-white">Full Name</label>
                                    <input type="text" className="form-control" id="fullName" name="fullName" placeholder="Insert your name..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label text-white">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Insert your email..." />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="message" className="form-label text-white">Message</label>
                                    <textarea className="form-control" id="message" name="message" rows="5" placeholder="Insert your message..."></textarea>
                                </div>
                                <button type="submit" className="btn btn-warning">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;