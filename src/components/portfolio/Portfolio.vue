<template>
<div class="row">
  <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
</div>
</template>


<script>
  import { mapGetters } from 'vuex'
  import AppStock from './Stock'

  export default {
    name: 'Portfolio',
    components: {
      AppStock
    },
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      })
    }
  }

</script>




