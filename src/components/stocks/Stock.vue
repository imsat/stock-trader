<template>
    <div class="col-sm-6 col-md-4">
      <div class="card " >
        <div class="card-header bg-success">
          <div class="">
          <h4 class="card-title">{{stock.name}} <small>(Price: {{stock.price}})</small></h4>
          </div>

        </div>
        <div class="card-body">
          <!--<p class="card-text"></p>-->
          <div class="form-group row">
            <input
              v-model="quantity"
              type="number"
              class="col-sm-6 form-control float-left"
              placeholder="Quantity"
              :class="{'is-invalid': insufficientFunds}"
            >
            <div class="col-sm-6">
              <button
                @click.prevent="buyStock"
                :disabled="isInt || insufficientFunds"
                class="btn btn-primary btn-sm float-right"
              >{{insufficientFunds ? 'Insufficient Funds' : 'Buy'}}</button>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Stock",
        props: ['stock'],
      data(){
          return {
            quantity: 0
          }
      },
      computed: {
          isInt(){
            return this.quantity <= 0 || Number.isInteger(this.quantity)
          },
          funds(){
              return this.$store.getters.funds
          },
          insufficientFunds(){
            return this.quantity * this.stock.price > this.funds

          }
      },
      methods: {
        buyStock(){
          const order = {
            stockId: this.stock.id,
            stockPrice: this.stock.price,
            quantity: this.quantity
          }
          // console.log(order)
          this.$store.dispatch('buyStock', order)
          this.quantity = 0
        }
      }
    }
</script>

<style scoped>

</style>
