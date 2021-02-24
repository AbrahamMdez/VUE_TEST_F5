<template>
  <main>
    <article class="msg">
      {{ msg }}
    </article>
    Nombre de usuario: <input v-model="username">
    <article
      v-if="error"
      class="error"
    >
      Por favor ingrese un nombre de usuario con al menos seis letras.
    </article>
  </main>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Test practica Vue',
      username: ''
    }
  },

  computed: {
    error(){
      return this.username.trim().length < 6
      ? 'Por favor ingrese un nombre de usuario más largo'
      : ''
    }
  }
}
</script>

<style>

</style>
