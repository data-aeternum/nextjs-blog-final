// Import the shared layout used by every page.
import Layout from '../../components/layout';
// Import the post data helpers used by the dynamic route.
import { getAllPostIds, getPostData } from '../../lib/posts-json';
// Import the custom styles for the post page.
import styles from '../../styles/FirstPost.module.css';

// Render one post page from the data generated for its dynamic route.
export default function Post({ postData }) { // Defines and exports the dynamic post page component.
    // Use the HTML content stored in the JSON record.
    const htmlContent = postData.contentHtml; // Stores the rendered post content.
    // Return the post page layout and rendered content.
    return ( // Starts the JSX returned by the component.
        <Layout>
            <article className={styles.post}>
                <h1 className={styles.title}>{postData.title}</h1>
                <p className={styles.meta}>{postData.date}</p>
                <div
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
            </article>
        </Layout>
    ); // Ends the JSX returned by the component.
}

// Load the selected post during static generation.
export async function getStaticProps({ params }) { // Defines the data-fetching function for each post route.
    // Read the post identified by the dynamic route parameter.
    const postData = getPostData(params.id); // Stores the selected post metadata and Markdown content.
    // Return the selected post as component props.
    return { // Starts the props object returned to Next.js.
        props: { // Defines the props passed to the Post component.
            postData, // Passes the selected post data to the page.
        }, // Closes the props object.
    }; // Closes the object returned to Next.js.
} // Closes the getStaticProps function.

// Generate one static route for every JSON post.
export async function getStaticPaths() { // Defines the list of dynamic post paths.
    // Read all valid post IDs from the JSON data file.
    const paths = getAllPostIds(); // Stores the route parameters for every post.
    // Return the generated paths and reject unknown post IDs.
    return { // Starts the static paths configuration object.
        paths, // Supplies the generated dynamic paths to Next.js.
        fallback: false, // Returns a 404 page for a post that does not exist.
    }; // Closes the static paths configuration object.
} // Closes the getStaticPaths function.