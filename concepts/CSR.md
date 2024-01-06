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
