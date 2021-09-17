<template>
    <h1>Test Login</h1>
    <button @click="login">Go to Profile</button>

    
</template>

<script>
export default {
    setup() {
        
    },
    data() {
        return {
            number: 0
        }
    },
    methods: {
        login(){
            this.$router.push('/profile') 
        }
    }
}
</script>
