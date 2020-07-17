<template>
<div>
  <div class="home-wrapper">
    <div class="home-content slideup-module scroll-module">
      <div><div class="initials-container">JD</div></div>
      <div class="home-title">Justin Dowty CIS Portfolio</div>
    </div>
	</div>

  <div class="page-width slideright-module mt-150">
    <div class="row flex-wrap mb-100 gray-back">
      <div class="col col-42">
        <img src="../assets/funhat.jpg">
      </div>
      <div class="col col-58">
        <h2 class="mb-20">Welcome to my Portfolio Site!</h2>
        <p class="mb-50">I have built this Vue.js Application to showcase some of my interests and accomplishments in the wide world of Web Development and Programming!</p>
        <div class="home-link-section">
          <a href="https://github.com/justindowty" target="_blank"><i class="fab fa-github-square pr-10"></i>GitHub</a>
          <a href="https://www.linkedin.com/in/justin-dowty-25a314154/" target="_blank"><i class="fab fa-linkedin pr-10"></i>LinkedIn</a>
        </div>
        <div class="home-link-section">
          <a href="mailto:justin@manobyte.com"><i class="fas fa-envelope pr-10"></i>Email</a>
          <a href="../downloads/JustinDowtyResume.docx"><i class="fas fa-print pr-10"></i>Resume</a>
        </div>
      </div>
    </div>
  </div>

  <div class="gray-back">
    <div class="page-width">
      <div class="row flex-wrap mb-100">
        <div class="col col-33 text-center">
          <h2 class="mb-10">Web</h2>
          <img class="tech-logo mb-10 popup-module anim-delay-1" src="../assets/logos/laptop.png" >
          <p>Vue, React, JavaScript/TypeScript, jQuery, HTML, CSS, CMS</p>
        </div>
        <div class="col col-33 text-center">
          <h2 class="mb-10">Backend</h2>
          <img class="tech-logo mb-10 popup-module anim-delay-2" src="../assets/logos/terminal.png" >
          <p>Node, JavaScript/TypeScript, C#, .Net, SQL, Azure, Heroku</p>
        </div>
        <div class="col col-33 text-center">
          <h2 class="mb-10">Mobile</h2>
          <img class="tech-logo mb-10 popup-module anim-delay-3" src="../assets/logos/phone.png" >
          <p>Java, Android Studio, Swift, xCode, JavaScript, React Native</p>
        </div>
      </div>
    </div>
  </div>

  <div class="page-width slideup-module">
    <div class="row flex-wrap mb-100 gray-back">
      <div class="col col-42">
        <img src="../assets/suit.jpg" style="width: 100%">
      </div>
      <div class="col col-58">
        <h2 class="mb-20">About Me</h2>
        <p class="mb-20">I am a passionate web developer, programmer, and life-long learner. 
          I currently work as a developer for <a href="https://www.manobyte.com">ManoByte</a>, a digital marketing company in Grand Rapids, MI. 
          I graduated from Grand Valley State University 2019 with a Bachelor's Degree in Computer Science.<br><br>
          Professionally, I have built and worked on many client applications and websites. I have experience building apps
          with a wide variety of languages and development frameworks.<br><br>
          Aside from computer science, I am an avid Nintendo fan, live music fanatic, and 
          have a wonderful wife and step children I love spending time with.</p>
      </div>
    </div>
  </div>

  <!--<div class="gray-back slideright-module">
    <div>
      <div id="language-slider" class="page-width">
        <div class="language-slide"><img src="../assets/languages/js.png"></div>
        <div class="language-slide"><img src="../assets/languages/vue.png"></div>
        <div class="language-slide"><img src="../assets/languages/react.png"></div>
        <div class="language-slide"><img src="../assets/languages/java.png"></div>
        <div class="language-slide"><img src="../assets/languages/AndroidStudio.png"></div>
        <div class="language-slide"><img src="../assets/languages/csharp.png"></div>
        <div class="language-slide"><img src="../assets/languages/sql.png"></div>
      </div>
    </div>
	</div>-->

</div>
</template>

<script>
import { checkAnimations } from '../js/animation-vanilla.js';

export default {
  name: 'Home',
  components: {
  },
  data() {
      return {
          
      }
  },
  methods: {

  },
  created() {
    
  },
  mounted(){
    checkAnimations();
  }
}
</script>

<style scoped>
/* Home Page */
  .home-wrapper { min-height: 100vh; padding: 110px 0 80px;margin: 0 auto; 
    display: -webkit-flex; display: flex; -webkit-flex-wrap: wrap; flex-wrap: wrap; justify-content: center; align-items: center;}
  .home-content { display: -webkit-flex; display: flex; }
  .initials-container {  font-size: 280px; border: 10px solid white; padding: 0 25px 0 40px; font-weight: 700; line-height:300px; }
	.home-title { font-size: 100px; width: 100%; max-width: 500px; padding-left: 50px; bottom: 0; margin-top:60px; font-family: 'PT Sans Narrow', sans-serif;}
  #language-slider { padding: 30px; display: flex; flex-wrap: wrap; justify-content:center; }
  .language-slide { min-width: 25%; margin-bottom: 20px; display: flex; justify-content: center; align-items: center; }
  .language-slide img { max-height: 80px; margin: 0 20px; max-width: 220px; }
  .tech-logo { width: 100%; max-width: 140px; }
  .home-link-section { display: flex; justify-content: space-between; }
  .home-link-section a { margin: 0 auto 30px 0; display: block; }
@media(max-width:1024px) {
	.stack-section-top { padding-top: 100px; }
	/* Home Page */
  .home-wrapper { text-align: center; padding: 100px 20px;  }
  .home-content { display: block; }
	.home-title {font-size: 80px; max-width: 400px;padding:0; margin: 20px auto 0;}
  .initials-container { font-size: 160px;display:inline;}
}
@media(max-width: 767px) {
  .home-title { padding: 0 15px; }
}
@media(max-width: 500px) {
  .home-link-section { display: block; }
}

</style>
