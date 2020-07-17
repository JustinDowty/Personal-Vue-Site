<template>
  <div class="page-width">
    <div class="gray-back row">
      <h2 class="text-center">Businesses I have worked with</h2>
      <ul>
        <li v-for="business in businesses" :key="business.id">{{business}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Businesses',
  components: {

  },
  data() {
      return {
          businesses: []
      }
  },
  methods: {

  },
  created() {
    this.businesses = ["GR Rubber - Full Website",
                        "Delivering Happiness - Full Website/ROI Calculator",
                        "Northern Staffing Services - Full Website",
                        "Aspen Laser - Development",
                        "Hill DT - ROI Calculator",
                        "Crown Battery - Customer Portal App",
                        "Advantage Point Legal - Legal Document Web App",
                        "Try Fleet - Development",
                        "ODL - Development",
                        "GR Chair - Development",
                        "Independent Bank - SharePoint Apps",
                        "FUSE - Development",
                        "Insala - Development",
                        "Grout Matters - Development",
                        "Flow Cleanrooms - Web Form App",
                        "Gerald R. Ford Airport - Real-Time Flight App",
                        "Irwin Seating - Development",
                        
                        ];
    this.businesses.sort();
  }
}
</script>

<style scoped>

</style>
