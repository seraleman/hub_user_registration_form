<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'UserForm',
  })
</script>

<script lang="ts" setup>
  import { ref, computed } from 'vue'
  import { useQuasar } from 'quasar'
  import { UserForm } from '../interfaces'

  const $q = useQuasar()

  const userForm = ref<UserForm>({
    dateOfBirth: '',
    documentType: '',
    document: '',
    documentConfirmation: '',
    email: '',
    emailConfirmation: '',
    entity: '',
    fullName: '',
    phoneNumber: '',
    position: '',
  })

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

  const onSubmit = (userForm: UserForm) => {
    const user = {}
  }

  // form validations

  const clearSpecialCharacters = (input: string) => {
    return input.replace(/[\.,+,\-,\s]/g, '')
  }

  const isCellNumber = (val: string, message: string) => {
    const phoneNumberPattern = /^[0-9]{10}$/

    return phoneNumberPattern.test(val) || message
  }

  const isFieldNotNull = (val: string, message: string | undefined) => {
    if (message !== undefined) return (val !== null && val !== '') || message
    else return val !== null && val !== ''
  }

  const isSameInput = (val: string, message: string, field: string) => {
    switch (field) {
      case 'document':
        return (
          clearSpecialCharacters(val) ===
            clearSpecialCharacters(userForm.value.document) || message
        )

      case 'email':
        return val === userForm.value.email || message

      default:
        return true
    }
  }

  const isValidEmail = (val: string) => {
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/
    return emailPattern.test(val) || 'El correo no parece ser válido'
  }

  //styles media queries

  const color = 'secondary'

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
              placeholder="Nombre completo *"
              type="text"
              v-model="userForm.fullName"
              :color="color"
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes ingresar tu nombre completo'),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-user" class="q-ma-none" />
              </template>
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
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes ingresar tú tipo de documento'),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-id-card-alt" />
              </template>
            </q-select>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputDocument"
              placeholder="Número de documento *"
              type="number"
              v-model="userForm.document"
              :color="color"
              :rules="[
                (val) =>
                  isFieldNotNull(
                    val,
                    'Ingrese número de documento sin puntos ni espacios '
                  ),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-id-card" />
              </template>
            </q-input>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputDocument"
              onpaste="return false"
              placeholder="Confirme documento *"
              type="text"
              v-model="userForm.documentConfirmation"
              :color="color"
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes confirmar tu número de documento'),
                (val) =>
                  isSameInput(
                    val,
                    'Los números de documento no coinciden',
                    'document'
                  ),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-id-card" />
              </template>
            </q-input>

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
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes ingresar tu correo electrónico'),
                (val) => isValidEmail(val),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-envelope" />
              </template>
            </q-input>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputEmail"
              color="secondary"
              onpaste="return false"
              placeholder="Confirme correo *"
              type="text"
              v-model="userForm.emailConfirmation"
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes confirmar tu correo electrónico'),
                (val) => isValidEmail(val),
                (val) => isSameInput(val, 'Los correos no coinciden', 'email'),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-envelope" />
              </template>
            </q-input>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputPhone"
              color="secondary"
              placeholder="Número celular *"
              type="number"
              v-model="userForm.phoneNumber"
              :rules="[
                (val) =>
                  isFieldNotNull(val, 'Debes ingresar tu número celular'),
                (val) =>
                  isCellNumber(val, 'El celular debe de ser de 10 dígitos'),
              ]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-mobile" />
              </template>
            </q-input>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputEntity"
              color="secondary"
              placeholder="Entidad/Empresa *"
              type="text"
              v-model="userForm.entity"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-building" />
              </template>
            </q-input>

            <q-input
              dense
              lazy-rules
              outlined
              rounded
              class="inputPosition"
              color="secondary"
              placeholder="Cargo/Ocupación *"
              type="text"
              v-model="userForm.position"
              :rules="[(val) => isFieldNotNull(val, undefined)]"
            >
              <template v-slot:prepend>
                <q-icon name="las la-user-tie" />
              </template>
            </q-input>

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
