import "../styles/Contact.css";
function Contact() {
    const handleSubmit = async (event) => {
      event.preventDefault();
      alert('Thank you for your message! I will get back to you as soon as possible.');
      // reset form
      event.target.reset();
    };
  
    return (
      <>
        <section id="contact">
        <h1 className="text-center" id="formHeader">Let&apos;s Get In Touch!</h1>
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
            <button type="submit" className="cta-button">Submit</button>
       </fieldset>
          </form>
        </section>
      </>
    );
  }
  
  export default Contact;
  