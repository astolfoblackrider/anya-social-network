<template>
    <div class="chat">
    <MessageItem v-for = "message in messages"
    :message="message"/>
  
</div>

</template>

<script>
import MessageItem from './MessageItem.vue';

export default{
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    components: { MessageItem }
}

</script>

<style scoped>
.chat
{
    width: 400px;
height: 300px;
border:2px solid blue;
margin:15px;
border-radius: 5px;
overflow-y: auto;
}

</style>