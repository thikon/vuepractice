<template>
    <h1>{{ title }}</h1>

    <h1>{{ mytitle }}</h1>
</template>
<script>
export default{
    props: ['mytitle'],
    data() {
        return {
            title: 'Text in component',
        }
    },
}
</script>
