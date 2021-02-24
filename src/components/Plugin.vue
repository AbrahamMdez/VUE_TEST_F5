<template>
 <div>
     <h1>
      hola
    </h1>
  </div>
</template>

<script>
import { shallowMount } from '@vue/test-utils'


export default {

}

const $route = {
    path: '/',
    hash: '',
    params: {id:'123'},
    query: {msg: 'hello'}
  
  }
  shallowMount(Plugin,{
    mocks: {
      $route
    }
  })


</script>

<style>

</style>
