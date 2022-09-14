<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="column">
    <Header />
    <div class="column items-center q-pa-xl">
      <div class="column items-center q-pa-lg">
        <h3 class="text-weight-bold q-mb-md">Alguma dúvida?</h3>
        <p class="q-mb-xl text-h5">
          Quer saber melhor como funciona e quais são os preços?
        </p>
        <q-btn
          rounded
          label="Nos mande um e-mail!"
          class="bg-pink-6 text-grey-1 text-bold"
        />
      </div>
    </div>
    <div class="column items-center q-pa-lg bg-grey-3">
      <span class="text-h6">feedbacker © 2020 </span>
      <span> Emilly Almeida</span>
    </div>
  </div>
</template>

<script>
import Header from "./headerHome.vue";
export default {
  name: "PageHome",
  components: {
    Header,
  },
};
</script>
