<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Estoque App </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="q-pa-md" style="width: 400px">
          <q-card-section>
            <div class="text-h6">Login</div>
          </q-card-section>

          <q-card-section>
            <q-input filled v-model="username" label="Usuário" autofocus />
            <q-input filled v-model="password" label="Senha" type="password" />
          </q-card-section>

          <q-card-actions>
            <div
              class="q-gutter-sm"
              style="width: 100%; display: flex; justify-content: space-between"
            >
              <q-btn label="Entrar" color="primary" @click="login" />
              <q-btn
                label="Re
              gistrar"
                color="accent"
                @click="register"
              />
            </div>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";

defineOptions({
  name: "LoginLayout",
});

const username = ref("");
const password = ref("");
const Router = useRouter();
const { login } = useAuthUser;

function login() {
  console.log("Usuário:", username.value);
  console.log("Senha:", password.value);
}

function register() {
  console.log("Iniciar processo de registro");
}
</script>

<style scoped>
.q-page {
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
