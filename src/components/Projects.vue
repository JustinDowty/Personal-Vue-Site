<template>
<div>
  <div class="row-top">
    <div class="gray-back">
      <div class="row slideupsm">
        <div class="page-width flex-wrap">
          <div class="col col-58 flex">
            <div class="mt-15 mb-15">
              <h1 class="mb-20">Projects</h1>
              <h2 id="subheader" class="relative subhead typing">{{subHeaderText}}</h2>
            </div>
          </div>
          <div class="col col-42 flex-center align-center">
            <img class="popup hero-img" src="../assets/logos/terminal.png" >
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="staggered-container">
    <div class="page-width">
      <div class="row flex-wrap gray-back slideupsm">
        <div class="col col-58 flex align-center">
          <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
            <div class="video">
              <video width="100%" height="auto" autoplay loop nocontrols playsinline muted="muted">
                <source src="../assets/videos/Orbit.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">Orbit</h2>
          <p class="mb-20">Orbit is a desktop space shooter game I developed in a team. All of the Java code was written ourselves.</p>
          <div class="link-section flex-wrap justify-between">
            <a href="https://github.com/JustinDowty/OrbitGame" target="_blank"><i class="fab fa-github-square pr-10"></i>GitHub</a><br>
            <a href="https://justindowty.github.io/OrbitGame/" target="_blank"><i class="fab fa-java pr-10"></i>JavaDoc</a><br>
          </div>
        </div>
      </div>
    </div>

    <div class="page-width">
      <div class="row flex-wrap gray-back slideupsm">
        <div class="col col-58 flex align-center">
          <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
            <div class="video">
              <video width="100%" height="auto" autoplay loop nocontrols playsinline muted="muted">
                <source src="../assets/videos/Bacon.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">Bacon Wars</h2>
          <p class="mb-20">Bacon Wars is an Android application game that I created with Java and Android Studio. The game lets players take control of a slice of bacon being attacked by hungry and familiar faces.</p>
          <div class="link-section flex-wrap justify-between">
            <a href="https://github.com/JustinDowty/Bacon_Wars" target="_blank"><i class="fab fa-github-square pr-10"></i>GitHub</a><br>
            <a href="../downloads/BaconWars.apk" target="_blank" download><i class="fab fa-android pr-10"></i>APK</a><br>
          </div>
        </div>
      </div>
    </div>

    <div class="page-width">
      <div class="row flex-wrap gray-back slideupsm">
        <div class="col col-58 flex align-center">
          <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
            <img src="../assets/projects/barter.jpg">
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">GVSU Barter Board</h2>
          <p class="mb-20">The GVSU Barter Board is an app I developed with a team that is designed to be a Marketplace for GVSU students. An Android and iOS version were developed separately.
          </p>
          <div class="link-section flex-wrap justify-between">
            <a href="https://drive.google.com/open?id=1ckpPXERZ9u_JS_4CsrNEDRxiN8zMsJ_R" target="_blank"><i class="fas fa-video pr-10"></i>Demo Video</a><br>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="gray-back">
    <div class="page-width row flex-wrap pb-0 slideupsm">
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/projects/ufo.jpg')})`}" ></div>
        </div>
        <h2 class="mb-20">UFO Simulator</h2>
        <p class="mb-20">I developed this project with a friend using JavaScript and the THREEJS framework for web. Earth is set at the center with the Moon and Space Station orbiting. UFO can be flown and fire missles.
        </p>
        <a href="/ufo" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/projects/gvps.jpg')})`}" ></div>
        </div>
        <h2 class="mb-20">GVPS</h2>
        <p class="mb-20">GVPS is an Android app I developed with the Android Studio platform, Java, Firebase, and Google Maps API. With the app, the user can save GPS locations with their class schedule and get directions/ETA across campus.</p>
        <div class="link-section flex-wrap justify-between">
          <a href="https://github.com/JustinDowty/GVPS_Android_App" target="_blank"><i class="fab fa-github-square pr-10"></i>GitHub</a><br>
          <a href="../downloads/GVPS.apk" target="_blank" download><i class="fab fa-android pr-10"></i>APK</a><br>
        </div>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/projects/starwars.png')})`}" ></div>
        </div>
        <h2 class="mb-20">Star Wars Simulator</h2>
        <p class="mb-20">This is a a Star Wars space battle simulator WebGL project I developed with JavaScript and the WebGL library. Featuring X-Wings, Tie Fighters, Imperial Shuttles, and the Death Star.</p>
        <a href="/starwars" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Projects',
  components: {

  },
  data() {
      return {
          subHeaderText: ""
      }
  },
  methods: {

  },
  mounted(){
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const typeText = async () => {
      var subHeaderString = "A collection of various coding projects across multiple platforms";
      await sleep(500);
      for(var i = 0; i < subHeaderString.length; i ++) {
        this.subHeaderText += subHeaderString[i];
        await sleep(40);
      }
      document.getElementById('subheader').classList.remove('typing');
    }
    typeText();
  },
  created() {
    
  }
}
</script>

<style>


</style>