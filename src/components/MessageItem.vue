<template>
    
    <div class= "message" >
    <div>{{ message.text }}</div>
    </div>
    

</template>

<script>
export default {
    props: {
        message:{
            type: Object,
            required: true
        }
    }
}

</script>

<style scoped>
.message{
margin: 15px;
}
</style>