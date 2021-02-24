<template>
  <div>
      <transition>
          <p v-if="show">Test Component 1</p>
      </transition>
  </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    }
}
</script>
