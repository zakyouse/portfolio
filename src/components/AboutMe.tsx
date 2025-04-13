import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <div className="text-white text-center w-[80%] lg:w-[50%] mx-auto">
      <h2 className="capitalize text-warning font-semibold my-8">about me</h2>
      <h3 className="capitalize text-3xl mb-4">hi there!</h3>
      <p className="text-sm">
        I&apos;m Zakyouse Okoth — a passionate Full Stack Developer with a
        strong focus on the MERN stack and Firebase. I specialize in building
        clean, modern web and mobile applications that solve real-world
        problems. From crafting smooth user experiences to developing scalable
        backend systems, I’m all about turning ideas into impactful digital
        solutions.
      </p>
      <h4 className="capitalize mt-4 text-gray-200 text-sm">
        want to know more about me?
      </h4>
      <Link className="text-blue-600 text-sm" to={""}>
        Let&apos;s connect
      </Link>
    </div>
  );
}

export default AboutMe;
