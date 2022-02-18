<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'MainLayout',
  })
</script>

<script lang="ts" setup></script>

<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
