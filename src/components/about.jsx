import me from "../icons/temporaryMe.jpg";

const About = () => {
  return (
    <div className="flex flex-row justify-between space-x-4">
      <img
        src={me}
        alt="Mark Ruoff"
        class="object-scale-down"
        width="400"
        height="400"
      />
      <div className="text-pretty space-y-2">
        <p>
          Hi my name is <strong>Mark Ruoff</strong> and I am a software
          developer with full-stack experience. Graduated in 2018 with a
          Bachelor's in Computer Science from Oregon State University. Have been
          working professionally as a software developer since. I have worked in
          the telecomunication, e-commerce, ad-tech, and travel industries.
          Giving me an ever increasing breadth of knowledge which I bring to my
          roles.
        </p>
        <p>
          I have experience with a variety of technologies including: Python,
          React, Angular, Node.js, PostgreSQL, MongoDb, AWS, Google Cloud
          Platform, and more.
        </p>
        <p>
          If you would like to contact me please use the contact form or reach
          out to me on{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/in/mark-ruoff-63624044/"
          >
            LinkedIn
          </a>
        </p>
        <p>
          This site was built with React and TailwindCSS. The source code can be
          found on my on my{" "}
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
