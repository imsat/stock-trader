<template>
 <div>
  <div class="row">
    <stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></stock>
  </div>
 </div>
</template>

<script>
  import Stock from './Stock'
  import stocks from '../../data/stocks'
  import { mapGetters } from 'vuex'

    export default {
        name: "Stocks",
      components: {
        Stock
      },
      computed: {
          ...mapGetters(['stocks'])
      },
      created(){
          // console.log(stocks)
        this.$store.dispatch('initStocks', stocks)
      }
    }
</script>

<style scoped>

</style>
