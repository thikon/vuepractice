<template>
    <h1>TODOS</h1>
    <div>
        <div>
            <label>Title</label>
            <input type="" v-model="todo"/>
        </div>
        <div style="padding-top:15px;"> 
            <button @click="back">Go Back</button>
            <button @click="addTodo">Save</button>
        </div>
    </div>
</template>

<script>
const axios = require('axios')
export default {
    data() {
        return {
            number: 0,
            todo: "",
            id: 0,
        }
    },
    created() {
        const param = this.$route.params.id
        if(param > 0) {
            this.getTodoById(param)
        }
    },
    methods: {
        back(){
            this.$router.back()
        },
        async addTodo() {
            const param = this.$route.params.id
            if(param > 0) {
                const response = await axios.patch(`http://localhost:3000/Todos/${param}`, {
                    todo: this.todo,
                })
                console.log(response)
                if(response.status == 200) {
                    console.log(response.statusText)
                    this.$router.back()
                } else {
                    alert('failed')
                }
            } else {
                const response = await axios.post('http://localhost:3000/Todos', {
                    todo: this.todo,
                })
                if(response.status == 201) {
                    console.log(response.statusText)
                    this.$router.back()
                } else {
                    alert('failed')
                }
            }
            
        },
        async getTodoById(id) {
            const response = await axios.get(`http://localhost:3000/Todos/${id}`)
            console.log(response)
            if(response.status == 200) {
                this.todo = response.data.todo
            }
        }
    }
}
</script>
