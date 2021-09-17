<template>
    <div>
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
export default {
    data() {
        return {
            myTitle: "Hello worlds",
            currencies: [],
            n: 15,
            output: [],
        }
    },
    created() {
        this.process()
    },
    methods: {
        handleChange(e){
            this.myTitle = e.target.value 
        },
        process(){
            for (let index = 1; index <= this.n; index++) {
                let divisibleBy3 = index % 3
                let divisibleBy5 = index % 5

                if(divisibleBy3  === 0 && divisibleBy5 === 0) {
                    this.output.push("FizzBuzz")
                } else if (divisibleBy3 === 0) {
                    this.output.push("Fizz")
                } else if (divisibleBy5 === 0) {
                    this.output.push("Buzz")
                } else {
                    this.output.push(index.toString())
                }
            }
        }
    },
}
</script>
