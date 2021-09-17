<template>
     <div>
        <input type="text" v-model="inputName" @keydown="keydown"/>
     </div>
     <div style="padding-top: 5px;">
        <button @click="addItem">Add Item</button>
        <div style="width: 50%; padding-top:10px;">
            <table>
                <tr>
                    <th>Your name</th>
                </tr>
                <tr v-for="item in lists" :key="item">
                    <td>{{ item }}</td>
                </tr>
            </table>
        </div>
     </div>
</template>

<script>
export default {
    name: "app",
    data() {
        return {
            message: 'hello',
            inputName: '',
            lists: [],
        }
    },
    methods: {
        addItem(){
            if(this.inputName === '') {
                alert('is empty')
            } else {
                this.lists.push(this.inputName)
            }
            this.inputName = ''
        },
        keydown(){
            console.log(this.inputName)
        },
    },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

input[type=text] {
  border: 2px solid black;
  border-radius: 4px;
}

button {
  background-color: grey; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 4px;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>