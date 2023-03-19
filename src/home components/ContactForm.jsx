import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const ContactForm = () => {

    const [state, handleSubmit] = useForm("myyadyjq");
    if (state.succeeded) {
        return <p className="form__success">Thanks for contacting us!</p>
    }

  return (
    <form onSubmit={handleSubmit}>
        <h1 className="green">Message Us!</h1>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
            Submit
        </button>
    </form>
  );
};

export default ContactForm;
