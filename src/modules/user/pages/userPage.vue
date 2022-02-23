<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'FormPage',
  })
</script>

<script lang="ts" setup>
  import UserForm from '../components/UserForm.vue'
</script>

<template>
  <q-page>
    <user-form />
  </q-page>
</template>

<style lang="scss" scoped></style>
