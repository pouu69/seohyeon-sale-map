<template>
  <div class="info-container">
    <section class="hero" v-for="item in info" >
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{item.name}}
          </h1>
          <h2 class="subtitle">
            {{item.sale}}
          </h2>
        </div>
      </div>
    </section>

    <!--<div class="card" v-for="item in info" >-->
      <!--<header class="card-header">-->
        <!--<p class="card-header-title">-->
          <!--{{item.name}}-->
        <!--</p>-->
      <!--</header>-->
      <!--<div class="card-content">-->
        <!--{{item.sale}}-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    name: "Popup",
    props: ['info']
  }
</script>

<style scoped>

</style>
