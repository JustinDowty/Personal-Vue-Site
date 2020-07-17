<template>
  <div class="container">
    <div class="start-button" v-on:click="startStop()">{{ runningText }}</div>
    <div class="header">{{ currentMethod }}</div>
    <div v-for="color in colors" :key="color.id" class="block" :style="{'background': generateColorString(color)}"></div>
    <div class="color-indicator">{{ currentColor }}</div>
  </div>
</template>

<script>
export default {
  name: 'sortingvisual',
  components: {

  },
  data() {
      return {
          colors: [],
          running: false,
          currentColor: "",
          currentMethod: "Visualizing Sorting Algorithms",
          runningText: "Start"
      }
  },
  methods: {
    sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    },
    startStop() {
      this.running = !this.running;
      if(this.running) {
        this.main();
      } 
      this.runningText = this.running ? "Stop" : "Start";
    },
    async mergeSort(arr, l, r, col) {
        if(l >= r || !this.running){
            return;
        }
        var m = Math.floor((l+r) / 2);
        await this.mergeSort(arr, l, m, col);
        if(!this.running) {
          return;
        }
        await this.mergeSort(arr, m+1, r, col);
        if(!this.running) {
          return;
        }
        await this.merge(arr, l, m, r, col);
        if(!this.running) {
          return;
        }
    },
    async merge(arr, l, m, r, col){
        var tempLeft = arr.slice(l, m+1);
        var tempRight = arr.slice(m+1, r+1);
        var lenLeft = tempLeft.length;
        var lenRight = tempRight.length;
        var iLeft = 0;
        var iRight = 0;
        var iArr = l;
        while(iLeft < lenLeft && iRight < lenRight) {
            await this.sleep(100);
            if(tempLeft[iLeft][col] < tempRight[iRight][col]) {
                this.$set(arr, iArr, tempLeft[iLeft]);
                iLeft++;
            } else {
                this.$set(arr, iArr, tempRight[iRight]);
                iRight++;
            }
            if(!this.running) {
              return;
            }
            iArr++;
        }

        while(iLeft < lenLeft) {
          await this.sleep(100);
          this.$set(arr, iArr, tempLeft[iLeft]);
          iArr++;
          iLeft++;
          if(!this.running) {
            return;
          }
        }

        while(iRight < lenRight) {
          await this.sleep(100);
          this.$set(arr, iArr, tempRight[iRight]);
          iArr++;
          iRight++;
          if(!this.running) {
            return;
          }
        }
    },

    async bubbleSort(arr, col, reverse) {
      if(!reverse) {
        for(let i = 0; i < arr.length - 1; i++) {
          for(let j = 0; j < arr.length - i - 1; j++) {
              if(!this.running) {
                return;
              }
              if(arr[j][col] > arr[j+1][col]) {
                  let temp = arr[j+1];
                  this.$set(arr, j+1, arr[j]);
                  this.$set(arr, j, temp);
                  await this.sleep(5);
              }
          }
        }
      } else {
        for(let i = arr.length - 1; i > 0; i--) {
          for(let j = arr.length - i; j > 0; j--) {
              if(!this.running) {
                return;
              }
              if(arr[j][col] > arr[j-1][col]) {
                  let temp = arr[j-1];
                  this.$set(arr, j-1, arr[j]);
                  this.$set(arr, j, temp);
                  await this.sleep(5);
              }
          }
        }
      }
    },

    radixSort(arr, col, pos) {
        var divisor = pos == 0 ? 1 : Math.pow(10, pos);

        var buckets = [];
        for(let digit = 0; digit < 10; digit++) {
          buckets[digit] = [];
        }
        
        for(let i = 0; i < arr.length; i++) {
          if(!this.running) {
            return;
          }
          let itemValue = arr[i][col];
          let itemDigit = parseInt(itemValue / divisor) % 10;
          buckets[itemDigit].push(arr[i]);
        }

        var iArr = 0;
        for(let b = 0; b < buckets.length; b++) {
          for(let i = 0; i < buckets[b].length; i++) {
            if(!this.running) {
              return;
            }
            this.$set(arr, iArr, buckets[b][i]);
            iArr++;
          }
        }
    },

    generateRandomColors(arr, color) {
        for(let i = 0; i < 80; i++) {
          var newColor = {
            Red: 0,
            Green: 0,
            Blue: 0
          }
          newColor[color] = parseInt(Math.random() * 255);
          this.$set(arr, i, newColor);
        }
    },

    generateColorString(color) {
      return `rgb(${color.Red}, ${color.Green}, ${color.Blue}`;
    },

    async main(){
      var cols = ["Red", "Green", "Blue"];
      var i = 0;
      while(true){
        this.currentColor = cols[i];
        this.generateRandomColors(this.colors, cols[i]);
        this.currentMethod = "Merge Sort";
        await this.mergeSort(this.colors, 0, this.colors.length - 1, cols[i]); 
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;

        this.currentColor = cols[i];
        this.generateRandomColors(this.colors, cols[i]);
        this.currentMethod = "Bubble Sort";       
        await this.bubbleSort(this.colors, cols[i], true);
        if(!this.running) {
          break;
        }
        this.currentMethod = "Bubble Sort (Reverse)";
        await this.bubbleSort(this.colors, cols[i], false);
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;

        this.currentColor = cols[i];
        this.generateRandomColors(this.colors, cols[i]);
        for(let pos = 0; pos < 3; pos++) {
          this.currentMethod = "Radix Sort - " + Math.pow(10, pos) + "'s Digit";
          this.radixSort(this.colors, cols[i], pos);
          if(!this.running) {
            break;
          }
          await this.sleep(1500);
        }
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;
      }
    }
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  .container { display: flex; flex-wrap: wrap; position: relative; }
  .block { width: 10%; padding-top: calc(12.5vh - 8.75px); transition: .1s background-color linear; }
  .color-indicator { position:absolute; bottom: 10px; right: 10px; color: white; font-size: 36px; }
  .header { font-size: 36px; padding: 10px; position: absolute; top: 10px; left:10px; color: white; }
  .top-nav, .mobile-nav { display: none !important; }
  .start-button { font-size: 36px; position: absolute; top: 10px; right: 10px; cursor:pointer; padding: 10px; }
  .start-button:hover { text-decoration: underline; color: rgb(23, 97, 216); }
</style>
