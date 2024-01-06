# Pre Rendering in Next JS

<p>
Pre-Rendering is also known as Server-Side-Rendering. In simple words it means rendering the html and js in server side. In NEXT JS there are two types of pre rendering first SSG (Static Site Generation) and second SSR (Server Side Rendering).
</p>

---

## What Is SSG (Server Site Generation)?

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

## What Is SSR (Server Side Rendering)?

<p>
Hello Ji
</p>
