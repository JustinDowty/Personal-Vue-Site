<template>
<div class="blog-entry">
    <div class="blog-title mb-10">
        <h2 class="orange-text">Simple jQuery Animation</h2>
      </div>
      <div class="blog-underline mb-20"></div>
<p>Here is a (very) small animation library that I have used on client websites.
    I am sharing it to show one of the ways I approach writing these sort of animations. This technique can be
    used as a good starting point for writing any scroll triggered animation.<br><br>First
    we will take a look at some sample CSS classes I use to build my animations. There is a pattern to these
    CSS classes. The HTML element gets a class called *-module (with * being the name for the animation)
    When the element enters the viewport view, a block of Javascript fires and removes that class, and replaces it with a
    class labeled * (animation name), which will be the css animation itself. Here are a few to look at:
</p>
<div class="gist-section gist-1">
    <vue-embed-gist :gist-id='"f1e5f9232ac4e8e9e1dfdfc277e07e68"' :file='"animation.css"'/>
</div>
<p>Pretty straight forward, the @keyframes defines the beginning and end states of the animation, the *-module class keeps the
    element hidden, then the * class will launch the animation. The more interesting work comes in with jQuery. First, we need
    a function that can detect whether an element is in view, I have named this isVisible. This criteria can change based on your needs, but here the animation
    will fire when the bottom of the window scrolls into the bottom 2/3, the top scrolls into the top 2/3, or the element center is
    between the top and bottom of the window, in case the element is right in view when the page loads. These measurements can easily
    be tweaked by changing the 3 values in the top two sections of the if/else statement:</p>
<div class="gist-section gist-2">
    <vue-embed-gist :gist-id='"7399102fae339f195296e073d06845b1"' :file='"animation-jquery.js"'/>
</div>
<p>Now, we can check each element by passing it to the isVisible function. We can do this with a scroll listener. We also
    want to run the function once on load, in case the element is in view when the page is loaded and before any scrolling takes place:
</p>
<div class="gist-section gist-3">
    <vue-embed-gist :gist-id='"7399102fae339f195296e073d06845b1"' :file='"animation-jquery.js"'/>
</div>
<p>The checkAnimations function is used to loop over each of the elements of each class name, these are the elements that contain a *CLASSNAME-module class.
    For each *CLASSNAME-module element, if the element is in view, determined by isVisible, then remove the *CLASSNAME-module class and add *CLASSNAME, which will fire the animation.
</p>
<div class="gist-section gist-4">
    <vue-embed-gist :gist-id='"7399102fae339f195296e073d06845b1"' :file='"animation-jquery.js"'/>
</div>
<p>We are not always able to use jQuery, and maybe should not rely on it all of the time. For example, this page you are on currently is made with
    Vue.js, and it is usually bad practice to use jQuery along with another front-end framework. Since this is the case, I have also remade the above
    jQuery code with pure Vanilla JS, and both work identically. <a href="https://gist.github.com/JustinDowty/d072eb907cbe2e4205a0f05c72e0cb51" target="_blank" >Click here to see the Vanilla edition of the code.</a>
</p>
<div class="blog-post-border"></div>
</div>
</template>

<script>
import VueEmbedGist from 'vue-embed-gist'

export default {
    name: 'jqueryanimation',
    components: {
        VueEmbedGist
    }
}
</script>

<style>
    .gist-1 tr { display: block; }
    .gist-1 tr:nth-child(n+30) { display: none; }

    .gist-2 tr:nth-child(n+8) { display: block; }
    .gist-2 tr:nth-child(n+32) { display: none; }

    .gist-3 tr { display: block; }
    .gist-3 tr:nth-child(n+7) { display: none; }

    .gist-4 tr:nth-child(n+33) { display: block; }
</style>