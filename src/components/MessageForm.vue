<template>

    <form class="inputMessage" @submit.prevent>

      <textarea class="input"
      v-model="message.text"
      placeholder="message text"/>

  </form>

  <div class= "sendButton">

    <button @click="sendMessage">send message</button>

  </div>

  

</template>

<script>

export default {
  data(){
      return {
        message:{
          text:""
        }
      }
  },
  emits: ['create'],
  methods:{
    sendMessage(){     

      this.$emit('create',this.message);
      this.message={
        text:''
      }

      
    } 
  }
}


</script>

<style scoped>
.inputMessage{ 
  height: 150px;
  width: 400px;
  margin:15px;
  
  border-radius: 5px;
}
.input{
  height: 100px;
  width: 400px;
  position: relative;
  border: 2px solid blue;
  border-radius: 5px;
  overflow-y: auto;
}
.sendButton{
  margin: 15px;
}

</style>