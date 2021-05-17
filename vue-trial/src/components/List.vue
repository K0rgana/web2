<template>
  <div>
    
    <h1>O seu número da sorte é {{ numLuck }}</h1>
    <button @click.prevent="getNum()">Me de um numero da sorte!</button>

    <img src="https://thumbs.gfycat.com/SnappyMildCrane-max-1mb.gif" alt="">
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['numLuck'])
  },
  methods:{
    getNum(){
      this.$store.dispatch('insertNum', Math.floor(Math.random() * 100))
    }
  }
}
</script>

<style lang="scss" scoped>
div{
  display: flex;
  flex-direction: column;
  align-items: center;
}
img{
  position: relative;
  height: 200px;
  margin-bottom: 20px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
 }
</style> 