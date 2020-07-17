<template>
<div>  
  <div class="row-top">
    <div class="gray-back">
      <div class="row slideupsm">
        <div class="page-width flex-wrap">
          <div class="col col-58 flex">
            <div class="mt-15 mb-15">
              <h1 class="mb-20" style="width: 100%">Web</h1>
              <h2 id="subheader" class="relative subhead typing">{{subHeaderText}}</h2>
            </div>
          </div>
          <div class="col col-42 flex-center align-center">
            <img class="popup hero-img" src="../assets/logos/laptop.png" >
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
            <img src="../assets/sites/dh.jpg">
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">Delivering Happiness</h2>
          <p class="mb-20">Client website that is integrated into the HubSpot Marketing platform.</p>
          <div class="link-section flex-wrap justify-between">
            <a href="https://www.deliveringhappiness.com" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a><br>
            <span @click="showPopUp($event.target)" class="pseudo-link tesimonial-link"><i class="fas fa-user pr-10"></i>Testimonial</span>
            <div id="dh-testimonial" class="testimonial-pop-outer">
              <div class="testimonial-pop">
                <div class="testimonial-close"><i @click="hidePopUp($event.target)" class="fas fa-times"></i></div>
                <p>Justin was an absolute delight to work with during the re-design of our website. Our project was a complete overhaul! Moving our old website from Wordpress to HubSpot COS was a big undertaking. Justin took care to listen first and understand our goals and needs for each site page before going to work. We wanted a site that was engaging for our leads and easy for us to update in-house after we went live.   That's exactly what we got! It was a delight to work with him on this project as he continued to go above and beyond to make sure the final product hit the mark - which it did! Grateful to have had such an incredible developer taking care throughout all the details to produce what we had envisioned and equip us with such a necessary tool for our business. Our new webiste has increased our site visits month over month which is directly impacting our purpose of creating happier workplaces around the globe.<br><br> - April Jones</p>
              </div>
            </div>
            <br>
          </div>
        </div>
      </div>
    </div>

    <div class="page-width">
      <div class="row flex-wrap gray-back slideupsm">
        <div class="col col-58 flex align-center">
          <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
            <img src="../assets/sites/martech.png">
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">MarTech</h2>
          <p class="mb-20">Marketing Technology Professionals is a ManoByte project I developed with a team as a resource for connecting marketing agencies around the world with new clients. The project is on hold, but currently contains a large directory of Marketing Agencies, Software Companies, Resources, and Events. The website is a .Net MVC Application.</p>
          <a href="https://www.marketingtechnologypro.com/" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
        </div>
      </div>
    </div>

    <div class="page-width">
      <div class="row flex-wrap gray-back slideupsm">
        <div class="col col-58 flex align-center">
          <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
            <div class="video">
              <video width="100%" height="auto" autoplay loop nocontrols playsinline muted="muted">
                <source src="../assets/videos/IBIntra.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
        <div class="col col-42">
          <h2 class="mb-20">Independent Bank Intranet</h2>
          <p class="mb-20">A team of us at ManoByte built IB a new SharePoint modern site infrastructure. I worked as the developer on this project, which required building a handful of custom React components with TypeScript to provide rich, interactive content for the site. Displayed is a sample Company Brand Guide web part.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="gray-back">
    <div class="page-width row flex-wrap pb-0 slideupsm">
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/grrrtf.png')})`}" ></div>
        </div>
        <h2 class="mb-20">GRR Flight Tracker</h2>
        <p class="mb-20">A Vue.js Real-Time application I built for an airport website. For the project I also developed multiple Node server scripts.</p>
        <a href="https://www.grr.org/real-time-flight-tracker" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/dhroi.jpg')})`}" ></div>
        </div>
        <h2 class="mb-20">DH - ROI Calculator</h2>
        <p class="mb-20">A web app I developed for Delivering Happiness that serves as a Return-On-Investment calculator for clients. A front-end web app utilizing jQuery and SVG coded graphics.
        </p>
        <a href="https://www.deliveringhappiness.com/roi-calculator" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/northernstaffing.png')})`}" ></div>
        </div>
        <h2 class="mb-20">Northern Staffing</h2>
        <p class="mb-20">Client website that is integrated into the HubSpot Marketing platform.</p>
        <a href="https://www.northernstaffingservices.com/" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/grrub.jpg')})`}" ></div>
        </div>
        <h2 class="mb-20">GR Rubber</h2>
        <p class="mb-20">Client website that is integrated into the HubSpot Marketing platform.</p>
        <a href="https://www.grrubber.com" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/birthday.jpg')})`}" ></div>
        </div>
        <h2 class="mb-20">Birthday Card</h2>
        <p class="mb-20">An interactive web app birthday card I developed. (Works fine in Chrome and FireFox, not so much in Edge).</p>
        <a href="/birthdaycard" target="_blank"><i class="fas fa-laptop pr-10"></i>Visit Site</a>
      </div>
      <div class="col col-33 mb-50">
        <div class="media-container" @click="e => e.target.classList.toggle('full-screen')">
          <div class="card-img" :style="{'background-image': `url(${require('../assets/sites/portfolio.png')})`}" ></div>
        </div>
        <h2 class="mb-20">This site!</h2>
        <p class="mb-20">I built this SPA web app with Vue.js. All HTML/CSS/JS is written from scratch.</p>
        <a href="" target="_blank"><i class="fab fa-github-square pr-10"></i>GitHub</a>
      </div>
    </div>
  </div>
  <businesses></businesses>
</div>
</template>

<script>
import Businesses from './Businesses.vue'

export default {
  name: 'Sites',
  components: {
    "businesses": Businesses
  },
  data() {
      return {
          subHeaderText: ""
      }
  },
  methods: {
    showPopUp(e) {
      let popUp = e.nextElementSibling;
      popUp.style = "display: block;";
    },
    hidePopUp(e) {
      let popUp = e.parentElement.parentElement.parentElement;
      popUp.style = "display: none;";
    }
  },
  mounted() {
    const sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    const typeText = async () => {
      var subHeaderString = "A modest portfolio of a few of my favorite websites and applications I have developed";
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