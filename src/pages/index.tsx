// src/pages/index.tsx
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Hey-- Arjun here!</h1>
      <br />
      <p>I&apos;m a software developer based in San Francisco.</p>
      <br />
      <p>
        Currently, I work at <Link href="https://affinity.co">Affinity.co</Link>{" "}
        on the integrations team, where I help build integrations between
        Affinity and services such as Salesforce, Mailchimp, and Slack, to name
        a few.
      </p>
      <br />
      <p>
        Previously, I worked at{" "}
        <Link href="https://www.cisco.com/">Cisco Systems</Link>, where I helped
        modernize APIs within Cisco commerce.
      </p>
      <br />
      <p>
        More about myself: I was born and raised in the Bay Area. I finished
        school in 2020 at the University of Michigan (go blue! 〽️), and found
        myself right back in California after graduation. I guess the hometown
        pull was inevitable.
      </p>
      <br />
      <p>
        Outside of work, I love to stay active, alternating between running,
        biking, and swimming. I have found that cardiovascular exercise is a
        wonderful and natural way to simultaneously clear my head and keep me
        physically fit. I also love to eat, and am always eager to explore San
        Francisco&apos;s fantastic restaurant scene!
      </p>
      <br />
      <p>
        In my downtime, I love to read, listen to music, and play guitar. That
        last one is a constant work in progress, but we&apos;ll get there
        eventually :&#41;
      </p>
      <br />
      <p>
        If you are interested in reaching out, I&apos;d love to chat! Feel free
        to shoot me an email at{" "}
        <Link href="mailto:arjun11@gmail.com">arjun11@gmail.com</Link>
      </p>
    </div>
  );
};

export default Home;
