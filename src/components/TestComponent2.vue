<template>
  <div>
      <button class="yes" @click="callYes">YES</button>
      <button class="no" @click="callNo">NO</button>
  </div>
</template>

<script>
export default {
    name: 'TestComponent2',

    props: {
        callMe: {
            type: Function
        }
    },

    methods: {
        callYes() {
            this.callMe('yes')
        },
        callNo() {
            this.callMe('no')
        }
    }
}
</script>

<style>

</style>