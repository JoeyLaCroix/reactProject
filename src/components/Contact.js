

function Contact() {
  return (
    <div className = "Contact">
       <div id="contact">
            <h2>Have questions?</h2>
            <h2>Contact us!</h2>
            <form id="contactUsForm">
                <p>
                    <label for="Name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      minlength="1"
                    />
                </p>

                Are you a surfer?

                <p>
                  <input type="radio" name="size" value="yes" required />
                  <label for="yes" class="inline" id="surfer?">Yes</label>
                </p>
                <p>
                  <input type="radio" name="size" value="no" />
                  <label for="no" class="inline" id="surfer?">No</label>
                </p>

                <p>
                    <label for="email">Email:</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                </p>

                <p>
                    <label for="message">Message:</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                    ></textarea>
                </p>

                <p>
                    <button id="contactUsButton" type="submit">Submit Form</button>
                </p>
                <section id="contactUsMessage" >
                    <h3>Thank you for your message</h3>
                </section>
            </form>
        </div>
    </div>
  );
}

export default Contact;