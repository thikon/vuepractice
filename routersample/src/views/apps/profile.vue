<template>
    <h1>Profile</h1>
    <button @click="back">Go Back</button>
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
        back(){
            this.$router.back()
        }
    }
}
</script>
