import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const [contact, setContact] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1. Send email via EmailJS
      await emailjs.sendForm('service_e5bdfyi', 'template_5zvi0m6', form.current, {
        publicKey: 'nMQWMzwKq1JBSjVFT',
      });

      toast.success("Email sent successfully!");

      // 2. Save to backend/database
      const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        toast.success("Message saved to database!");
      } else {
        toast.error("Failed to save message in database.");
      }

      // 3. Reset form fields
      setContact({
        from_name: "",
        from_email: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ml-10">
          <h1 className="text-5xl font-bold">Say Hello!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl h-[500px]">
          <div className="card-body">
            <form ref={form} onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <input 
                  name="from_name" 
                  type="text" 
                  className="input mt-4" 
                  placeholder="Name" 
                  value={contact.from_name} 
                  onChange={handleInput} 
                  required
                />
                <input 
                  name="from_email" 
                  type="email" 
                  className="input mt-4" 
                  placeholder="Email" 
                  value={contact.from_email} 
                  onChange={handleInput} 
                  required
                />
                <textarea 
                  name="message" 
                  placeholder="Message" 
                  className="textarea mt-4" 
                  value={contact.message} 
                  onChange={handleInput}
                  required
                ></textarea>
                <button 
                  type="submit" 
                  className="mt-4 py-3 mr-2 rounded-2xl text-white bg-[rgb(72,11,72)] hover:bg-[rgb(90,20,90)] transition duration-300"
                >
                  Send Message
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
