# Component

## create component-props
> basicProps.vue
```
<template>
    <h1>
        {{ title }}
    </h1>
</template>

<script>
export default {
    props: ['title'],
}
</script>
```

## create component-emit
> basicEmit.vue
```
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
```

## import component and used
```
<template>
    <div>
        <basicProps 
            :title="myTitle"
        />

        <basicEmit 
            @changeTitle="handleChange"
        />

        <sample-table
            :dataModel="currencies"
        />
    </div>
</template>

<script>
import basicProps from '@/components/01basicProps.vue'
import basicEmit from '@/components/02basicEmit.vue'

export default {
    components: {
        basicProps,
        basicEmit,
    },
    data() {
        return {
            myTitle: "Hello worlds",
            currencies: [],
        }
    },
    methods: {
        handleChange(e){
            this.myTitle = e.target.value 
        },
    },
}
</script>

```