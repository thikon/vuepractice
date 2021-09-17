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

        Array index: {{ n }}
        {{ output }}
    </div>
</template>

<!-- 

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.


Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

-->

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
            n: 15,
            output: [],
        }
    },
    created() {
        //process()
    },
    methods: {
        handleChange(e){
            this.myTitle = e.target.value 
        },
        process(){
            for (let index = 1; index <= this.n; index++) {
                let divisibleBy3 = this.n % 3
                let divisibleBy5 = this.n % 5

                if(divisibleBy3 && divisibleBy5) {
                    this.output.push("FizzBuzz")
                } else if (divisibleBy3) {
                    this.output.push("Fizz")
                } else if (divisibleBy5) {
                    this.output.push("Buzz")
                } else {
                    this.output.push(index.toString())
                }
            }
        }
    },
}
</script>
