<template>
   <h1>input index: {{ n }} </h1><br/>
    <div style="padding-top: 5px;">
        <div style="width: 50%; padding-top:10px;">
            <table>
                <tr>
                    <th>No.</th>
                    <th>Result</th>
                </tr>
                <tr v-for="item in output" :key="item.id">
                    <td>{{ item.id }}</td>
                    <td>{{ item.value }}</td>
                </tr>
            </table>
        </div>
      </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      n : 15,
      output: [],
    }
  },
  created() {
    this.process()
  },
  methods: {
     process(){
      for (let index = 1; index <= this.n; index++) {
          let divisibleBy3 = index % 3
          let divisibleBy5 = index % 5

          if(divisibleBy3  === 0 && divisibleBy5 === 0) {
              this.output.push({
                id: index,
                value: "FizzBuzz"
              })
          } else if (divisibleBy3 === 0) {
              this.output.push({
                id: index,
                value: "Fizz",
              })
          } else if (divisibleBy5 === 0) {
              this.output.push({
                id: index,
                value: "Buzz",
              })
          } else {
              this.output.push({
                id: index,
                value: index.toString(),
              })
          }
      }
    }
  }
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
