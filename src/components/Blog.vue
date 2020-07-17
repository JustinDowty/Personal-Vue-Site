<template>
<div>
  <div class="blog-top">
    <div class="blog-container page-width slideupsm">
      <div class="blog-title mb-10">
        <h1>BLOG</h1>
        <p id="blog-subtitle" class="typing">{{ subHeaderText }}</p>
      </div>
      <div class="blog-underline"></div>

      <div class="blog-entry">
        <h3 class="orange-text mb-5">My First NPM Package</h3>
        <p>Decided to release a small Vue component I made for a project on NPM for fun. Interestingly, it seems to have gotten some attention.
        </p>
        <div class="blog-read-more">
          <router-link to="/blog/firstnpm">Read More</router-link>
        </div>
        <div class="blog-border"></div>
      </div>

      <div class="blog-entry">
        <h3 class="orange-text mb-5">Visualizing Sorting Algorithms</h3>
        <p>Here is a Vue.js app I created to show some common sorting algorithms with a visual representation of each step.
        </p>
        <div class="blog-read-more">
          <router-link to="/blog/sortingvisual">Read More</router-link>
        </div>
        <div class="blog-border"></div>
      </div>

      <div class="blog-entry">
        <h3 class="orange-text mb-5">A Beginner's Attempt at Web Scraping</h3>
        <p>Some fun with automation! I recently had to retrieve meta descriptions for a list of over 20,000 sites. I was mostly successful using this method, besides some 403 Forbidden responses.</p>
        <div class="blog-read-more">
          <router-link to="/blog/webscraping">Read More</router-link>
        </div>
        <div class="blog-border"></div>
      </div>

      <div class="blog-entry">
        <h3 class="orange-text mb-5">Simple Scroll Triggered Animations (jQuery and Vanilla JS)</h3>
        <p>Here is the Javascript and CSS I wrote and use for triggered animations. I have used the jQuery version in production, and the Vanilla version is used on the home page of this site.</p>
        <div class="blog-read-more">
          <router-link to="/blog/jqueryanimation">Read More</router-link>
        </div>
        <div class="blog-border"></div>
      </div>
      
    </div>
  </div>
  <div class="blog-go-back">
    <div class="top-nav-left"><div class="top-nav-logo">JD</div><p class="blog-menu-text">MENU</p></div>
  </div>
  <div class="blog-nav">
    <router-link to="/" class="effect-box">HOME</router-link>
    <router-link to="/web" class="effect-box">WEB</router-link>
    <router-link to="/projects" class="effect-box">PROJECTS</router-link>
    <router-link to="/blog" class="effect-box">BLOG</router-link>
  </div>
</div>

</template>

<style src="../css/blog.css"></style>

<script>
export default {
  name: 'Blog',
  components: {

  },
  data() {
      return {
          subHeaderText: ""
      }
  },
  methods: {
    
  },
  mounted() {
    document.body.classList.add('blog');
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const typeText = async () => {
      var subHeaderString = "Some experiences, insights, and code from my journey as a Web Dev";
      await sleep(500);
      for(var i = 0; i < subHeaderString.length; i ++) {
        this.subHeaderText += subHeaderString[i];
        await sleep(50);
      }
      document.getElementById('blog-subtitle').classList.remove('typing');
    }
    typeText();
  },
  beforeDestroy() {
    document.body.classList.remove('blog');
  }
}
</script>
