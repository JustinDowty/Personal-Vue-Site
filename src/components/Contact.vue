<template>
<div>
  <div class="row-top">
    <div class="page-width">
      <div class="row flex gray-back">
        <div class="col col-58">
          <h1 class="mb-20">Contact Me</h1>
          <p>Feel free to message me here with any questions, business inquiries, or to just start a conversation!</p>
        </div>
        <form class="col col-42">
          <input type="text" placeholder="Name"/>
          <input type="text" placeholder="Email"/>
          <textarea placeholder="Message"></textarea>
          <input type="submit" />
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Contact',
  components: {

  },
  data() {
      return {
          
      }
  },
  methods: {

  },
  mounted(){
    
  },
  created() {
    
  }
}
</script>

<style scoped>
    input, textarea { width: 100%; background: transparent; padding: 10px; margin-bottom: 15px; border: 1px solid white; outline: none; color: white; font-size: 18px; }
    input::placeholder, textarea::placeholder { color: #aaa; }
    textarea { height: 200px; }
    input[type="submit"] { background: white; color: rgb(73, 73, 73); font-weight: 700; cursor: pointer; transition: .3s all; }
    input[type="submit"]:hover { background: transparent; color: white; }
</style>