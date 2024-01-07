# Pre Rendering in Next JS

<p>
Pre-Rendering is also known as Server-Side-Rendering. In simple words it means rendering the html and js in server side. In NEXT JS there are two types of pre rendering first SSG (Static Site Generation) and second SSR (Server Side Rendering).
</p>

---

## What Is SSG (Static Site Generation)?

<p>
In Next JS if a page usage Static Generation, the page HTML is generated at build time. That means when we build a Next.js app using the command `next build` it build the HTML page and keep it as a normal HTML file. It can be cached by CDN so that on every request it will give the same HTML page. Also we can build Static page without or with data.

Here is an example of a Static Generated page without any data fetching:

</p>

    function About() {
    return <div>About</div>
    }
    export default About

<p>
When we want to generate a static page where data fetching is available in that case next js give us a function called `getStaticProps`. By using that function when we run build command it's fetch the data before build and generate a static page using that data.

Here is an example of a Static Generated page with data fetching:

</p>

    // TODO: Need to fetch `posts` (by calling some API endpoint)
    //       before this page can be pre-rendered.
    export default function Blog({ posts }) {
    return (
    <ul>
    {posts.map((post) => (
    <li>{post.title}</li>
    ))}
    </ul>
    )
    }

<br/>

    export default function Blog({ posts }) {
    // Render posts...
    }

    // This function gets called at build time
    export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://.../posts')
    const posts = await res.json()

    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
    props: {
    posts,
    },
    }

}

[Source : Next JS Documentation](https://nextjs.org/docs/pages/building-your-application/rendering/static-site-generation)

## What Is SSR (Server-Side Rendering) in Next.js?

<p>
In Next.js, Server-Side Rendering (SSR) involves the server generating the webpage's HTML, CSS, and initial content when a client requests it. Here's how it works:

1.  **Client Request:**

    - A user requests a webpage.
    - The server simulates a browser environment and generates the HTML and CSS for that specific page on the server.

2.  **Non-Interactive HTML:**

    - Unlike Client-Side Rendering (CSR), which relies on the browser to do more work, SSR sends a fully rendered and non-interactive HTML page to the client.

3.  **Server-Side Components (SSC):**

    - Components designated for server-side rendering (Server-Side Components) are processed and rendered on the server for each request. These components might contain dynamic data that changes with each request. In that case Next.js gives us a function called `getServerSideProps` it helps us to fetch data from any external api on server side for each request.

    Here is an example of using `getServerSideProps` :
    </p>

        export default function Page({ data }) {
        // Render data...
        }

        // This gets called on every request
        export async function getServerSideProps() {
        // Fetch data from external API
        const res = await fetch(`https://.../data`)
        const data = await res.json()

        // Pass data to the page via props
        return { props: { data } }
        }

**Difference from Static Site Generation (SSG):**

- In Static Site Generation (SSG), components get rendered at build time, producing static HTML files that are served to clients. This means the content is fixed until the next build.
- On the other hand, Server-Side Rendering components render on the server dynamically on every request, allowing for up-to-date and dynamic content.

**Use Cases for SSR:**

- SSR is beneficial when you need the content to be personalized or fetched in real-time for each user.
- It's suitable for pages that frequently change or display user-specific information.

**Considerations:**

- SSR typically results in slower initial page load times compared to SSG, but it offers the advantage of showing the most recent data on each request.

In summary, SSR in Next.js involves the server rendering the webpage on each request, providing dynamic and up-to-date content, making it a good choice for pages with real-time data or personalized content.

[Source : Next JS Documentation](https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)
