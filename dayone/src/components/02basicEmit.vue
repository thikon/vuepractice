<template>
    <input 
        type="text" 
        @change="replaceTitle" 
    />
</template>

<script>
export default {
    props: ['title'],
    methods: {
        replaceTitle(e){
            this.$emit('changeTitle', e)
        },
    },
}
</script>