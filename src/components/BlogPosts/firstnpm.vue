<template>
<div class="blog-entry">
    <div class="blog-title mb-10">
        <h2 class="orange-text">My First NPM Package</h2>
      </div>
      <div class="blog-underline mb-20"></div>
      <p style="text-decoration: underline;">Vue Time Picker</p>
      <p>Output: {{time}}</p>
      <TimePicker v-model="time"></TimePicker>
      <div style="height:200px"></div>
    <p>
        While working on a small Vue project for work I came across the need for a Time Picker component, ideally one already 
        styled in the sort of Bootstrap style of their components/time picker. Assuming there was probably a bunch of good candidates on 
        NPM to use, I started there. Surprisingly, none of them were really what I was looking for, for one reason or another. So, I decided I 
        will just make my own (I like making my own stuff better sometimes anyways and I also had the time that day to do it).
    </p>
    <p>
        After spending a few hours making this Time Picker component, I was satisfied. I felt I matched the look and feel of 
        the Bootstrap equivalent close enough for my purpose, and it functioned as I needed it to. Well, I pretty quickly had the thought 
        that since this was something I had been looking for, maybe someone else would get some use out of it, too. I did some quick 
        research on publishing NPM packages, saw it was extremely quick and easy, and decided to go ahead and do it. The initial "attention" it 
        seemed to get was shocking....
    </p>
    <p>
        My component somehow immediately received over 200 downloads in only a day. How could this even be? That seems ridiculous. Of course I had to 
        know whether this was legitimate or not, and the answer is no, not really. Referencing an NPM article <a href="https://blog.npmjs.org/post/92574016600/numeric-precision-matters-how-npm-download-counts" target="_blank">here</a>, 
        it is easy to understand why that happened. However, as the next week or so went on I checked a few more times, and kept seeing steady downloads day to day. 
        That is pretty cool to me. I posted the source in a repo as well, and that also had a fair number of Clones/Unique Cloners. Really interesting knowing there 
        are people out there using your code in their projects, maybe even in production.
    </p>
    <br>
    <p>
        NPM: <a href="https://www.npmjs.com/package/vue-time-picker-bootstrap" target="_blank">https://www.npmjs.com/package/vue-time-picker-bootstrap</a><br><br>
        GitHub: <a href="https://github.com/JustinDowty/VueTimePicker" target="_blank">https://github.com/JustinDowty/VueTimePicker</a><br><br>
    </p>
<div class="blog-post-border"></div>
</div>
</template>

<script>
import TimePicker from 'vue-time-picker-bootstrap'

export default {
    name: 'firstnpm',
    components: {
        TimePicker
    },
    data() {
      return {
          time: "12:00:00 PM"
      }
  },
}
</script>

<style>
    .vue-tp-wrapper * {
    box-sizing: border-box;
}

#vue-tp-time-display {
    cursor: auto;
}

#vue-tp-time {
    background: white;
    position: absolute;
    top: 40px;
    border: 1px solid #999;
    border-radius: 2px;
    padding: 5px;
    width: 200px;
}

.vue-tp-row {
    display: flex;
}

.vue-tp-row .chevron-btn {
    border: 1px solid transparent;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
}

.vue-tp-row .chevron-btn:hover {
    background: #ccc;
    border: 1px solid #999;
    border-radius: 2px;
}

.vue-tp-row .chevron-btn svg {
    height: 20px;
    width: 16px;
}

.vue-tp-input {
    width: 33%;
    padding: 10px 5px;
    display: flex;
    align-items: center;
}

.vue-tp-input input,
.vue-tp-input select {
    max-width: 100%;
    height: 50px;
    font-size: 18px;
    text-align: center;
}

.vue-tp-spacer {
    flex: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
}
#vue-tp-time::before {
    content: "";
    display: inline-block;
    left: 6px;
    position: absolute;
    top: -7px;
    border-bottom: 7px solid rgba(0, 0, 0, 0.8);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
}
#vue-tp-time::after {
    content: "";
    display: inline-block;
    left: 7px;
    position: absolute;
    top: -6px;
    border-bottom: 6px solid rgb(255, 255, 255);
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
}
</style>