import me from "../assets/me.jpg";

const About = () => {
  return (
    <div data-testid="about-component" className="h-max mb-8">
      <img
        src={me}
        alt="Mark Ruoff"
        className="object-scale-down float-right h-20 w-20 md:h-56 md:w-56"
      />
      <div className=" space-y-4 md:space-y-8 text-s md:text-xl text-pretty">
        <p>
          Greetings! I'm <strong>Mark Ruoff</strong> a software developer with
          experience in full-stack development. I hold a Bachelor's Degree in
          Computer Science from Oregon State University and have been actively
          working in the field ever since. My skill set encompasses a diverse
          range of technologies, including Python, React, Angular, Next.js,
          Node.js, Java, Spring Boot, PostgreSQL, MongoDB, AWS, and Google Cloud
          Platform.
        </p>
        <p>
          Feel free to reach out via{" "}
          <a className="underline" href="mailto:ruoff.mark@gmail.com">
            email
          </a>{" "}
          me or connect with me on{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/mark-ruoff-63624044/"
          >
            LinkedIn
          </a>
        </p>
        <p>
          This site was built with React, Vite, and Tailwind CSS. The source
          code can be found on my on my{" "}
          <a
            className="underline"
            href="https://github.com/mrkruoff/personal_site"
          >
            Github
          </a>{" "}
          page.
        </p>
      </div>
    </div>
  );
};

export default About;
