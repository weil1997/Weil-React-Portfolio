const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen  bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-28 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 flex justify-center align-middle">
          <p className="flex flex-col items-center justify-center text-4xl font-bold border-gray-500 p-2 inline">
            About
          </p>
        </div>
        <p className="text-xl mt-6">
          I am a React developer with a skill set in the Mern Stack. I possess a
          solid understanding of React ,as well as Node.js, MongoDB, and Express
          which allows me to build powerful, full-stack applications that
          deliver outstanding performance and user experiences. My love for
          programming is evident in my abilty to approach complex problems with
          creativity and innovation, and consistently come up with elegant
          solutions that meet the needs of my clients and end-users.
        </p>

        <br />
        <p className="text-xl ">
          I take pride in staying up-to-date with the latest technologies and
          trends, and am constantly honing my skills to ensure that I remain at
          the forefront of my field. With my exceptional attention to detail,
          strong communication skills, and unwavering dedication to quality, I
          believe that I am a true asset to any development team.
        </p>
      </div>
    </div>
  );
};

export default About;
