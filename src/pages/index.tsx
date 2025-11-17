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
        Currently, I work at <Link href="https://decagon.ai">Decagon.ai</Link> as an
        AI Implementation Engineer, where I focus on streamlining new customer agent
        deployments and improving the post-sale customer experience.
      </p>
      <br />
      <p>
        Previous work history:
      </p>
      <br />
      <p>
        Software Engineer @ <Link href="https://affinity.co">Affinity.co</Link> (January 2022 - November 2025):
      </p>
      <ul>
        <li>
          Reworked Affinity's backend infrastructure for persisting deduplicated unified interaction events
          across multiple synced credentials and calendars
        </li>
        <li>
          Built out an integration between Affinity and Slack, allowing change data from Affinity lists
          to be sent to slack, and notes from Slack to be written on Affinity entities
        </li>
        <li>
          Worked with two other engineers on a robust Salesforce integration, developing the infrastructure
          behind the activity sync feature between Affinity and Salesforce
        </li>
      </ul>
      <br />
      <p>
        Software Engineer @ <Link href="https://www.cisco.com/">Cisco Systems</Link> (July 2020 - December 2021):
      </p>
      <ul>
        <li>
          Refactored Cisco commerce APIs from SOAP and REST onto GraphQL
        </li>
        <li>
          Developed product config validation within the realm of Cisco's commerce workspace
        </li>
      </ul>
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
        wonderful way to simultaneously clear my head and keep me physically fit.
        I also love to eat, and am always eager to explore San Francisco's ever
        evolving restaurant scene!
      </p>
      <br />
      <p>
        In my downtime, I love to read, listen to music, and play guitar. That
        last one is a constant work in progress, but we'll get there
        eventually.
      </p>
      <br />
      <p>
        If you are interested in reaching out, I'd love to chat! Feel free
        to shoot me an email at{" "}
        <Link href="mailto:arjun11@gmail.com">arjun11@gmail.com</Link>
      </p>
    </div>
  );
};

export default Home;
