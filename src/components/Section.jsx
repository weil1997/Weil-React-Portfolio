import React from "react";

function Section({ children, ...props }) {
  return (
    <section
      className={
        "w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center  "
      }
      {...props}
    >
      <div className="max-w-5xl px-4 ">{children}</div>
    </section>
  );
}

export default Section;
