<template>
  <div>

    <img :src="pic" alt="">
    <h3>{{ name }}</h3>
    <h5>{{ phrase }}</h5>

    {{doctors}}
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      pic:"https://i0.wp.com/downthetubes.net/wp-content/uploads/2019/07/DW13-Jeremy-Enecio.jpg?resize=768%2C767&ssl=1",
      name: "Jodie Whittaker",
      phrase: "Oh, brilliant!"
    }
  },
  computed: {
    ...mapState(['doctors'])
    },
}
</script>

<style scoped>
div{
  background: #fff;
  width: 290px;
  display: inline-block;
  margin: auto;
  border-radius: 8px;
  color: #080f16;

  box-shadow: -1px 15px 30px -12px #ffbf02;
}
 img{
  position: relative;
  height: 230px;
  margin-bottom: 20px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
 }

 h5{
    font-style: italic;
    padding-bottom: 1rem;
 }
</style>
