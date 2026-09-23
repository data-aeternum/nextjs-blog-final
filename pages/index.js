// Import the shared page metadata component.
import Head from 'next/head'; // Imports the Head component so the page can use document metadata like the title.
// Import Next.js client-side navigation links.
import Link from 'next/link'; // Imports the Link component used to connect each post to its dynamic route.
// Import the shared site layout and its title.
import Layout, { siteTitle } from '../components/layout'; // Imports the layout wrapper and the shared siteTitle value used in the page header.
// Import reusable typography styles.
import utilStyles from '../styles/utils.module.css'; // Imports the shared utility CSS classes used across the page.
// Import page-specific homepage styles.
import styles from '../styles/Home.module.css'; // Imports the CSS module for the homepage-specific styling.
// Import the helper that reads and sorts JSON post data.
import { getSortedPostsData } from '../lib/posts-json'; // Imports the JSON post metadata loader used during static generation.

// Load the post data when Next.js statically generates the homepage.
export async function getStaticProps() { // Defines the static data-fetching function for the homepage.
  // Read all post metadata from the top-level posts directory.
  const allPostsData = getSortedPostsData(); // Stores the sorted post metadata for the page props.
  // Return the data as props for the Home component.
  return { // Starts the object returned to Next.js.
    props: { // Defines the props passed to the Home component.
      allPostsData, // Passes the sorted post metadata to the homepage.
    }, // Closes the props object.
  }; // Closes the object returned to Next.js.
} // Closes the getStaticProps function.

// Render the homepage content with the statically generated post data.
export default function Home({ allPostsData }) { // Defines and exports the Home page component for this route.
  // Return the shared layout and homepage content.
  return ( // Starts the return statement that renders the page's JSX.
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.intro}`}>
        <p>[Hello, I'm Tad MacPherson, wishing I was in Maui right now!]</p>
        <p>
          (I am looking forward to our {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      {/* Display the post metadata loaded by getStaticProps. */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {/* Render one list item for each JSON post. */}
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  ); // Ends the return statement and closes the JSX expression.
} // Closes the Home function block.