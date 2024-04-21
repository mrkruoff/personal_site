import me from "../icons/me.jpg";

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
          Greetings! I'm <strong>Mark Ruoff</strong> a software developer with a
          strong background in full-stack development. Since earning my
          Bachelor's degree in Computer Science from Oregon State University,
          I've been engaged in various professional software development
          positions
        </p>
        <p>
          Throughout my career, I've accumulated extensive experience across
          multiple industries including telecommunications, e-commerce, ad-tech,
          and travel. Each project has contributed to my ever-growing knowledge
          base and honed my skills.
        </p>
        <p>
          My expertise covers a wide array of technologies, including Python,
          React, Angular, Next.js, Node.js, PostgreSQL, MongoDB, AWS, and Google
          Cloud Platform. I'm always eager to embrace new technologies, adapting
          them to meet project needs.
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
          This site was built with React and Tailwind CSS. The source code can
          be found on my on my{" "}
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
