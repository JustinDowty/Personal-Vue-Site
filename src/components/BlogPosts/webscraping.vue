<template>
<div class="blog-entry">
    <div class="blog-title mb-10">
        <h2 class="orange-text">A Beginner's Guide To Web Scraping</h2>
      </div>
      <div class="blog-underline mb-20"></div>
<p>Automated web scraping is a topic I have been interested in in the past, but until recently I have not
    had a reason to take a swing at it. A situation arose at my job where we had a huge list of company websites
    that a group compiled by hand. Basically each of these companies were going to be
    in a sort of directory, each with their own database-driven inside page. All of the site data was imported
    into a SQL database along with some other company details to be read and displayed. The issue with the data,
    however, is that there was no company description, which was something we wanted to display as
    well. The solution: Web Scraping!<br><br>Using the awesome magic of Node I was able to build a script that
    would read the list of websites from a CSV using XLSX, parse that data with Cheerio, and retrieve the
    description from the website's HTML. We will walk through how the code works:<br><br>First we import the necessary
    libraries:
</p>

<div class="gist-section gist-1">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>Next, we read the CSV list of sites with XLSX:</p>
<div class="gist-section gist-2">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>Since we are running this over a list of thousands of sites at a time, we would like to show some stats
    showing the success rate and error codes we have received.
</p>
<div class="gist-section gist-3">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>Here our function getDescriptions() is an async function and will serve as a "main" function for this purpose.
    All of our Website URL's will be looped through in the for loop, and the requests are made in the body for each URL.
We will be using some await calls later on to help keep our asynchronous calls from getting out of hand.
This is mainly just a precaution to assure the process runs smoothly.
</p>
<div class="gist-section gist-4">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>We set the Promise return from our request to our variable p, this will later be added to the promises array in order to await a group of requests.
    The then block represents a successful response from the requests, meaning we have retrieved the HTML document.
    The hope is for as many websites to respond to our request and send the document, rather than forbidding our request or there being another error.
    Once we have the document we will be using Cheerio to attempt to pull out the meta description and add that to our new data.
</p>
<div class="gist-section gist-5">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>In the event of an error (there are bound to be some denied requests or other errors) we keep track of this information to view later.</p>
<div class="gist-section gist-6">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>Here is where the await call comes in. What happens here is every so many requests (requestsPerWait) we will wait to make sure all of those async calls have returned before continuing on to the next group.
</p>
<div class="gist-section gist-7">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>Once the program has finished, we will print the statistics of our execution, and finally write our new data to a new CSV file.</p>
<div class="gist-section gist-8">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<p>The last thing I like to include is in case something gets hung up and I need to force close the program, I still want to write what I have to file and see the statistics. We do this by adding this code here. The very last line simply calls our "main" function to begin the script.</p>
<div class="gist-section gist-9">
    <vue-embed-gist :gist-id='"220d7f61fc13593f1263e1485f57b583"' :file='"WebScrapingExample.js"'/>
</div>
<div class="blog-post-border"></div>
</div>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
    name: 'webscraping',
    components: {
        VueEmbedGist
    }
}
</script>

<style>
    .gist-1 tr { display: block; }
    .gist-1 tr:nth-child(n+4) { display: none; }

    .gist-2 tr:nth-child(n+5) { display: block; }
    .gist-2 tr:nth-child(n+11) { display: none; }

    .gist-3 tr:nth-child(n+12) { display: block; }
    .gist-3 tr:nth-child(n+21) { display: none; }

    .gist-4 tr:nth-child(n+22) { display: block; }
    .gist-4 tr:nth-child(n+48) { display: none; }

    .gist-5 tr:nth-child(n+49) { display: block; }
    .gist-5 tr:nth-child(n+91) { display: none; }

    .gist-6 tr:nth-child(n+91) { display: block; }
    .gist-6 tr:nth-child(n+127) { display: none; }

    .gist-7 tr:nth-child(n+114) { display: block; }
    .gist-7 tr:nth-child(n+126) { display: none; }

    .gist-8 tr:nth-child(n+129) { display: block; }
    .gist-8 tr:nth-child(n+146) { display: none; }

    .gist-9 tr:nth-child(n+147) { display: block; }
    .gist-9 tr:nth-child(n+154) { display: none; }
</style>