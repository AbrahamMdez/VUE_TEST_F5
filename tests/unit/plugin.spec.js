import { createLocalVue, shallowMount } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Plugin from '@/components/Plugin.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter()

const $route = {
    path: '/some/path'
  }

  shallowMount(Plugin, {
      localVue,
      router,
      mocks: {
        $route
      }
    }
  )
// mount(Component, { localVue })
