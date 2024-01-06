## What Is CSR (Client Side Rendering)?

<p>
Before explaining client side rendering first understand how a React website loads in a browser?
</p>
<p>
When a user opens a React website in a browser, it sends an HTTP request to the server where the website is hosted. The server responds by sending a minimal HTML page and the JavaScript bundle containing all the minified HTML, CSS, and JavaScript code. After downloading the full javascript bundle it's render in browser then we can see the full website.

Upon downloading the full JavaScript bundle, the browser proceeds to render the website. The rendering process involves executing the JavaScript code to dynamically generate the HTML structure, apply styles, and handle any interactive elements. Finally, the user can see and interact with the fully-rendered website.

</p>

### Now let's understand Client Side Rendering

<p>
In client-Side Rendering with react, the browser downloads a minimal html page and the JavaScript needed for the page. The JavaScript then used to update the DOM and render the page. When the application is first loaded, the user may notice a slight delay before they can see the full page, this is because the page isn't fully rendered until all the JavaScript is downloaded, parsed, and executed.

After the page has been loaded for the first time, navigating to other pages on the same website is typically faster, as only necessary data needs to be fetched, and JavaScript can re-render parts of the page without requiring a full page refresh.

</p>

[Source : Next JS Documentation](https://nextjs.org/docs/pages/building-your-application/rendering/client-side-rendering)

### Con's of Using Client Side Rendering

<p>
There are some major drawbacks of using CSR. Most common cons are mention below.
</p>

1. **Initial Page Load Time:** CSR websites initial load time is very long as compare to SSR websites. Because it's wait until the full JS Bundle get download and after download it's render the necessary HTML, CSS, and JS in client side to show the web page.

2. **Not SEO Friendly:** CSR websites are not SEO friendly because when the search engine bot visit the site it doesn't find any content (HTML) in our sites as it not coming as an HTML format from server, It's only find a boilerplate HTML page that doesn't have any content means the whole web page content are not render yet in the browser. So it's impact the SEO ranking.

3. **Performance issues on Low-Powered Devices:** Devices with low/limited processing power might cause less smooth user experience because the client browser need to handle the rendering it will use the client device processing power to perform the rendering.

4. **Other Cons:** There are some other cons of using CSR like Managing complex application state, Possibility of Cross-Site Scripting (XSS) attacks, and Limited Performance Optimization by Servers.
