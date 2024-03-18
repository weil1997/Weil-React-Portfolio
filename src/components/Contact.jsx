import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white pt-24"
    >
      <div className="max-w-5xl px-4 flex flex-col justify-center mx-auto py-16">
        <div className="text-center mb-8">
          <p className="text-4xl font-bold mb-4">Contact</p>
          <p className="text-lg">Submit the form to get in touch with me</p>
        </div>
        <div className="flex justify-center ">
          <form
            action="https://getform.io/f/a032674c-bdd6-45d0-9771-9a0ce3d8f74f"
            method="POST"
            className="flex flex-col w-full md:w-1/2 gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
