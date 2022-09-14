<template>
  <div class="column bg-pink-6">
    <div class="row col-12 items-center justify-between q-pa-md mobile">
      <q-img
        src="../../assets/logo_white.svg"
        style="height: 42px; width: 148px"
      />
      <div class="row justify-around">
        <q-btn
          unelevated
          rounded
          label="Crie um Conta"
          class="text-grey-1 q-mr-xs"
        />
        <q-btn rounded label="Entrar" class="text-pink-6 bg-grey-1 text-bold" />
      </div>
      <div class="row justify-around col-12 q-pa-md items-center">
        <div class="column text-grey-1 col-12 col-sm-7 q-pa-lg">
          <h2 class="text-h4 text-weight-bold q-mb-sm">
            Tenha um feedback. E faça seus clientes mais felizes!
          </h2>
          <p class="text-h6 q-mb-lg">
            Receba ideias, reclamações e feedbacks com um simples widget na
            página.
          </p>
          <q-btn
            rounded
            size="md"
            label="Crie uma conta gratis"
            class="text-pink-6 bg-grey-1 text-bold"
            style="width: 250px"
          />
        </div>
        <q-img
          src="../../assets/baloons.svg"
          fit="scale-down"
          class="col-0 col-sm-5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss">
.mobile {
  @media (max-width: $breakpoint-xs-max) {
    flex-direction: column;
  }
}
</style>
