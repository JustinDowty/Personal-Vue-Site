<template>  
  <div class="container">
    <div class="start-button" v-on:click="startStop()">{{ runningText }}</div>
    <div class="header">{{ currentMethod }}</div>
    <img :src="generateImageString(i)" v-for="i in indexArray" :key="i" class="block">
  </div>
</template>

<script>
export default {
  name: 'sortingvisual',
  components: {

  },
  data() {
      return {
          indexArray: [],
          running: false,
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
    async mergeSort(arr, l, r) {
        if(l >= r || !this.running){
            return;
        }
        var m = Math.floor((l+r) / 2);
        await this.mergeSort(arr, l, m);
        if(!this.running) {
          return;
        }
        await this.mergeSort(arr, m+1, r);
        if(!this.running) {
          return;
        }
        await this.merge(arr, l, m, r);
        if(!this.running) {
          return;
        }
    },
    async merge(arr, l, m, r){
        var tempLeft = arr.slice(l, m+1);
        var tempRight = arr.slice(m+1, r+1);
        var lenLeft = tempLeft.length;
        var lenRight = tempRight.length;
        var iLeft = 0;
        var iRight = 0;
        var iArr = l;
        while(iLeft < lenLeft && iRight < lenRight) {
            await this.sleep(10);
            if(tempLeft[iLeft] < tempRight[iRight]) {
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
          await this.sleep(10);
          this.$set(arr, iArr, tempLeft[iLeft]);
          iArr++;
          iLeft++;
          if(!this.running) {
            return;
          }
        }

        while(iRight < lenRight) {
          await this.sleep(10);
          this.$set(arr, iArr, tempRight[iRight]);
          iArr++;
          iRight++;
          if(!this.running) {
            return;
          }
        }
    },

    async bubbleSort(arr, reverse) {
      if(!reverse) {
        for(let i = 0; i < arr.length - 1; i++) {
          for(let j = 0; j < arr.length - i - 1; j++) {
              if(!this.running) {
                return;
              }
              if(arr[j] > arr[j+1]) {
                  let temp = arr[j+1];
                  this.$set(arr, j+1, arr[j]);
                  this.$set(arr, j, temp);
                  await this.sleep(1);
              }
          }
        }
      } else {
        for(let i = arr.length - 1; i > 0; i--) {
          for(let j = arr.length - i; j > 0; j--) {
              if(!this.running) {
                return;
              }
              if(arr[j] > arr[j-1]) {
                  let temp = arr[j-1];
                  this.$set(arr, j-1, arr[j]);
                  this.$set(arr, j, temp);
                  await this.sleep(1);
              }
          }
        }
      }
    },

    radixSort(arr, pos) {
        var divisor = pos == 0 ? 1 : Math.pow(10, pos);

        var buckets = [];
        for(let digit = 0; digit < 10; digit++) {
          buckets[digit] = [];
        }
        
        for(let i = 0; i < arr.length; i++) {
          if(!this.running) {
            return;
          }
          let itemValue = arr[i];
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

    generateImageString(i) {
        if(!i) {
            return '';
        }
        var string = `${i}`;
        return require(`../../assets/smw20/${string}.jpg`)
    },

    generateRandomArray() {
        this.indexArray = [];
        while(this.indexArray.length < 320) {
            let randNum = Math.floor(Math.random() * 320) + 1;
            if(!this.indexArray.includes(randNum)) {
                this.indexArray.push(randNum);
            }
        }
    },

    async main(){
      var i = 0;
      while(true){
        this.generateRandomArray(this.indexArray);
        this.currentMethod = "Merge Sort";
        await this.mergeSort(this.indexArray, 0, this.indexArray.length - 1); 
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;
        await this.sleep(1500);
        this.generateRandomArray(this.indexArray);
        this.currentMethod = "Bubble Sort";       
        await this.bubbleSort(this.indexArray, false);
        if(!this.running) {
          break;
        }
        /*await this.sleep(1500);
        this.currentMethod = "Bubble Sort (Reverse)";
        await this.bubbleSort(this.indexArray, true);
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;*/
        await this.sleep(1500);
        this.generateRandomArray(this.indexArray);
        for(let pos = 0; pos < 3; pos++) {
          this.currentMethod = "Radix Sort - " + Math.pow(10, pos) + "'s Digit";
          this.radixSort(this.indexArray, pos);
          if(!this.running) {
            break;
          }
          await this.sleep(1500);
        }
        if(!this.running) {
          break;
        }
        i = (i + 1) % 3;
        await this.sleep(1500);
     }      
    }
  },
  created() {
      
  },
  mounted() {
    
  }
}
</script>

<style scoped>
  .container { display: flex; flex-wrap: wrap; position: relative; width: 100%; margin: auto; }
  .block { width: 5%;  }
  .color-indicator { position:absolute; bottom: 10px; right: 10px; color: white; font-size: 36px; }
  .header { font-size: 36px; padding: 10px; position: absolute; top: 10px; left:10px; color: white; margin-right: 100px; }
  .top-nav, .mobile-nav { display: none !important; }
  .start-button { font-size: 36px; position: absolute; top: 10px; right: 10px; cursor:pointer; padding: 10px; }
  .start-button:hover { text-decoration: underline; color: rgb(23, 97, 216); }
</style>
