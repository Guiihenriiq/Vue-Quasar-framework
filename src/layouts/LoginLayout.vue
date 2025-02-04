<template>
  <div>
    <q-toolbar class="bg-black text-white">
      <q-btn flat round dense icon="assignment_ind">
        <q-badge floating color="red">2</q-badge>
      </q-btn>
      <q-toolbar-title> Estoque Quasar </q-toolbar-title>
      <q-btn flat round dense icon="sim_card" class="q-mr-xs" />
      <q-btn flat round dense icon="gamepad" />
    </q-toolbar>
  </div>
</template>

<script setup>
import EssentialLink from "components/EssentialLink.vue";

defineOptions({
  name: "MainLayout",
});
</script>
