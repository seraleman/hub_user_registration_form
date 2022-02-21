<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'UserForm',
  })
</script>

<script lang="ts" setup>
  import { ref } from 'vue'

  interface UserForm {
    dateOfBirth: string
    documentType: string
    document: string
    email: string
    entity: string
    fullName: string
    password: string
    phoneNumber: string
    position: string
    role: string
  }

  const userForm = ref<UserForm>({
    dateOfBirth: '',
    documentType: '',
    document: '',
    email: '',
    entity: '',
    fullName: '',
    password: '',
    phoneNumber: '',
    position: '',
    role: '',
  })

<<<<<<< HEAD
  const isFieldNotNull = (val: string, message: string | undefined) => {
    if (message !== undefined) return (val !== null && val !== '') || message
    else return val !== null && val !== ''
  }

  const color = 'secondary'

  const options = [
    {
      label: 'Cédula de ciudadanía',
      value: 'cédula de ciudadanía',
    },
    {
      label: 'Tarjeta de identidad',
      value: 'tarjeta de identidad',
    },
    {
      label: 'Cédula de extranjería',
      value: 'cédula de extranjería',
    },
  ]
=======
  const color = 'secondary'
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
</script>

<template>
  <div class="principal row justify-center q-mt-xl">
    <div class="primary col-6 bg-primary row">
      <q-card class="my-card" square flat tag="form">
        <q-card-section horizaontal class="q-pt-sm">
          <q-form class="q-gutter-md">
            <div class="row">
              <!-- @reset="onReset()" @submit="onSubmit(reasonForm, useReason.reasons)" -->
              <q-input
<<<<<<< HEAD
                filled
                dense
                lazy-rules
                class="inputName q-mx-sm"
                label="Nombre completo"
                type="text"
                v-model="userForm.fullName"
                :color="color"
                :rules="[(val) => isFieldNotNull(val, undefined)]"
              />

              <q-select
                dense
                filled
                lazy-rules
                class="inputDocumentType q-mx-sm"
                color="secondary"
                label="Tipo de documento"
                v-model="userForm.documentType"
                :options="options"
                :rules="[(val) => isFieldNotNull(val, undefined)]"
=======
                dense
                lazy-rules
                :color="color"
                label="Nombre completo"
                type="text"
                v-model="userForm.fullName"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
              />

              <q-input
                dense
<<<<<<< HEAD
                filled
                lazy-rules
                class="inputDocument q-mx-sm"
                label="Número de documento"
                type="text"
                v-model="userForm.document"
                :color="color"
                :rules="[(val) => isFieldNotNull(val, undefined)]"
=======
                lazy-rules
                :color="color"
                label="Tipo de documento"
                type="text"
                v-model="userForm.documentType"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
              />

              <q-input
                dense
                lazy-rules
                :color="color"
                label="Número de documento"
                type="text"
                v-model="userForm.document"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
              />

              <q-input
                dense
<<<<<<< HEAD
                filled
                lazy-rules7
                class="inputEmail q-mx-sm"
=======
                lazy-rules
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
                color="secondary"
                label="Correo electrónico"
                type="text"
                v-model="userForm.email"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
              />

              <q-input
                dense
<<<<<<< HEAD
                filled
                lazy-rules
                class="inputPhone q-mx-sm"
=======
                lazy-rules
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
                color="secondary"
                label="Número celular"
                type="text"
                v-model="userForm.phoneNumber"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
              />

              <q-input
                dense
                lazy-rules
                color="secondary"
                label="Entidad"
                type="text"
                v-model="userForm.entity"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
              />

              <q-input
                dense
                lazy-rules
                color="secondary"
                label="Pocisión en la entidade"
                type="text"
                v-model="userForm.position"
                :rules="[(val) => isFieldNotNull(val, 'Debes ingresar')]"
              />
            </div>

            <q-card-actions class="">
<<<<<<< HEAD
=======
              <q-btn flat class="q-ma-sm" color="secondary" label="Cancelar" />
              <!-- @click="onCancel(undefined)" -->

              <q-btn
                flat
                class="q-ma-sm"
                color="secondary"
                label="Borrar campos"
                type="reset"
              />
              <!-- v-if="!reasonForm.id" -->

              <q-space />

>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
              <q-btn
                class="q-ma-sm"
                color="secondary"
                type="submit"
                label="Registrarse"
              />
<<<<<<< HEAD
=======
              <!-- :label="!reasonForm.id ? 'Crear' : 'Editar'" -->
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
            </q-card-actions>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <div class="secondary col-6 bg-secondary"></div>
  </div>
</template>

<style lang="scss" scoped>
  .my-background {
    background: aqua;
    width: 100%;
    height: 100%;
  }
<<<<<<< HEAD

  .inputName {
    min-width: 20em;
  }

  .inputDocumentType {
    min-width: 13em;
  }

  .inputDocument {
    min-width: 13em;
  }

  .inputEmail {
    min-width: 20em;
  }

  .inputPhone {
    min-width: 13em;
  }
=======
>>>>>>> aeb27884d80ecd8c28daebedf5b368f1e86330fc
</style>
