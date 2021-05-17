<template>
  <div class="home">
    <img alt="DW logo" src="https://www.doctorwho.tv/brand/assets/images/logos/logo-dw-white.svg">
    <h4>See all doctors</h4>
    <Doctor/>
  </div>
</template>

<script>
// @ is an alias to /src
import Doctor from '../components/Doctor.vue'

export default {
  name: 'Home',
  components: {
    Doctor
  }
}
</script>

<style scoped>
img{
  height: 50px;
  margin-bottom: 1rem;
}
</style>