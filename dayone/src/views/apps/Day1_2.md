# life cycle

## beforeCreate, 

```
<template>
    <div>
        hello
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'John Wick'
        }
    },
    beforeCreate() {
        console.log(`beforeCreate: ${this.name}`)
    },
    created(){
        console.log(`created: ${this.name}`)
    },
    beforeMount() {
        console.log(`beforeMount: ${this.name}`)
    },
}
</script>
```

## created

```
<template>
    <div>
        <h1>{{ firstname }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            firstname: 'John',
            lastname: 'Wick'
        }
    },
    methods: {
        getAge(){
            return 18;
        },
    },
    created(){
        alert(`first name: ${this.firstname} ${this.lastname} Age ${this.getAge()} from created.`)
    },
}
</script>
```
## beforeMount

```
 beforeMount(){
    console.log('DOM does not create but will')
 },
```

## mounted
```
<template>
     <div ref="example-element">Example component.</div>
</template>

<script>
export default {
    beforeMount(){
        console.log(`At this point, vm.$el has not been created yet.`)
    },
    mounted() {
        console.log(`At this point, vm.$el has been created and el has been replaced.`);
        console.log(this.$el.textContent) // Example component.
    }
}
</script>
```

## beforeUpdate
```
<template>
     <div>
         <h1 ref="name">{{ name }} </h1>
         <button @click="showName">show name</button>
     </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
        }
    },
    methods: {
        showName() {
            this.name = 'john'
        }
    },
    beforeUpdate() {
        this.name = this.name.toUpperCase()
    },
}
</script>

```

## updated

```
<template>
     <div>
         <h1>{{ number }} </h1> <br/>
         <button @click="counter">increase</button>
     </div>
</template>

<script>
export default {
    data() {
        return {
            number: 0,
        }
    },
    methods: {
        counter() {
            this.number++
        }
    },
    updated(){
        console.log('number updated')
    }
}
</script>

```

## beforeDestroy

```

```