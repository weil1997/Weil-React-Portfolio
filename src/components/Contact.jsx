import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="container mx-auto py-16 px-4">
        <div className="text-center pb-8">
          <p className="text-4xl font-bold">Contact</p>
          <p className="py-6 text-center font-bold">
            Submit the form to get in touch with me
          </p>
        </div>
        <div className="flex justify-center">
          <form
            action="https://getform.io/f/a032674c-bdd6-45d0-9771-9a0ce3d8f74f"
            method="POST"
            className="w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full mb-4"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full mb-4"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none w-full mb-4"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
