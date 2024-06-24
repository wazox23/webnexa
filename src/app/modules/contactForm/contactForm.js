import React from "react";
import "./contactForm.scss";

const ContactForm = () => {
    return (
        <section className="contactForm__base container componentMargin__top--2xl">
            <h3 className="contactForm__title d2">Just say Hello!</h3>
            <form className="contactForm__form">
                <div className="contactForm__inputGroup">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        className="contactForm__input"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        className="contactForm__input"
                    />
                </div>
                <div className="contactForm__inputGroup">
                    <input
                        type="email"
                        name="email"
                        placeholder="Mail"
                        className="contactForm__input"
                    />
                    <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        className="contactForm__input"
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Message"
                    className="contactForm__textarea"
                ></textarea>
                <button type="submit" className="contactForm__button">
                    Send
                </button>
            </form>
        </section>
    );
};

export default ContactForm;
