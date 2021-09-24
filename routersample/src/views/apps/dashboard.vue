<template>
    <h1>TODO Lists</h1>
    <button @click="addPost">Create Todo</button>

    <div style="padding-top:15px;">
        <table>
            <tr>
                <th>ID</th>
                <th>Todos</th>
                <th>Option</th>
            </tr>
            <tbody>
                <tr v-for="item in this.todos" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.todo }}</td>
                    <td>
                        <div @click="edit(item.id)">Edit</div>
                        <div @click="remove(item.id)">Remove</div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>

<script>
const axios = require('axios')

export default {
    setup() {
        
    },
    data() {
        return {
            number: 0,
            todos : [],
        }
    },
    async created() {
        await this.getData()
    },
    methods: {
        addPost(){
            this.$router.push(`/posts/0`) 
        },
        async remove(val) {
            if(val > 0) {
                const response = await axios.delete(`http://localhost:3000/Todos/${val}`)
                if(response.status == 200) {
                    this.todos = []
                    this.getData()
                } else {
                    alert('failed')
                }
            }
            
        },
        async getData(){
            const response = await axios.get('http://localhost:3000/Todos')
            response.data.forEach(item => {
                const todo = {
                    id: item.id,
                    todo: item.todo,
                }
                this.todos.push(todo)
            });
        },
        edit(val){
            this.$router.push(`/posts/${val}`)
        }
    }
}
</script>
