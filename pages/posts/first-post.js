// Import the script component used for the Facebook SDK.
import Script from 'next/script'; // Imports the Script component so external JavaScript can be loaded on the page.
// Import the component that sets the page title.
import Head from 'next/head'; // Imports the Head component used for page metadata like the browser title.
// Import the client-side navigation component.
import Link from 'next/link'; // Imports the Link component for navigation between pages without a full reload.
// Import the shared layout for the post page.
import Layout from '../../components/layout'; // Imports the shared page layout used for consistent page structure.
// Import the post page's custom styles.
import styles from '../../styles/FirstPost.module.css'; // Imports the CSS module for the first post page style rules.

// Render the first post page.
export default function FirstPost() { // Defines and exports the FirstPost page component for this route.
    // Return the shared layout and post content.
    return ( // Starts the return statement that renders the page's JSX.
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => { // Starts the JavaScript callback that runs after the script loads; this is JavaScript inside JSX.
                    // Confirm that the Facebook SDK finished loading.
                    console.log(`script loaded correctly, window.FB has been populated`) // Logs a message when the Facebook SDK has finished loading.
                }} // Ends the onLoad callback function and closes the arrow function block.
            />
            <section className={styles.post}>
                <h1 className={styles.title}>First Post</h1>
                <h2>
                    <Link className={styles.link} href="/">Back to home</Link>
                </h2>
            </section>
        </Layout>
    ); // Ends the return statement and closes the JSX expression.
} // Closes the FirstPost function block.