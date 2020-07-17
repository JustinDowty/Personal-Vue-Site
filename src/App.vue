<template>
  <div id="app">
    <!-- Main Nav -->
    <div id="top-nav" style="top: 0px;">
      <div v-if="!loading" class="page-width">
        <div class="top-nav-left"><div class="top-nav-logo">JD</div></div>
        <div class="top-nav-right">
          <router-link to="/" class="effect-box">HOME</router-link>
          <router-link to="/web" class="effect-box">WEB</router-link>
          <router-link to="/projects" class="effect-box">PROJECTS</router-link>
          <router-link to="/blog" class="effect-box">BLOG</router-link>
        </div>
      </div>
    </div>
    <!-- Mobile Nav -->
    <div id="mobile-nav" style="top: 0px;">
      <div v-if="!loading" @click="toggleMobileMenu()" ref="mobile-toggle" class="mobile-nav-logo-wrapper">
        <div class="top-nav-logo">JD</div>
        <p class="mobile-logo-text">{{ mobileMenuText }}</p>
      </div>
      <div :class="{ mobileOpen: mobileOpen }" class="mobile-nav-menu">
        <div @click="toggleMobileMenu()"><router-link to="/">HOME</router-link></div>
        <div @click="toggleMobileMenu()"><router-link to="/web">WEB</router-link></div>
        <div @click="toggleMobileMenu()"><router-link to="/projects">PROJECTS</router-link></div>
        <div @click="toggleMobileMenu()"><router-link to="/blog">BLOG</router-link></div>
      </div>
    </div>

    <router-view v-if="!loading"></router-view>

  </div>
</template>

<script>
import { initAnimations } from './js/animation-vanilla.js';

export default {
  name: 'app',
  data() {
      return {
          mobileOpen: false,
          mobileMenuText: "MENU",
          loading: true
      }
  },
  methods: {
    toggleMobileMenu(){
      this.mobileOpen = !this.mobileOpen;
      this.mobileOpen ? this.mobileMenuText = "CLOSE" : this.mobileMenuText = "MENU";
    },
    getDeviceWidthHeight() {
      var w=window,
      d=document,
      e=d.documentElement,
      g=d.getElementsByTagName('body')[0],
      width=w.innerWidth||e.clientWidth||g.clientWidth,
      height=w.innerHeight||e.clientHeight||g.clientHeight;
      return { width: width, height: height };
    },
    mobileScrollAnimation() {
      //var headerHeight = document.getElementsByClassName('mobile-nav-logo-wrapper')[0].offsetHeight * -1;
      // Hard coded for font loading trick
      var headerHeight = -100.6;
      var nav = document.getElementById('mobile-nav');
      if(this.getDeviceWidthHeight().width > 767) {
        headerHeight = headerHeight - 14;
        nav = document.getElementById('top-nav');
      }
      var doc = document.documentElement;
      var prevTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
      window.addEventListener('scroll', () => {
        var nextTop = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
        var move = parseInt(Math.abs(nextTop - prevTop));
        var mobileTop = parseInt(nav.style.top.substring(0, nav.style.top.length - 2));
        if(nextTop > prevTop) {
          if(mobileTop > headerHeight) {
            let newTop = parseInt(mobileTop - move) >= headerHeight ? parseInt(mobileTop - move) : headerHeight;
            nav.style.top = newTop + "px";
          }
        } else if (prevTop > nextTop) {
          if(mobileTop < 0) {
            let newTop = parseInt(mobileTop + move) <= 0 ? parseInt(mobileTop + move) : 0;
            nav.style.top = newTop + "px";
          }
        }
        prevTop = nextTop;
      });
    }
  },
  created() {
    
  },
  mounted() {
    try {
      document.fonts.load('24px PT Sans Narrow')
      .then(() => { 
        document.fonts.load('48px PT Sans Narrow')
        .then(() => { 
          document.fonts.load('280px PT Sans Narrow')
          .then(() => { 
            this.loading = false;
            initAnimations();
            this.mobileScrollAnimation();
          });
        });
      });
    } catch(e) {
      this.loading = false;
      initAnimations();
      this.mobileScrollAnimation();
    }
  }
}
</script>


<style src="./css/siteStyles.css"></style>
<style>
  /* Top Nav rgba(72, 73, 73, 1) */
  #top-nav { color: white; background: rgba(0,145,142, .75); position:fixed; height: 60px; z-index: 99;
  width: 100%; top:0; font-family: 'Roboto Mono', monospace; color: white; padding-top:12px; animation: fadein 1.5s; }
  #top-nav a { text-decoration: none; }
  #top-nav a:hover { color: white; }
  .top-nav-animate { animation: fadein 1.5s; }
  .top-nav-right { text-align: right; }
  .top-nav-right a { margin-left: 30px; position: relative;}
  .top-nav-logo { font-size: 72px; line-height: 76px; padding: 0 10px; font-family: 'PT Sans Narrow', sans-serif;border: 2px solid white; background: rgba(41,42,43, 0.6); }
  .top-nav-left { position: absolute; padding: 0 12px;}
  #mobile-nav { display: none; }
  @media(max-width:768px) {
    #top-nav { display: none; }
    .top-nav-logo { font-size: 48px; line-height: 52px; padding: 0 6px; }
    .mobile-nav-logo-wrapper { transition: .5s all; z-index: 100; cursor: pointer; position:absolute; padding: 15px 0 0 15px; }
    .mobile-logo-text { font-size: 24px; }
    #mobile-nav { right: 0; left: 0; z-index: 999; display: block; position:fixed; height: 60px; background: rgba(0,145,142, .75); }
    .mobile-nav-menu { z-index: 99; height: 150vh; padding-top: 125px; border-bottom: solid 1px white;
      width:260px; transform: translateX(-100%); transition: .5s all; position: absolute; background: rgba(42, 43, 43, .98); }
    .mobile-nav-menu.mobileOpen { transform: translateX(0); }
    .mobile-nav-menu a:first-child { border-top: solid white 1px; }
    .mobile-nav-menu a { display: block; opacity: 0; transition: .5s all; padding: 15px 0; margin: 0 15px;
      border-bottom: solid white 1px; text-decoration: none;}
    .mobile-nav-menu.mobileOpen a { opacity: 1; transition: .5s all; }
  }

</style>
