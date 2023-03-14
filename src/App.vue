
<template>
<div class="app">
  
  <message-list v-bind:messages="messagesList"/>
  <message-form  @create="sendMessage"/>

</div> 
</template>

<script>

import MessageForm from "./components/messageForm.vue";
import MessageList from "./components/messageList.vue";

export default {
  name: 'app',
  components:{
    MessageForm, MessageList
  },

  data(){
    return{
      messagesList : [
       {text: "text"}
       
      ],
    }
  },
  methods:{
    sendMessage(message){
      if (message.text != "")
      {
      this.messagesList.push(message);
      }
      // else
      // alert('pidor')
    }
  }
}
</script>

<style>

* {
margin: 0;
padding: 0;
box-sizing: border-box;
}

</style>
