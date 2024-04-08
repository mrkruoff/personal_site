import me from "../icons/me.jpg";

const About = () => {
  return (
    <div className="">
      <img
        src={me}
        alt="Mark Ruoff"
        class="object-scale-down float-right"
        width="300"
        height="300"
      />
      <div className="space-y-16 text-3xl text-pretty">
        <p>
          Hi my name is <strong>Mark Ruoff</strong> a seasoned software
          developer with extensive full-stack expertise. Graduating in 2018 with
          a Bachelor's in Computer Science from Oregon State University, I've
          since been immersed in professional software development roles. Over
          the years, I've garnered firsthand experience in diverse industries
          such as telecommunications, e-commerce, ad-tech, and travel, enriching
          my knowledge base with each project.
        </p>
        <p>
          My proficiency spans across a range of technologies, including but not
          limited to Python, React, Angular, Node.js, PostgreSQL, MongoDB, AWS,
          and Google Cloud Platform. I embrace the challenge of mastering new
          technologies to suit project requirements.
        </p>
        <p>
          If you would like to contact me please feel free to{" "}
          <a className="underline" href="mailto:ruoff.mark@gmail.com">
            email
          </a>{" "}
          me or reach out to me on{" "}
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
