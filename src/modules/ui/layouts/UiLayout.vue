<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'UiLayout',
  })
</script>

<script lang="ts" setup>
  import UserLayout from '../../user/layouts/UserLayout.vue'
</script>

<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <user-layout />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
