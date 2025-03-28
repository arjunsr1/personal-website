// src/pages/bookshelf.tsx
import Link from "next/link";
import styles from "../styles/bookshelf.module.css";

const Bookshelf: React.FC = () => {
  return (
    <div className="main-content">
      <h1>Recent Readings</h1>
      <br />
      <p>
        When I was growing up, reading was one of my first passions. You can
        imagine the disappointment of my parents when the habit slowly but
        surely died out in favor of distractions like TV and videogames. After
        many years, I&apos;m happy to say I have experienced a bit of a rebirth
        in my passion for reading.
      </p>
      <br />
      <p>
        As an exercise to myself, I&apos;ve been trying to be pretty consistent
        with keeping track and reviewing books I have read on Goodreads. Check
        my profile out{" "}
        <Link href="https://www.goodreads.com/user/show/171994812-arjun-r">
          here!
        </Link>{" "}
        In the meantime, here are some of my favorites of the past year or so:
      </p>
      <br />
      <ul className={styles.reviewList}>
        <li className={styles.reviewItem}>Zero to One - Peter Thiel (2014)</li>
        <li className={styles.reviewItem}>Educated - Tara Westover (2018)</li>
        <li className={styles.reviewItem}>
          I&apos;m Glad My Mom Died - Jeanette McCurdy (2022)
        </li>
        <li className={styles.reviewItem}>
          The Girl With Seven Names - Hyeonseo Lee (2014)
        </li>
        <li className={styles.reviewItem}>
          Being Mortal - Atul Gawande (2014)
        </li>
        <li className={styles.reviewItem}>
          First They Killed My Father - Luong Ung (2000)
        </li>
        <li className={styles.reviewItem}>Bad Blood - John Carreyrou (2018)</li>
        <li className={styles.reviewItem}>
          When Breath Becomes Air - Paul Kalanithi (2016)
        </li>
      </ul>
      <br />
    </div>
  );
};

export default Bookshelf;
