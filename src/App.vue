<template>
  <div id="app">
    <app-header></app-header>
    <div class="row">
      <div class="col-12">
       <transition name="slide" mode="out-in">
         <router-view></router-view>
       </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import AppHeader from './components/Header'
export default {
  name: 'App',
  components: {
    AppHeader
  },

}
</script>

<style>
  body {
    /*padding: 30px*/
  }
  .slide-enter-active {
    animation: slide-in 200ms ease-out forwards;
  }
  .slide-leave-active {
    animation: slide-out 200ms ease-out forwards;
  }
  
  @keyframes slide-in {
    from{
      transform: translateY(-30px);
      oposity: 0
    }
    to{
      transform: translateY(0);
      oposity: 1
    }
  }

  @keyframes slide-out {
    from{
      transform: translateY(0);
      opacity: 1;
    }
    to{
      transform: translateY(-30px);
      oposity: 0
    }
  }
</style>
