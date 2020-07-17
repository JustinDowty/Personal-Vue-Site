<template>
<div>
  <div class="blog-top">
    <div class="blog-container page-width slideupsm">
      <div class="blog-post-body">
        <component :is="bodyLoader"></component>
      </div>
    </div>
  </div>
  <div class="blog-go-back">
    <div class="top-nav-left"><div class="top-nav-logo">JD</div><p class="blog-menu-text">MENU</p></div>
  </div>
  <div class="blog-nav">
    <router-link to="/" class="effect-box">HOME</router-link>
    <router-link to="/sites" class="effect-box">SITES</router-link>
    <router-link to="/projects" class="effect-box">PROJECTS</router-link>
    <router-link to="/blog" class="effect-box">BLOG</router-link>
  </div>
</div>

</template>

<script>
export default {
  name: 'BlogInside',
  props: {
    file: {
      type: String,
      default: () => null
    }
  },
  computed: {
    bodyLoader() {
      var blogs = ["webscraping", "jqueryanimation", "sortingvisual", "firstnpm"];
      if (blogs.includes(`${this.file}`)) {
        return () => import(`./BlogPosts/${this.file}.vue`);
      } else {
        return () => import(`./BlogPosts/blognotfound.vue`); 
      }
    }
  },
  data() {
      return {
          
      }
  },
  methods: {

  },
  mounted() {
    document.body.classList.add('blog');
  },
  beforeDestroy() {
    document.body.classList.remove('blog');
  }
}
</script>

<style src="../css/blog.css"></style>
<style src="../css/gist.css"></style>