<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'FormLayout',
  })
</script>

<script lang="ts" setup>
  import FormPage from '../pages/userPage.vue'
</script>

<template>
  <q-layout>
    <q-page-container>
      <form-page />
    </q-page-container>
  </q-layout>
</template>

<style lang="scss" scoped></style>
