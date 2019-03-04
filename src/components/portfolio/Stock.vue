<template>
  <div class="col-sm-6 col-md-4">
    <div class="card " >
      <div class="card-header bg-info">
        <div class="">
          <h4 class="card-title">{{stock.name}} <small>(Price: {{stock.price}} | Quantity: {{stock.quantity}} )</small></h4>
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
            :class="{'is-invalid': insufficientQuantity}"
          >
          <div class="col-sm-6">
            <button
              @click="sellStock"
              :disabled="isInt || insufficientQuantity"
              class="btn btn-primary btn-sm float-right"
            >{{insufficientQuantity ? 'Not Enough Stocks' : 'Sell'}}</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapActions } from 'vuex'
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
      insufficientQuantity(){
        return this.quantity > this.stock.quantity

      }
    },
    methods: {
      ...mapActions({
        placeSellOrder: 'sellStock'
      }),
      sellStock(){
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock .price,
          quantity: this.quantity
        }
        this.placeSellOrder(order)
        this.quantity = 0
      }
    }
  }
</script>

<style scoped>

</style>

