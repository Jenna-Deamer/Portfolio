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
                        <ul>
                            <li>
                                <a href="mailto: JennaDeamer@gmail.com">
                                    JennaDeamer@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="mailto: JennaDeamer@gmail.com">
                                    (705)-817-9095
                                </a>
                            </li>
                            <li>
                                <a href="mailto: JennaDeamer@gmail.com">
                                    JennaDeamer@gmail.com
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
                                <button type="submit" className="cta-button">
                                    Submit
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
