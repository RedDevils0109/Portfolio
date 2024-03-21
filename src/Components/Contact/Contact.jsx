import "./Contact.css"; // Import CSS file if needed

function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact <span>Me</span></h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <div className="input-box">
                    <input type="number" placeholder="Phone Number" />
                    <input type="text" placeholder="Subject" />
                </div>
                <div className="input-box">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                </div>
                <input type="submit" value="Send Message" className="btn" />
            </form>
        </section>
    );
}

export default Contact;
