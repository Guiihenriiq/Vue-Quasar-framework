<template>
  <q-page class="flex flex-center">
    <q-form class="row justify-center">
      <div>
        <p class="text-h6 text-center">Faça login no App</p>
      </div>
      <div class="col-md-4 col-sm-6 col-xs-4">
        <q-input
          v-model="password"
          filled
          :type="isPwd ? 'password' : 'text'"
          hint="Password with toggle"
        >
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>
      </div>
    </q-form>
  </q-page>
</template>

<script setup>
defineOptions({
  name: "PageLogin",
});
</script>
