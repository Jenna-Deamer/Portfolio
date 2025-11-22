import React from "react";
import "../styles/Contact.css";
function Contact() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            alert(
                "Thank you for your message! I will get back to you as soon as possible."
            );
            event.target.reset();
        } catch (error) {
            alert("Something went wrong. Please try direct email instead.");
        }
    };

    return (
        <>
            <section id="contact">
                <h2 id="formHeader">Let&apos;s Get In Touch!</h2>
                <div className="contact-container">
                    <div className="contact-details">
                        <h3>Contact Information</h3>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <i
                                    className="bi bi-envelope-at-fill contact-icon"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href="mailto:JennaDeamer@gmail.com"
                                    aria-label="Email Jenna Deamer"
                                >
                                    JennaDeamer@gmail.com
                                </a>
                            </li>
                            <li className="contact-item">
                                <i
                                    className="bi bi-telephone-fill contact-icon"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href="tel:+17058179095"
                                    aria-label="Call Jenna Deamer"
                                >
                                    (705) 817-9095
                                </a>
                            </li>
                            <li className="contact-item">
                                <i
                                    className="bi bi-linkedin contact-icon"
                                    aria-hidden="true"
                                ></i>
                                <a
                                    href="https://www.linkedin.com/in/jenna-deamer-51b741251/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Connect on LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form
                        action="https://formsubmit.co/jennadeamer@gmail.com"
                        method="POST"
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="Enter your name"
                            />
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                            />
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Enter your message"
                                maxLength={500}
                                minLength={10}
                            ></textarea>
                            <div>
                                <button type="submit" className="cta-button" aria-label="Send Message">
                                    Submit
                                    <i
                                        className="bi bi-send-fill"
                                        aria-hidden="true"
                                    ></i>
                                </button>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </section>
        </>
    );
}

export default Contact;
