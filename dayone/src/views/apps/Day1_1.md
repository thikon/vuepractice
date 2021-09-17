# DayOne Part 1

## Setup Vue
> download node.js https://nodejs.org/en/download/
```
npm install -g @vue/cli
```

## Create Project
```
vue create PROJECT_NAME

npm run serve
-or-
yarn serve
```

## Template syntax
```
<template>
    <div>
        ...
    </div>
</template>
```

### Text
```
<span>{{ msg }}</span>
```

### Attribute
>เครื่องหมาย {{ }} ไม่สามารถใช้ได้ใน HTML attribute **
```
<div v-bind:id="dynamicId"></div>
```
>bind ค่า true/false ให้กับ isButtonDisabled จากนั้นให้ enable/disable ปุ่ม
```
<button v-bind:disabled="isButtonDisabled">Button</button>
```
### Java script expression
```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

### Directive
```
<p v-if="seen">Now you see me</p>
```

### Arguments
```
<a v-bind:href="url"> ... </a>
<a v-on:click="doSomething"> ... </a>
```

### Shorthands
>ใช้แทนที่ v-bind ด้วย ':' และ v-on ด้วย '@'
```
<!-- full syntax -->
<a v-bind:href="url"> ... </a>

<!-- shorthand -->
<a :href="url"> ... </a>

<!-- full syntax -->
<a v-on:click="doSomething"> ... </a>

<!-- shorthand -->
<a @click="doSomething()"> ... </a>
```

## Data and Method
> HTML
```
    <div class="demo">
        <div>
            Counter: {{ counter }} <br />
            <button class="button" type="button" v-on:click="increase()">Increase</button>
            <button class="button" type="button" v-on:click="reduce()">Reduce</button>
            <br />
        </div>
    </div>
```
> Javascript
```
export default {
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        increase(){
            // ?
        },
        reduce(){
            // ?
        },
    },
}
```


