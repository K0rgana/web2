<template>
  <div>
    <h1>Insert a doctor</h1>
    <img :src="form.pic" alt="">
    Link to photo:
    <input id="pic" v-model="form.pic" type="text" name="pic" placeholder="type a link to a photo" />

    Name: {{form.name}}
    <input id="name" v-model="form.name" type="text" name="name" placeholder="type a name" />

    Phrase: {{form.phrase}}
    <input id="phrase" v-model="form.phrase" type="text" name="phrase" placeholder="type a catchphrase"/>

    <button @click.prevent="insertDoc()" class="button">save</button>

    <br>
      {{form}}
    <br>
      {{doctors}}

  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data(){
    return {
      form: /* JSON.parse(localStorage.getItem('doctors')) ??  */
      [
        {
         pic:"https://i0.wp.com/downthetubes.net/wp-content/uploads/2019/07/DW13-Jeremy-Enecio.jpg?resize=768%2C767&ssl=1",
        name: "Jodie Whittaker",
        phrase: "Oh, brilliant!",
        }
      ]
    }
  },
  computed: {
    ...mapState(['doctors'])
    },
    methods:{
      insertDoc(){
        if(this.form.name.length == 0){
          return
        }  
        const newDoc = {
          pic:this.form.pic,
          name: this.form.name,
          phrase: this.form.phrase,
        }
        //this.from.push(this.from.name)
        this.form.push(newDoc); 
        this.$store.dispatch('insertDoctors')
        this.form.pic = ''
        this.form.name = ''
        this.form.phrase = ''
        //localStorage.insertDoc('form', JSON.stringify(this.doctors))
      }
  }
}
</script>

<style scoped>

div{
  background: #fff;
  margin: auto;
  border-radius: 8px;
  color: #080f16;

  box-shadow: -1px 15px 30px -12px #ffbf02;

  display: flex;
  flex-direction: column;
  align-items: center;
  
}
 img{
  position: relative;
  height: 230px;
  margin-bottom: 20px;
  border-top-left-radius: 8;
  border-top-right-radius: 8;
 }

input {
    margin-bottom: 1rem;
 }
</style>
