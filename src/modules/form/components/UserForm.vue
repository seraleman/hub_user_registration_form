<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'UserForm',
  })
</script>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useQuasar } from 'quasar'

  const $q = useQuasar()

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

  const ejemplo = {
    xs: 599,
    sm: 1023,
    md: 1439,
    lg: 1919,
    xl: '...',
  }

  $q.screen.setSizes({
    sm: 426,
    md: 769,
    lg: 1441,
    xl: 1920,
  })

  const myHeader = computed(() => {
    if ($q.screen.xs) return `bg-dark`
    // if ($q.screen.sm) return `bg-red`
    // if ($q.screen.md) return `bg-grey`
    // if ($q.screen.lg) return `bg-pink`
    // if ($q.screen.xl) return `bg-green`
    return `bg-blue`
  })

  const myCardForm = computed(() => {
    // if ($q.screen.xs) return `bg-dark`
    // if ($q.screen.sm) return `bg-red`
    // if ($q.screen.md) return `bg-grey`
    // if ($q.screen.lg) return `bg-pink`
    // if ($q.screen.xl) return `bg-green`
    return
  })
</script>

<template>
  <div class="principal">
    <div class="my-header" :class="myHeader"></div>
    <q-card class="my-card-form" :class="myCardForm">
      <q-card-section class="q-px-md">
        <q-form>
          <div class="row justify-center">
            <!-- @reset="onReset()" @submit="onSubmit(reasonForm, useReason.reasons)" -->
            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputName"
              type="text"
              v-model="userForm.fullName"
              :color="color"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            >
              <!-- placeholder="Nombre completo *" -->
              <q-icon left name="event" />
            </q-input>

            <q-select
              dense
              lazy-rules
              outlined
              rounded
              class="inputDocumentType"
              label="Tipo de documento *"
              v-model="userForm.documentType"
              :color="color"
              :options="options"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputDocument"
              placeholder="Número de documento *"
              type="text"
              v-model="userForm.document"
              :color="color"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputName"
              placeholder="Por favor, confirme su número de documento *"
              type="text"
              v-model="userForm.document"
              :color="color"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputEmail"
              color="secondary"
              placeholder="Correo electrónico *"
              type="text"
              v-model="userForm.email"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputEmail"
              color="secondary"
              placeholder="Por favor, confirme su correo electrónico*"
              type="text"
              v-model="userForm.email"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputPhone"
              color="secondary"
              placeholder="Número celular *"
              type="text"
              v-model="userForm.phoneNumber"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputEntity"
              color="secondary"
              placeholder="Entidad *"
              type="text"
              v-model="userForm.entity"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputPosition"
              color="secondary"
              placeholder="Cargo en la entidade *"
              type="text"
              v-model="userForm.position"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            />

            <q-btn
              unelevated
              rounded
              class="btn-submit"
              color="secondary"
              label="Enviar Registro"
              type="submit"
            />
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<style lang="scss" scoped>
  .my-header {
    min-height: 300px;
  }

  body.screen--xs {
    .inputDocumentType,
    .inputDocument,
    .inputPhone,
    .inputEntity,
    .inputPosition,
    .inputName,
    .inputEmail {
      min-width: 100%;
      font-size: 1rem;
    }

    .btn-submit {
      min-width: 100%;
    }
  }

  body.screen--sm {
    .inputDocumentType,
    .inputDocument,
    .inputPhone,
    .inputEntity,
    .inputPosition {
      min-width: 13rem;
      font-size: 1.1rem;
      background-color: red;
    }

    .inputName,
    .inputEmail {
      min-width: 20rem;
      font-size: 1.1rem;
      background-color: red;
    }
  }

  body.screen--md {
    .inputDocumentType,
    .inputDocument,
    .inputPhone,
    .inputEntity,
    .inputPosition {
      min-width: 13rem;
      font-size: 1.1rem;
      background-color: aqua;
    }

    .inputName,
    .inputEmail {
      min-width: 20rem;
      font-size: 1.1rem;
      background-color: aqua;
    }
  }

  body.screen--lg {
    .inputDocumentType,
    .inputDocument,
    .inputPhone,
    .inputEntity,
    .inputPosition {
      min-width: 13rem;
      font-size: 1.1rem;
      background-color: rgb(255, 0, 212);
    }

    .inputName,
    .inputEmail {
      min-width: 20rem;
      font-size: 1.1rem;
      background-color: rgb(255, 0, 212);
    }
  }

  body.screen--xl {
    .inputDocumentType,
    .inputDocument,
    .inputPhone,
    .inputEntity,
    .inputPosition {
      min-width: 13rem;
      font-size: 1.1rem;
      background-color: rgb(229, 255, 0);
    }

    .inputName,
    .inputEmail {
      min-width: 20rem;
      font-size: 1.1rem;
      background-color: rgb(229, 255, 0);
    }
  }
</style>
