<template>
  <q-dialog>
    <q-card class="modal">
      <q-toolbar class="q-pa-lg">
        <q-toolbar-title class="text-weight-bold text-h5 gt-md:text-h4"
          >Crie uma conta</q-toolbar-title
        >

        <q-btn flat round dense icon="close" v-close-popup />
      </q-toolbar>

      <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md q-pa-lg">
        <q-input
          filled
          v-model="name"
          label="Nome *"
          hint="John Doe"
          lazy-rules
          :rules="nameRules"
        />

        <q-input
          filled
          v-model="email"
          label="Email *"
          hint="johndoe@email.com"
          lazy-rules
          :rules="emailRules"
        />

        <q-input
          filled
          type="password"
          v-model="password"
          label="Senha *"
          hint="8 caracters"
          lazy-rules
          :rules="passwordRules"
        />

        <div class="q-py-lg">
          <q-btn
            label="Criar conta"
            rounded
            type="submit"
            class="bg-pink-6 text-grey-1 text-bold"
          />
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script>
import { useQuasar } from "quasar";
import { ref } from "vue";
export default {
  name: "modalRegister",
  props: { toolbar: Boolean },

  setup() {
    const $q = useQuasar();

    const name = ref(null);
    const nameRef = ref(null);

    const email = ref(null);
    const emailRef = ref(null);

    const password = ref(null);
    const passwordRef = ref(null);

    function validateEmail(val) {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(val);
    }

    return {
      name,
      nameRef,
      nameRules: [(val) => (val && val.length > 0) || "Nome Obrigatório"],

      email,
      emailRef,
      emailRules: [
        (val) => (val && val.length > 0) || "Email Obrigatório",
        (val) => validateEmail(val) || "Digite um email Valido",
      ],

      password,
      passwordRef,
      passwordRules: [
        (val) => (val !== null && val !== "") || "Senha Obrigatória",
        (val) => val.length > 7 || "Minimo 8 caracteres",
      ],

      onSubmit() {
        nameRef.value.validate();
        emailRef.value.validate();
        passwordRef.value.validate();

        if (
          nameRef.value.hasError ||
          emailRef.value.hasError ||
          passwordRef.value.hasError
        ) {
          $q.notify({
            color: "negative",
            message: "Ops! Houve um erro, tente novamente",
          });
        } else {
          $q.notify({
            icon: "done",
            color: "positive",
            message: "Casdastro concluido",
          });
        }
      },
      onReset() {
        name.value = null;
        email.value = null;
        password.value = null;

        nameRef.value.resetValidation();
        emailRef.value.resetValidation();
        password.value.resetValidation();
      },
    };
  },
};
</script>

<style lang="scss">
.modal {
  width: 300px;
  @media (min-width: 600px) {
    width: 80vw;
    max-width: 600px;
  }
}
</style>
