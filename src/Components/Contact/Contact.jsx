import React from 'react';
function Contact() {
  return (
    <section id="contact" className="bg-green-100 py-12 text-center ">
      <h2 className="text-3xl font-bold mb-4">Contact <span className="text-green-700">Me</span></h2>
      <form className="w-10/12 md:max-w-lg mx-auto space-y-4">
        <input type="text" placeholder="Full Name" className="w-full p-3 border rounded" />
        <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Phone Number" className="w-full p-3 border rounded" />
        <input type="text" placeholder="Subject" className="w-full p-3 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-3 border rounded h-24"></textarea>
        <button className="px-4 py-2 bg-green-700 text-white rounded-lg hover:bg-green-800">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
