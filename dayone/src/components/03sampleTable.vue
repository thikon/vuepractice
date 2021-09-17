<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th v-for="(item, index) in column" :key="index">{{ item }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in dataModel" :key="index">
                    <td class="text-3xl">{{ item.pair }}</td>
                    <td>{{ item.rate }}</td>
                    <td>{{ item.symbol }}</td>
                    <td><img :src="item.imageUrl" /></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    props: ['dataModel'],
    data() {
        return {
            column: ['pair','rate','symbol','imageUrl'],
        }
    },
    mounted() {

    },
    methods: {

    },

}
</script>